# Proof of Cloud Website

The official website for the Proof of Cloud Alliance - a vendor-neutral alliance maintaining a signed registry of cloud-hosted server hardware identities for verifiable confidential computing.

## 🌐 Live Website

Visit the website at: [https://proofofcloud.org](https://proofofcloud.org)

## 📋 About

Proof of Cloud is a consortium that maintains a transparent, verifiable registry of cloud hardware identities to bridge the trust gap in confidential computing. The alliance enables verification that TEE workloads run on genuine cloud infrastructure rather than potentially compromised hardware.

## 🚀 Features

- **Hardware Verification**: Multi-level verification process for Intel TDX and AMD SEV hardware
- **Alliance Governance**: Transparent governance structure with founding members
- **Interactive Verification**: Live attestation verification tool
- **Comprehensive Documentation**: Complete charter, privacy policy, and terms of service
- **Modern Design**: Built with Next.js and shadcn/ui for professional appearance

## 📁 Repository Structure

```
├── frontend/                   # Next.js application with shadcn/ui
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Nav & Footer
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # shadcn theme variables
│   ├── components/
│   │   ├── ui/                 # shadcn components (button, card, etc.)
│   │   ├── nav.tsx             # Navigation component
│   │   ├── footer.tsx          # Footer component
│   │   └── verification-form.tsx  # Attestation verification form
│   └── public/assets/          # Images and logos
├── server/                     # Node.js backend (separate)
│   └── server.js               # Express server with verification API
├── dcap_collateral_tool/       # Intel DCAP verification tool
├── docs/                       # Alliance documentation
│   ├── charter-draft-v0.1.md
│   ├── l1-verification-methods.md
│   ├── rfid.md
│   └── overview.md
├── assets/                     # Original assets
└── package.json               # Backend dependencies
```

## 🛠 Technical Stack

### Frontend (Next.js + shadcn/ui)
- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **lucide-react**: Icon library

### Backend (Node.js)
- **Express**: Web server framework
- **DCAP Tool**: Intel attestation verification
- **API Endpoint**: `/api/verify-attestation`

## 🏢 Alliance Members

### Members
- **Secret Network** - Privacy-first blockchain platform
- **Phala Network** - Confidential computing cloud

## 📝 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Running the Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Running the Backend (Node.js)

```bash
# In the root directory
npm install
npm start
# or
npm run dev
```

The backend API will be available at `http://localhost:3000/api/*`

### Building DCAP Tool

```bash
# Prerequisites (Ubuntu/Debian)
sudo apt update
sudo apt install -y g++ libsgx-dcap-ql libsgx-dcap-quote-verify-dev libsgx-dcap-ql-dev

# Build
cd dcap_collateral_tool
g++ dcap_collateral_tool.cpp \
  -O2 \
  -L/usr/lib/x86_64-linux-gnu \
  -lsgx_dcap_quoteverify \
  -o bin/dcap_collateral_tool
```

### Project Setup

The project consists of two separate parts:

1. **Frontend** (`/frontend`): Next.js application with shadcn/ui components
2. **Backend** (`/server`): Node.js Express server with attestation verification

These run independently - the frontend makes API calls to the backend.

## 🎨 Design System

The website uses **shadcn/ui** for a modern, professional design:

- Clean, minimal aesthetic
- Neutral color palette (slate/zinc)
- Subtle shadows and borders
- Responsive grid layouts
- Dark mode support (built-in)
- Professional typography with Inter font

## 🔗 Key Links

- **Apply for Membership**: [Google Form](https://forms.gle/kcradbEPmp9ZUbhx8)
- **Charter**: `/charter`
- **Verification Methods**: `/verification-methods`
- **Privacy Policy**: `/privacy`
- **Terms of Service**: `/tos`

## 📄 License

This website and its content are open source and vendor-neutral, reflecting the transparent nature of the Proof of Cloud Alliance.

## 🤝 Contributing

To suggest changes or report issues:
1. Open an issue in this repository
2. Submit a pull request with proposed changes
3. Apply for alliance membership to participate in governance

---

**Proof of Cloud Alliance** - Making confidential computing infrastructure verifiable, not merely asserted.
