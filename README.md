# Parth's Portfolio - Next.js Edition

A modern, fully-functional portfolio website built with Next.js 16, Tailwind CSS, and modern web technologies.

## Features

✨ **Modern Design**
- Responsive design that works perfectly on mobile, tablet, and desktop
- Dark mode support with smooth transitions
- Glassmorphism effects and bento-style layouts
- Smooth animations and transitions

📧 **Contact Form with Email Integration**
- Fully functional contact form with validation
- Email notifications sent directly to your inbox
- Confirmation emails sent to visitors
- Development mode for testing without SMTP setup

💬 **WhatsApp Integration**
- Floating WhatsApp button for quick communication
- Pre-filled message templates
- Mobile-optimized design

🚀 **Multiple Pages**
- **Home**: Hero section with featured projects and tech stack
- **Projects**: Full portfolio of all projects with descriptions
- **Experience**: Career history, achievements, and education
- **Contact**: Contact form and multiple communication channels

🔍 **SEO Optimized**
- Meta tags and descriptions
- Semantic HTML structure
- Fast loading performance
- Mobile-friendly design

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Email**: Nodemailer
- **Validation**: Zod
- **Deployment**: Vercel

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/parth-cv.git
cd parth-cv
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

### Configuration

#### Email Setup (Optional)

For the contact form to send emails, configure your email provider:

**Using Gmail (Recommended for Development):**
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=your-email@gmail.com
```

**Using SendGrid:**
1. Create a SendGrid account and API key
2. Add to `.env.local`:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
```

#### WhatsApp Setup

1. Update the WhatsApp number in `components/WhatsAppFab.tsx`:
```typescript
const phoneNumber = 'YOUR_COUNTRY_CODE_AND_NUMBER' // e.g., '919876543210'
```

2. Update WhatsApp links in your pages if needed

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── experience/
│   │   └── page.tsx              # Experience page
│   ├── projects/
│   │   └── page.tsx              # Projects page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Footer.tsx                # Footer component
│   ├── Navbar.tsx                # Navigation component
│   └── WhatsAppFab.tsx           # WhatsApp floating button
├── public/                       # Static files
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Customization

### Update Personal Information

1. **Name & Title**: Edit `app/page.tsx` hero section
2. **Contact Details**: Update `app/contact/page.tsx`
3. **Projects**: Modify projects array in `app/projects/page.tsx`
4. **Experience**: Update experience array in `app/experience/page.tsx`
5. **Social Links**: Update `components/Footer.tsx` social URLs

### Colors & Styling

Tailwind colors are defined in `tailwind.config.ts`. Modify the `colors` object:
```typescript
colors: {
  primary: '#135bec',                // Main brand color
  'background-light': '#f6f6f8',    // Light mode background
  'background-dark': '#0a0a0c',     // Dark mode background
}
```

### Fonts

The portfolio uses **Space Grotesk** font. To change:
1. Update font import in `app/globals.css`
2. Modify `font-display` in `tailwind.config.ts`

## Contact Form Testing

In **development mode** (without SMTP configured), contact submissions will be logged to the console. No external email service is required.

Example console output:
```
📧 Contact Form Submission (Development Mode):
Name: John Doe
Email: john@example.com
Subject: Project Inquiry
Message: I'm interested in working together...
```

## Performance

- ⚡ Fast page load times
- 📊 Optimized images
- 🔄 Efficient code splitting
- 📱 Mobile-first responsive design

## Security

- ✅ Email validation on both client and server
- ✅ CSRF protection with Next.js built-in features
- ✅ Environment variables for sensitive data
- ✅ No client-side form data exposure
- ✅ Secure email routing with Nodemailer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to fork, modify, and use this portfolio template for your own projects!

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue on GitHub or contact me through the contact form.

---

**Made with ❤️ by Parth Patel**
