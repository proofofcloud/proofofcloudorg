# Proof of Cloud Server

This directory contains the Node.js server for the Proof of Cloud website with attestation verification functionality.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```
   
   Or for development:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### POST /api/verify-attestation

Verifies a TEE attestation quote against the registry.

**Request:**
```json
{
  "attestation": "base64-encoded-attestation-quote"
}
```

**Response:**
```json
{
  "success": true,
  "verification": {
    "attestationValid": true,
    "machineInAllowlist": true
  },
  "details": {
    "ppid": "a3f2...8c91",
    "level": "Level 2",
    "provider": "Verified Cloud Provider",
    "lastVerified": "2025-10-23",
    "tcbStatus": "Up to Date"
  },
  "timestamp": "2025-10-23T10:30:00.000Z"
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-10-23T10:30:00.000Z",
  "service": "Proof of Cloud Verification API"
}
```

## Notes

- The current implementation returns random verification results for demonstration purposes
- Replace the mock verification logic in `server.js` with actual TEE attestation verification code
- The server serves static files from the parent directory (HTML, CSS, assets)