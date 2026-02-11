# Setup Guide - Parth's Portfolio

Complete setup instructions for getting your portfolio up and running.

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## Full Configuration

### Step 1: Customize Your Information

#### Update Home Page (`app/page.tsx`)
```typescript
// Change name and title
<h1>Hi, I'm <span className="text-primary">Your Name</span></h1>
<h2>Your Title | Your Specialty</h2>
```

#### Update Contact Information (`app/contact/page.tsx`)
```typescript
// Line ~152: Update email
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

// Line ~160: Update phone
<a href="tel:+your-number">
  +Your Number
</a>

// Line ~169: Update location
<p>Your City, Country</p>
```

#### Update Projects (`app/projects/page.tsx`)
Replace the projects array with your own projects:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    longDescription: 'Longer description',
    tags: ['React', 'Next.js'],
    image: 'https://your-image-url.com/image.jpg',
    link: 'https://your-project.com',
    github: 'https://github.com/youruser/project',
  },
  // Add more projects...
]
```

#### Update Experience (`app/experience/page.tsx`)
```typescript
const experience = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Your Company',
    period: '2020 - Present',
    description: 'What you do...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    skills: ['Skill1', 'Skill2'],
  },
  // Add more positions...
]
```

### Step 2: Email Configuration (Optional)

The contact form works in two modes:

#### Development Mode (No Setup Required)
- Form submissions appear in your terminal/console
- Perfect for testing locally
- No SMTP configuration needed

#### Production Mode (Email Integration)

**Option A: Gmail (Recommended)**

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Create app password (requires 2FA enabled)
3. Create `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
CONTACT_EMAIL=your-email@gmail.com
```

**Option B: SendGrid**

1. Create account at [sendgrid.com](https://sendgrid.com)
2. Generate API key from Settings
3. Create `.env.local`:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.your-api-key-here
CONTACT_EMAIL=your-email@example.com
```

**Option C: Other Services**
- Mailgun
- Brevo (Sendinblue)
- AWS SES
- Custom SMTP server

Use the same SMTP configuration format.

### Step 3: WhatsApp Integration

Update your WhatsApp number:

1. Open `components/WhatsAppFab.tsx`
2. Find line ~7:
```typescript
const phoneNumber = '919876543210' // Replace with your number
```
3. Replace with your number in format: `countrycode + phonenumber`
   - Examples:
     - India: `919876543210` (for +91-9876543210)
     - USA: `12125551234` (for +1-212-555-1234)
     - UK: `442071838750` (for +44-207-183-8750)

The message can be customized on line ~8.

### Step 4: Social Links

Update social media links in `components/Footer.tsx`:

```typescript
<a href="https://github.com/your-username">
  {/* GitHub link */}
</a>

<a href="https://linkedin.com/in/your-profile">
  {/* LinkedIn link */}
</a>

<a href="mailto:your-email@example.com">
  {/* Email link */}
</a>
```

### Step 5: Branding & Colors

#### Change Primary Color
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color-code', // e.g., '#FF6B6B'
}
```

#### Change Fonts
1. Update import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

2. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  display: ['YourFont', 'sans-serif'],
}
```

### Step 6: Add Profile Picture

Add your profile image to `public/` folder and reference it in your pages:

```typescript
<img src="/your-image.jpg" alt="Profile" />
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Add environment variables:
   - Go to "Settings" → "Environment Variables"
   - Add: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`
6. Click "Deploy"

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Site Settings
6. Deploy

### Deploy to Self-Hosted Server

1. Run `npm run build`
2. Run `npm start`
3. Use PM2 for production:
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Troubleshooting

### Contact Form Not Sending Emails

**Check these:**
1. Environment variables are correctly set in `.env.local`
2. If using Gmail: app password is correct (16 characters)
3. If using Gmail: 2FA is enabled on Gmail account
4. SMTP credentials are correct for your provider
5. Firewall isn't blocking SMTP port

**Test Email:**
1. Fill contact form with test data
2. Check browser console for errors
3. Check terminal for API logs
4. Check email inbox (and spam folder)

### WhatsApp Button Not Working

1. Verify phone number format (no +, spaces, or dashes)
2. Ensure international format (country code + number)
3. Test URL directly: `https://wa.me/YOUR_NUMBER`
4. WhatsApp must be installed on device (mobile)

### Site Not Loading

1. Clear `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run dev`

### Styles Not Loading

1. Ensure Tailwind CSS is imported in `app/globals.css`
2. Check `tailwind.config.ts` paths are correct
3. Clear Next.js cache: `npm run build`

## Performance Optimization

### Image Optimization
- Keep images under 1MB
- Use webp format for better compression
- Consider using services like Cloudinary or Vercel's Image Optimization

### Code Splitting
Already handled by Next.js automatically.

### Bundle Size
- Current: ~150KB (gzipped)
- Monitor with: `npm run build`

## Security Checklist

- ✅ Never commit `.env.local` (included in `.gitignore`)
- ✅ Use app passwords for email (not main account password)
- ✅ Environment variables only in `.env.local` and server files
- ✅ Contact form validation on both client and server
- ✅ Rate limiting recommended for production (add Vercel Rate Limit)
- ✅ HTTPS enabled by default on Vercel

## Monitoring

### Setup Error Tracking (Optional)

Use Sentry for production error monitoring:

1. Sign up at [sentry.io](https://sentry.io)
2. Create Next.js project
3. Follow integration guide
4. Add SENTRY_AUTH_TOKEN to environment variables

## Next Steps

1. ✅ Customize all information
2. ✅ Setup email (optional but recommended)
3. ✅ Configure WhatsApp (optional)
4. ✅ Test locally: `npm run dev`
5. ✅ Deploy to Vercel
6. ✅ Monitor form submissions
7. ✅ Share your portfolio!

## Support

For issues:
1. Check this guide first
2. Check README.md
3. Check Next.js docs: [nextjs.org](https://nextjs.org)
4. Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)

---

**Last Updated**: 2024
