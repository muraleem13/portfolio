# Murali Munireddy - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Data Software Engineer.

## 🌟 Features

### ✨ **Modern Design**
- Clean, professional design with smooth animations
- Responsive layout that works on all devices
- Dark/Light theme toggle with system preference detection
- Modern CSS with custom properties and gradients

### 🚀 **Performance Optimized**
- Service Worker for offline support and caching
- Preloaded critical resources
- Optimized images and assets
- Fast loading times

### 📱 **Mobile-First**
- Fully responsive design
- Touch-friendly navigation
- Optimized for mobile devices
- Progressive Web App features

### 🎯 **SEO Optimized**
- Structured data (JSON-LD)
- Open Graph and Twitter Card meta tags
- Semantic HTML structure
- Optimized meta descriptions

### ♿ **Accessibility**
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)
- **Service Worker** - Offline support and caching

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── script.js               # JavaScript functionality
├── sw.js                   # Service Worker
├── README.md               # Project documentation
└── assets/
    ├── images/
    │   └── profile-photo.jpg
    └── resume/
        └── Resume_Murali_Munireddy.pdf
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muraleem13/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **For development with live reload**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Options
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **Firebase Hosting** - Google's hosting solution
- **Any static hosting service**

## 🎨 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a8e8;
    /* ... other colors */
}
```

### Content
- Update personal information in `index.html`
- Replace profile photo in `assets/images/`
- Update resume in `assets/resume/`
- Modify skills, projects, and experience sections

### Styling
- Modify `styles.css` for design changes
- Update animations and transitions
- Customize responsive breakpoints

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Development

### File Structure Best Practices
- Keep HTML semantic and accessible
- Use CSS custom properties for theming
- Modular JavaScript with clear separation of concerns
- Optimize images for web use

### Performance Tips
- Compress images before adding to assets
- Minify CSS and JavaScript for production
- Use WebP format for images when possible
- Enable gzip compression on server

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add this script before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: muralee.m13@gmail.com
- **LinkedIn**: [Murali Munireddy](https://www.linkedin.com/in/murali-munireddy-b45b80177)
- **GitHub**: [muraleem13](https://github.com/muraleem13)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock photos (if used)
- The open-source community for inspiration

---

**Built with ❤️ by Murali Munireddy**
