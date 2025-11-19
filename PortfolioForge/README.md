# Personal Portfolio Website

A clean, responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript.

## Features

✨ **Complete Sections:**
- Hero section with your name and professional title
- About Me with biography and statistics
- Skills showcase with categorized cards
- Projects portfolio with interactive cards
- Contact form with validation and social links

🎨 **Design:**
- Modern color scheme (Navy, Blue, Coral)
- Inter & Poppins typography
- Smooth animations and hover effects
- Card-based layouts with generous whitespace

📱 **Responsive:**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Breakpoints at 768px and 480px
- Touch-friendly interactive elements

♿ **Accessible:**
- Semantic HTML5 structure
- ARIA attributes for screen readers
- Keyboard navigation support
- Form validation with visual feedback

## Quick Start

The portfolio is already running! Just open the webview to see it in action.

## Customization

### 1. Personal Information
Edit `index.html` and replace:
- "Your Name" with your actual name
- "Creative Developer & Designer" with your title
- Update the about section with your biography
- Change the statistics (projects, years, clients)

### 2. Projects
In the Projects section, update each project card with:
- Project title and description
- Technology tags
- Project links (change `href="#"` to your actual URLs)

### 3. Contact Details
Update your contact information:
- Email address
- Phone number
- Location
- Social media links (GitHub, LinkedIn, Twitter, Dribbble)

### 4. Colors
To change the color scheme, edit `styles.css` and modify these CSS variables:
```css
:root {
    --primary-color: #2C3E50;    /* Navy - main color */
    --secondary-color: #3498DB;  /* Blue - accents */
    --accent-color: #E74C3C;     /* Coral - highlights */
    --bg-white: #FFFFFF;         /* White background */
    --text-dark: #2C3E50;        /* Dark text */
    --bg-light: #F8F9FA;         /* Light sections */
}
```

### 5. Images
Replace the placeholder icons with real images:
- Add your profile photo in the About section
- Add project screenshots in the Projects section

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and form validation
└── README.md          # This file
```

## Features Included

**Navigation:**
- Fixed header with smooth scroll
- Mobile hamburger menu
- Animated menu transitions

**Forms:**
- Client-side validation
- Real-time error feedback
- Success/error messages

**Animations:**
- Scroll-based section reveals
- Hover effects on cards
- Smooth transitions throughout

## Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

The contact form is fully functional for client-side validation. To connect it to a backend service, you'll need to add form submission handling in `script.js`.

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
