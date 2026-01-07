# iLanding - Bootstrap Landing Page Template

## Overview

This is a static Bootstrap landing page template based on the iLanding template from BootstrapMade. The project consists of HTML pages with CSS styling and JavaScript for interactivity, integrated with Firebase for backend services. It serves as a landing page website with an admin panel for managing contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML Pages**: The site uses multiple HTML files (`index.html`, `service-details.html`, `starter-page.html`) as separate pages rather than a single-page application
- **Bootstrap 5.3.3**: Primary CSS framework for responsive design and UI components
- **Custom CSS**: Additional styling in `assets/css/main.css` with CSS custom properties for theming (colors, fonts)
- **Vendor Libraries**:
  - AOS (Animate On Scroll) for scroll animations
  - Swiper for touch-enabled sliders
  - GLightbox for lightbox/modal functionality
  - PureCounter for animated counters
  - Bootstrap Icons for iconography

### Backend Architecture
- **Firebase**: Used as the backend-as-a-service platform
  - Firebase Authentication for admin login
  - Firestore for storing contact form submissions
- **No Server**: This is a serverless architecture - all backend logic runs client-side with Firebase SDKs

### Admin Panel
- Located in `/admin/index.html`
- Protected by Firebase Authentication
- Displays contact messages stored in Firestore
- Simple login/logout functionality

### File Structure Pattern
```
/                   # Root HTML pages
/admin/             # Admin panel
/assets/css/        # Stylesheets
/assets/js/         # JavaScript files
/assets/vendor/     # Third-party libraries
/forms/             # Form handling (placeholder for PHP pro version)
```

### Design Decisions
1. **Static over Dynamic**: Chose static HTML for simplicity and fast loading - no build process required
2. **Firebase over Custom Backend**: Eliminates need for server management; provides real-time database and authentication out of the box
3. **CDN-loaded Firebase**: Firebase SDKs loaded via CDN (compat versions) for simplicity rather than npm packages
4. **Vendor CSS/JS included locally**: Third-party libraries bundled in assets rather than CDN links for reliability

## External Dependencies

### Firebase Services
- **Firebase Project ID**: `temp-67970`
- **Firestore Database**: Stores contact form submissions
- **Firebase Authentication**: Admin panel access control
- **SDK Version**: 10.7.1 (compat mode)

### CDN Dependencies
- Google Fonts (Roboto, Inter, Nunito font families)

### Bundled Vendor Libraries
- Bootstrap 5.3.3 (CSS + JS)
- Bootstrap Icons 1.11.3
- AOS (Animate On Scroll)
- Swiper 11.1.12
- GLightbox
- PureCounter 1.5.0

### Template License
- Based on BootstrapMade iLanding template
- Pro features (SCSS, PHP contact form) require separate purchase