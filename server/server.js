const express = require('express');
const cors = require('cors');
const path = require('path');
const { execFile } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Where the DCAP tool binary is expected to be found.
// You can override with env var DCAP_TOOL_PATH if needed.
const DEFAULT_TOOL_PATH = path.join(
    __dirname,
    '..',
    'dcap_collateral_tool',
    'bin',
    'dcap_collateral_tool'
  );
  const TOOL_PATH = process.env.DCAP_TOOL_PATH || DEFAULT_TOOL_PATH;
  
  // --- Helpers ---------------------------------------------------------------
  
    // Returns true if `s` is a hex string with even length.
    function isHex(s) {
        return typeof s === 'string' && /^[0-9a-fA-F]+$/.test(s) && (s.length % 2 === 0);
    }
  
// Base64 detection is intentionally permissive (allows '=' and line breaks).
function isBase64ish(s) {
    return typeof s === 'string'
      && /^[A-Za-z0-9+/=\r\n]+$/.test(s)
      && (s.replace(/\s+/g, '').length % 4 === 0);
  }
  
  // Normalize user input into hex for the DCAP tool.
  // Returns hex string (lowercase) OR null (on unsupported/empty).
  function normalizeToHex(input) {
    const raw = (input ?? '').toString().trim();
    if (!raw) return null;
  
    // Compact whitespace and drop leading 0x
    const compact = raw.replace(/\s+/g, '');
    const maybeHex = compact.replace(/^0x/i, '');
    if (isHex(maybeHex)) return maybeHex.toLowerCase();
  
    // Try base64 → hex
    if (isBase64ish(raw)) {
      try {
        return Buffer.from(raw.replace(/\s+/g, ''), 'base64')
          .toString('hex')
          .toLowerCase();
      } catch { /* fallthrough to null */ }
    }
    return null;
  }
  
  // Execute the DCAP tool with a hex-encoded quote; returns parsed JSON-like object.
  // Never rejects for user/quote errors; only rejects if the tool binary is missing.
  function runDcapTool(hexQuote) {
    return new Promise((resolve, reject) => {
      // Hard fail only if tool is missing (server misconfig)
      if (!fs.existsSync(TOOL_PATH)) {
        return reject(new Error(`DCAP tool not found at ${TOOL_PATH}. Build it or set DCAP_TOOL_PATH.`));
      }
  
      // If input is not valid hex, return a synthetic "invalid" result.
      if (!hexQuote || typeof hexQuote !== 'string' || !isHex(hexQuote)) {
        return resolve({
          status: { result: '1', exp_status: undefined },
          collateral: { error: 'invalid_input' }
        });
      }
  
      // Call the tool; if it errors, return "invalid" (do not reject).
      execFile(
        TOOL_PATH,
        [hexQuote],
        { windowsHide: true, timeout: 20000 },
        (err, stdout, stderr) => {
          if (err) {
            // Treat all tool errors as "invalid" for the client path
            return resolve({
              status: { result: '1', exp_status: undefined },
              collateral: { error: 'exec_error', message: (stderr && stderr.toString()) || err.message || 'DCAP tool error' }
            });
          }
  
          try {
            const parsed = JSON.parse(stdout.toString());
  
            // Coerce status/result to the string form your handler expects ('0' | '1')
            const out = { ...parsed, status: parsed.status || {} };
            out.status.result = String(Number(out.status.result ?? 1)); // '0' on success, otherwise '1'
            return resolve(out);
          } catch {
            // Invalid JSON from tool → treat as "invalid"
            return resolve({
              status: { result: '1', exp_status: undefined },
              collateral: { error: 'invalid_json' }
            });
          }
        }
      );
    });
  }

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '..')));

// Serve static files (HTML, CSS, JS, assets)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/charter.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'charter.html'));
});

app.get('/privacy.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'privacy.html'));
});

app.get('/tos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'tos.html'));
});

// Attestation verification endpoint
app.post('/api/verify-attestation', async (req, res) => {
    try {
        const { attestation } = req.body;

        // Validate input
        if (!attestation || typeof attestation !== 'string' || attestation.trim().length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Invalid attestation provided'
            });
        }


        // 1) Normalize input (hex or base64 → hex)
        const hexQuote = normalizeToHex(attestation);

        // 2) Run DCAP verifier tool
        const toolJson = await runDcapTool(hexQuote);

        // 3) Basic checks and mapping
        //    toolJson.status.result === 0 → OK
        const status = toolJson.status || {};
        const attestationValid = status.result === '0';

        // Simulate processing time
        setTimeout(() => {
            const isInAllowlist = Math.random() > 0.5; // 50% chance of being in allowlist

            // Simulate extracting hardware details
            const mockHardwareDetails = {
                ppid: generateMockPPID(),
                tcbStatus: attestationValid  ? 'Up to Date' : 'Unknown'
            };

            res.json({
                success: true,
                verification: {
                    attestationValid: attestationValid,
                    machineInAllowlist: isInAllowlist
                },
                details: mockHardwareDetails,
                timestamp: new Date().toISOString()
            });
        }, 1000 + Math.random() * 1000); // 1-2 second delay

    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error during verification'
        });
    }
});

// Helper function to generate mock PPID
function generateMockPPID() {
    const chars = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result + '...' + result.slice(0, 4);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        service: 'Proof of Cloud Verification API'
    });
});

app.listen(PORT, () => {
    console.log(`Proof of Cloud server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the website`);
});