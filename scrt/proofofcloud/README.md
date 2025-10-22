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

## 📁 Repository Structure

```
├── index.html          # Main landing page
├── charter.html        # Alliance charter and governance
├── privacy.html        # Privacy policy
├── tos.html           # Terms of service
├── assets/            # Images and static assets
│   ├── clouds_hero.png            # Hero section background
│   ├── proof-of-cloud-logo.png    # Main logo
│   ├── proof-of-cloud-logo.svg    # Main logo (SVG)
│   ├── scrt.png                   # Secret Network logo
│   ├── phala.png                  # Phala Network logo
│   └── *.svg                      # Additional logo files
├── favicon-16.png      # 16x16 favicon
├── favicon-32.png      # 32x32 favicon
├── favicon.png         # Standard favicon
└── README.md          # This file
```

## 🛠 Technical Details

- **Static Website**: Pure HTML/CSS/JavaScript - no build process required
- **Responsive Design**: Mobile-friendly layout with modern CSS
- **Interactive Elements**: JavaScript-powered verification form
- **Optimized Assets**: Compressed images and efficient loading

## 🏢 Alliance Members

### Founding Members
- **Secret Network** - Privacy-first blockchain platform
- **Phala Network** - Confidential computing cloud built on Polkadot

## 📝 Development

### Local Development
Simply open `index.html` in a web browser or serve via any HTTP server:

```bash
# Using Python's built-in server
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP's built-in server
php -S localhost:8000
```

### Making Changes
1. Edit HTML files directly
2. Update assets in the `assets/` folder
3. Test locally
4. Commit and push to update the live site

## 🔗 Key Links

- **Apply for Membership**: [Google Form](https://forms.gle/kcradbEPmp9ZUbhx8)
- **Charter**: [charter.html](charter.html)
- **Privacy Policy**: [privacy.html](privacy.html)
- **Terms of Service**: [tos.html](tos.html)

## 📄 License

This website and its content are open source and vendor-neutral, reflecting the transparent nature of the Proof of Cloud Alliance.

## 🤝 Contributing

To suggest changes or report issues:
1. Open an issue in this repository
2. Submit a pull request with proposed changes
3. Apply for alliance membership to participate in governance

---

**Proof of Cloud Alliance** - Making confidential computing infrastructure verifiable, not merely asserted.