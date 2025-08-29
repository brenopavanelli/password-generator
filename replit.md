# Password Generator

## Overview

This is a fully functional web-based password generator application that creates secure, customizable passwords for users. The application provides an intuitive interface for generating passwords with various criteria including length, character types, and complexity options. The project is built using vanilla HTML, CSS, and JavaScript with a focus on security and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**August 29, 2025**:
- Implemented complete password generator web application
- Added responsive design with modern UI/UX
- Integrated cryptographically secure password generation
- Set up Python HTTP server for development and deployment
- Configured Replit workflows and deployment settings

## System Architecture

**Current State**: Fully functional web application with complete frontend implementation and deployment configuration.

**Frontend Implementation**:
- **HTML**: Clean, semantic structure with form controls for password customization
- **CSS**: Modern, responsive design with gradient backgrounds and smooth animations
- **JavaScript**: Object-oriented password generation class with cryptographic security

**Core Features**:
- Adjustable password length (4-50 characters)
- Character type selection (lowercase, uppercase, numbers, symbols)
- Option to exclude similar-looking characters
- Real-time password strength assessment
- One-click password copying to clipboard
- Mobile-responsive design

**Security Considerations**:
- Uses `window.crypto.getRandomValues()` for cryptographically secure random generation
- Fallback to `Math.random()` for older browser compatibility
- Password strength analysis based on length, character variety, and uniqueness
- No password storage or transmission

**Deployment**:
- Python built-in HTTP server for static file serving
- Configured for port 5000 with 0.0.0.0 binding for Replit compatibility
- Autoscaling deployment target for production

## Project Structure

```
/
├── index.html          # Main application interface
├── style.css           # Responsive styling and animations
├── script.js           # Password generation logic and UI interactions
├── replit.md           # Project documentation
├── README.md           # Basic project description
├── .replit             # Replit configuration
├── .gitignore          # Git ignore rules for Node.js projects
└── LICENSE             # Project license
```

## External Dependencies

**Runtime Dependencies**: None - Pure vanilla web technologies
**Development Dependencies**: Python 3.11 (for local HTTP server)
**Browser Requirements**: Modern browsers with Web Crypto API support (fallback available)