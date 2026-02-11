# Theme System Guide

## Overview

Your portfolio now includes a fully functional light/dark mode theme system with persistent storage and smooth transitions.

## How It Works

### Components

1. **ThemeProvider** (`components/ThemeProvider.tsx`)
   - Context provider that manages theme state
   - Detects system preference on first load
   - Persists theme choice in localStorage
   - Wraps entire app in `app/layout.tsx`

2. **ThemeToggle** (`components/ThemeToggle.tsx`)
   - Client component with sun/moon icons
   - Toggles between light and dark themes
   - Located in the navbar for easy access
   - Shows loading state while mounting

3. **Navbar Integration** (`components/Navbar.tsx`)
   - Includes ThemeToggle button next to menu
   - Responsive design for mobile and desktop

### CSS Architecture

**Dark Mode Implementation:**
- Uses Tailwind's `class` strategy (adds `dark` class to `<html>`)
- CSS variables in `globals.css` for easy customization
- Smooth transitions for all color changes
- Bento cards have theme-specific styling

**Color Scheme:**
```
Light Mode:
- Background: #f6f6f8
- Text: #0f172a
- Primary: #1f5cff (slightly lighter for better contrast)

Dark Mode:
- Background: #0a0a0c
- Text: #ffffff
- Primary: #135bec (original blue)
```

## Features

✅ **Persistent Storage** - Theme preference saved to localStorage
✅ **System Preference Detection** - Respects OS dark mode setting
✅ **Smooth Transitions** - 300ms CSS transitions for color changes
✅ **No Flash** - Theme applied before render to prevent flashing
✅ **Accessible** - Proper ARIA labels and focus states
✅ **Customizable** - Easy to modify colors in tailwind config

## Customizing Colors

### Option 1: Tailwind Config
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#135bec',
  'background-light': '#f6f6f8',
  'background-dark': '#0a0a0c',
}
```

### Option 2: CSS Variables
Edit `app/globals.css`:

```css
:root {
  --color-primary: #135bec;
  --color-background-light: #f6f6f8;
  --color-background-dark: #0a0a0c;
}
```

## Using Dark Mode in Components

### Tailwind Utility Classes
```tsx
<div className="bg-white dark:bg-slate-900">
  <p className="text-slate-900 dark:text-white">Content</p>
</div>
```

### CSS Classes
```tsx
<div className="bento-card">
  {/* Automatically themed */}
</div>
```

## Testing Dark Mode

1. Click the sun/moon icon in the navbar
2. Refresh the page - theme persists
3. Clear localStorage to reset to system preference

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- System preference detection via `prefers-color-scheme` media query
- localStorage for persistence

## Accessibility

- Theme toggle has proper ARIA labels
- Sufficient color contrast in both modes
- Focus visible states for keyboard navigation
- Smooth transitions don't cause motion sickness

## Troubleshooting

**Theme not persisting?**
- Check browser's localStorage is enabled
- Open DevTools → Application → Local Storage

**Flash of wrong theme?**
- Ensure `suppressHydrationWarning` is in `<html>` tag
- Check ThemeProvider is wrapping app in layout

**Colors not changing?**
- Clear browser cache
- Check dark class is on `<html>` element
- Verify Tailwind dark mode is set to `class` strategy
