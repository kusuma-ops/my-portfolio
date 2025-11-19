# Portfolio Website

## Overview

A modern, responsive personal portfolio webpage built with semantic HTML5, CSS3, and vanilla JavaScript. This project showcases professional work, skills, and contact information with a clean, accessible design following Dribbble and Behance-inspired layouts. The site features a hero section, about me, skills showcase, project cards, and a contact form with full mobile responsiveness and accessibility support.

**Last Updated:** October 16, 2025

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Font Awesome for icon library
- Google Fonts (Inter and Poppins) for typography

**Design System:**
- CSS Custom Properties (CSS variables) for theming and consistent styling
- Color palette: Primary #2C3E50 (navy), Secondary #3498DB (blue), Accent #E74C3C (coral), Background #FFFFFF (white), Text #2C3E50 (dark), Light Grey #F8F9FA (sections)
- Modular CSS architecture with clear separation of concerns
- Mobile-first responsive design approach with breakpoints at 768px and 480px

**Component Structure:**
- Fixed navigation header with hamburger menu for mobile devices
- Responsive navigation that transforms between desktop and mobile views
- Section-based layout (home/hero, about, skills, projects, contact)
- Reusable container class for consistent page width and padding

**JavaScript Functionality:**
- Event-driven architecture using vanilla JavaScript
- DOM manipulation for interactive elements (hamburger menu, navigation)
- Scroll-based effects for navbar shadow enhancement
- ARIA attributes for accessibility (aria-expanded, aria-controls, aria-invalid, aria-label)
- Mobile menu toggle with animated hamburger icon transformation
- Form validation with real-time error feedback and visual indicators
- Blur event validation for immediate user feedback
- Intersection Observer for scroll-based section animations

**State Management:**
- Simple boolean state tracking through CSS classes (`.active`)
- Local state management for menu open/closed status
- Scroll position tracking for UI enhancements

### Design Patterns

**CSS Architecture:**
- Utility-first approach with reusable container classes
- CSS custom properties for theme management and easy customization
- Consistent transition timing using CSS variables
- Shadow elevation system for depth and hierarchy

**JavaScript Patterns:**
- Event delegation for navigation links
- DOM-ready pattern using `DOMContentLoaded`
- Separation of concerns with distinct event handlers for different UI components

**Responsive Design:**
- Hamburger menu implementation for mobile navigation
- Viewport-based responsive behavior
- Touch-friendly interactive elements

**Accessibility Considerations:**
- Semantic HTML5 structure with proper section elements
- ARIA labels and attributes for screen readers (aria-expanded, aria-controls, aria-invalid, aria-label, aria-required)
- Proper state management for interactive elements with string-based ARIA values
- Keyboard navigation support through native browser behavior
- Focus management for interactive elements
- Form validation with both visual and programmatic error feedback

### Performance Optimizations

- Font preconnect for Google Fonts to reduce latency
- CDN delivery for Font Awesome icons
- Smooth scroll behavior implemented via CSS
- Minimal JavaScript for fast page load
- CSS-based animations for better performance than JavaScript animations

## External Dependencies

### Font Services
- **Google Fonts API**: Provides Inter (weights: 300, 400, 500, 600, 700) and Poppins (weights: 400, 500, 600, 700) typefaces
- **Purpose**: Professional typography with web-optimized font loading

### Icon Libraries
- **Font Awesome 6.4.0 (CDN)**: Icon library via CloudFlare CDN
- **Purpose**: Scalable vector icons for UI elements and visual enhancement

### Third-party Services
- Currently no backend services, databases, or API integrations
- Static website architecture with client-side only functionality
- Contact form with client-side validation (backend integration can be added later)

## Recent Changes

### October 16, 2025 - Initial Implementation Complete
- Created complete portfolio website with all required sections:
  - Hero section with name, title, and call-to-action buttons
  - About Me section with biography and statistics
  - Skills section with categorized skill cards (Frontend, Backend, Design, Tools)
  - Projects section with 6 interactive project cards
  - Contact form with validation and social media links
- Implemented full mobile responsiveness with hamburger menu
- Added comprehensive accessibility features with proper ARIA attribute management
- Configured Python HTTP server workflow for local development
- Applied specified color scheme throughout (navy, blue, coral accents)

## Customization Guide

To personalize this portfolio:

1. **Update Personal Information** (index.html):
   - Replace "Your Name" with your actual name
   - Update the hero subtitle with your professional title
   - Modify the about section biography
   - Update statistics in the About section

2. **Add Your Projects** (index.html):
   - Replace project card content with your actual projects
   - Update project titles, descriptions, and tags
   - Add real project links in the anchor tags

3. **Update Contact Information** (index.html):
   - Replace email, phone number, and location
   - Update social media links (GitHub, LinkedIn, Twitter, Dribbble)

4. **Customize Colors** (styles.css):
   - Modify CSS variables in the `:root` section
   - Current palette: navy (#2C3E50), blue (#3498DB), coral (#E74C3C)

5. **Add Real Images**:
   - Replace image placeholders in About and Projects sections
   - Maintain aspect ratios for best appearance