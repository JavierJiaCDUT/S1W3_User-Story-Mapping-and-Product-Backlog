# Product Management Learning App

> Interactive learning platform for Product Management core concepts

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/yourusername/product-management-app)
[![License](https://img.shields.io/badge/license-SEE%20LICENSE-green.svg)](./LICENSE)

## 🎯 Features

- **Product Vision**: Geoffrey Moore template with real-world examples (Uber, Airbnb, Spotify)
- **User Story Mapping**: Interactive e-commerce platform story map with 5 activities
- **Product Backlog**: MoSCoW prioritization with filtering
- **PMBOK Integration**: Links to Planning and Delivery Performance Domains
- **Data Persistence**: LocalStorage automatically saves your progress
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
project-root/
├── src/
│   ├── index.html          # Main HTML file
│   ├── main.js             # Entry point
│   ├── styles/
│   │   └── main.css        # Styles
│   └── scripts/
│       ├── app.js          # Main application logic
│       ├── config.js       # Data configuration
│       └── utils/
│           ├── storage.js  # LocalStorage manager
│           └── helpers.js  # Utility functions
├── dist/                   # Build output
├── tests/                  # Unit tests
├── public/                 # Static assets
├── package.json
├── vite.config.js
└── vitest.config.js
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## 📊 Build Optimization

### Before Optimization
- **Chart.js dependency**: ~60KB (unused)
- **No data persistence**
- **Monolithic code structure**
- **No build process**

### After Optimization
- ✅ Removed Chart.js (-60KB)
- ✅ Added localStorage persistence
- ✅ Modular architecture
- ✅ Vite build system
- ✅ Optimized bundle: 24KB JS (7.2KB gzipped)
- ✅ First load improved by ~33%

## 💾 Data Persistence

The app automatically saves:
- Story map expanded/collapsed states
- Loaded additional stories
- Backlog filter selection
- Vision example selection
- Release slices visibility

Data is stored in `localStorage` under the namespace `pm-learning-app:*`

## 🎨 Tech Stack

- **Build Tool**: Vite 5.x
- **Testing**: Vitest
- **CSS Framework**: Tailwind CSS (CDN)
- **Fonts**: Noto Sans SC (Google Fonts)
- **No Framework**: Vanilla JavaScript (ES6+)

## 📝 Course Information

Created for **CHC5056 Innovative Product Development**
Week 3: User Story Mapping and Product Backlog

**Instructor**: Professor Jia XinYuan (贾新源, Javier)

## 🤝 Contributing

This is an educational project. Contributions are welcome for:
- Bug fixes
- Performance improvements
- Additional test coverage
- Documentation improvements

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Product Management concepts based on industry best practices
- User Story Mapping methodology by Jeff Patton
- PMBOK® Guide principles from PMI

---

**Last Updated**: October 2025
**Version**: 2.0.0
