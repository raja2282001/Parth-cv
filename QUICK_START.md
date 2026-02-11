# Quick Start - 5 Minutes to Live Portfolio

Get your portfolio up and running in just 5 minutes!

## Step 1: Install (1 minute)
```bash
npm install
```

## Step 2: Run (1 minute)
```bash
npm run dev
```

Visit: **http://localhost:3000**

## Step 3: Customize (2 minutes)

### Update Your Name & Title
Open `app/page.tsx` and find:
```typescript
Hi, I'm <span className="text-primary">Parth</span>
```
Change `Parth` to your name.

### Update Your Email
Open `app/contact/page.tsx` and find:
```typescript
<a href="mailto:patelparth4655@gmail.com">
  patelparth4655@gmail.com
</a>
```
Change to your email.

### Update Your Phone
Same file, find:
```typescript
<a href="tel:+919876543210">
  +91 987 654 3210
</a>
```
Change to your phone.

## Step 4: Deploy (1 minute)

### Option A: Vercel (Easiest)
1. Push to GitHub (if not already)
2. Go to https://vercel.com
3. Click "Add New..." → "Project"
4. Import your repository
5. Click "Deploy"

Done! Your site is live.

### Option B: Netlify
1. Go to https://netlify.com
2. Click "Add new site"
3. Choose "Import an existing project"
4. Select GitHub repository
5. Click "Deploy"

### Option C: Local Server
```bash
npm run build
npm run start
```

---

## That's It!

Your portfolio is now live! 🎉

## Next: Setup Email (Optional)

If you want the contact form to send emails:

1. Create `.env.local` file
2. Add your email provider credentials (see SETUP_GUIDE.md)
3. Done!

In development mode, form submissions appear in your terminal without needing email setup.

---

## Common Tasks

### Change Primary Color
Edit `tailwind.config.ts`, change:
```typescript
primary: '#135bec', // Change this color code
```

### Update Projects
Edit `app/projects/page.tsx`, modify the projects array with your own projects.

### Update Experience
Edit `app/experience/page.tsx`, modify the experience array.

### Change WhatsApp Number
Edit `components/WhatsAppFab.tsx`, line 8:
```typescript
const phoneNumber = 'YOUR_NUMBER_HERE'
```

### Add Social Links
Edit `components/Footer.tsx`, update the social media links.

---

## Need Help?

- **Setup Issues**: See SETUP_GUIDE.md
- **Customization**: See MIGRATION.md
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com

---

**You're all set! Share your new portfolio with the world.** 🚀
