# StaySync — Digital Solutions Website

A professional React frontend website for StaySync, a freelance digital brand specializing in hotel website development and digital solutions.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `/build` folder ready for deployment.

## 📁 Project Structure

```
staysync/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Services.js / Services.css
│   │   ├── Industries.js / Industries.css
│   │   ├── Portfolio.js / Portfolio.css
│   │   ├── HowWeWork.js / HowWeWork.css
│   │   ├── WhyChooseUs.js / WhyChooseUs.css
│   │   ├── FutureReady.js / FutureReady.css
│   │   ├── Testimonials.js / Testimonials.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Design System

- **Primary Color:** Orange `#f97316`
- **Dark Navy:** `#1e2a3a`
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Fully responsive:** Mobile, Tablet, Desktop

## 🌐 Deployment

Deploy the `/build` folder to:
- **Vercel:** `vercel --prod`
- **Netlify:** Drag & drop the build folder
- **AWS S3 + CloudFront:** Upload build to S3 bucket

## 📋 Sections Included

1. ✅ Hero (with animated floating cards)
2. ✅ About StaySync
3. ✅ Services (9 service cards)
4. ✅ Industries We Serve (8 industries)
5. ✅ Portfolio (9 live project cards with filter)
6. ✅ How We Work (6-step process)
7. ✅ Why Choose Us (8 reasons + stats)
8. ✅ Future-Ready Solutions (dark section)
9. ✅ Testimonials (4 client reviews)
10. ✅ Contact Form
11. ✅ Footer

## 📞 Customization

- Update contact details in `Contact.js` and `Footer.js`
- Add your WhatsApp number in `Contact.js` and `Footer.js`
- Update portfolio URLs in `Portfolio.js`
- Replace placeholder testimonials with real ones in `Testimonials.js`
