# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Proof of Cloud website - A vendor-neutral alliance maintaining a signed registry of cloud-hosted server hardware identities for verifiable confidential computing. The site provides hardware verification for Intel TDX and AMD SEV through interactive attestation verification.

## Architecture

### Frontend (Static HTML)
- **Pure HTML/CSS/JavaScript** - No build process or framework
- All pages are standalone HTML files with inline CSS and JavaScript
- Main pages: `index.html`, `charter.html`, `privacy.html`, `tos.html`
- Attestation verification form in `index.html` at line ~972

### Backend (Node.js/Express)
- **Entry point**: `server/server.js`
- **API endpoint**: `POST /api/verify-attestation` - accepts attestation quotes in hex or Base64 format
- **Health check**: `GET /api/health`
- Serves static files and handles attestation verification via DCAP tool

### DCAP Verification Tool
- **Location**: `dcap_collateral_tool/`
- **Binary**: `dcap_collateral_tool/bin/dcap_collateral_tool`
- **C++ source**: `dcap_collateral_tool/dcap_collateral_tool.cpp`
- Verifies Intel DCAP quotes (SGX/TDX) using libsgx_dcap_quoteverify
- **Note**: AMD SEV-SNP not handled by this tool
- Accepts hex-encoded quotes only (server converts Base64 → hex)
- Returns JSON with verification status, quote fields, and collateral data

## Common Commands

### Development
```bash
# Start development server (runs on port 3000 by default)
npm run dev
# or
npm start

# Serve static files only (alternative lightweight servers)
python -m http.server 8000
npx http-server
```

### Building DCAP Tool
```bash
# Prerequisites (Ubuntu/Debian)
sudo apt update
sudo apt install -y g++ libsgx-dcap-ql libsgx-dcap-quote-verify-dev libsgx-dcap-ql-dev

# Build from dcap_collateral_tool/ directory
g++ dcap_collateral_tool.cpp \
  -O2 \
  -L/usr/lib/x86_64-linux-gnu \
  -lsgx_dcap_quoteverify \
  -o bin/dcap_collateral_tool
```

### Testing DCAP Tool
```bash
# Test with hex quote
./dcap_collateral_tool/bin/dcap_collateral_tool <hex_quote>

# Override tool path (optional)
export DCAP_TOOL_PATH=/absolute/path/to/dcap_collateral_tool
```

## Key Implementation Details

### Attestation Verification Flow
1. User submits attestation quote via form (hex or Base64)
2. Frontend POSTs to `/api/verify-attestation`
3. Server normalizes input using `normalizeToHex()` (server/server.js:37-55)
4. Server executes DCAP tool via `runDcapTool()` (server/server.js:59-105)
5. Tool returns JSON with `status.result` ('0' = valid, '1' = invalid)
6. Server adds mock hardware details (PPID, TCB status) and allowlist check
7. Response returned to frontend with verification results

### Input Normalization (server/server.js)
- Accepts hex (with optional `0x` prefix) or Base64 encoded quotes
- `isHex()`: validates hex strings (server/server.js:24)
- `isBase64ish()`: permissive Base64 detection (server/server.js:29)
- `normalizeToHex()`: converts any valid input to lowercase hex (server/server.js:37)

### DCAP Tool Integration
- Default path: `dcap_collateral_tool/bin/dcap_collateral_tool`
- Override via `DCAP_TOOL_PATH` environment variable
- Tool timeout: 20 seconds
- Returns JSON with collateral, status, and quote fields (for TDX v4)

## Git Workflow

### Commit Guidelines
- **Always commit changes** after making modifications
- **NEVER mention AI tools in commit messages** - keep messages professional and technical
- Follow conventional commit format when appropriate
- Focus on describing what changed and why, not how it was implemented

## File Structure

```
├── index.html              # Main landing page with verification form
├── charter.html            # Alliance charter and governance
├── privacy.html            # Privacy policy
├── tos.html               # Terms of service
├── server/
│   └── server.js          # Express server with verification API
├── dcap_collateral_tool/
│   ├── dcap_collateral_tool.cpp   # C++ DCAP verifier source
│   ├── bin/
│   │   └── dcap_collateral_tool   # Compiled binary
│   └── README.md          # DCAP tool documentation
├── assets/                # Images and logos
├── package.json          # Node.js dependencies (express, cors)
└── README.md             # Project documentation
```

## Dependencies

- **express** ^4.18.2 - Web server framework
- **cors** ^2.8.5 - CORS middleware
- **Node.js** >=16.0.0 - Runtime requirement
- **Intel DCAP libraries** - Required for attestation verification (libsgx_dcap_quoteverify)

## Important Notes

- Website is deployed as static files with Node.js backend
- No build process for frontend (pure HTML/CSS/JS)
- DCAP tool must be compiled on target platform (Linux x86_64 only)
- Verification currently includes mock data for hardware allowlist checks
- Intel TDX quotes supported; AMD SEV-SNP requires different verifier
