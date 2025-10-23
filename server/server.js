const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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
app.post('/api/verify-attestation', (req, res) => {
    try {
        const { attestation } = req.body;

        // Validate input
        if (!attestation || typeof attestation !== 'string' || attestation.trim().length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Invalid attestation provided'
            });
        }

        // Simulate processing time
        setTimeout(() => {
            // Random verification results (as requested)
            const isValidAttestation = Math.random() > 0.3; // 70% chance of valid
            const isInAllowlist = Math.random() > 0.5; // 50% chance of being in allowlist

            // Simulate extracting hardware details
            const mockHardwareDetails = {
                ppid: generateMockPPID(),
                tcbStatus: isValidAttestation ? 'Up to Date' : 'Unknown'
            };

            res.json({
                success: true,
                verification: {
                    attestationValid: isValidAttestation,
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