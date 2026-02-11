# Dark Mode & Light Mode Implementation

## Complete Portfolio with Theme System

Your portfolio has been updated with a complete light/dark mode theme system. This document explains everything.

## Quick Start

1. **Run the project:**
   ```bash
   npm install
   npm run dev
   ```

2. **Click the theme toggle** (sun/moon icon) in the top navbar

3. **Theme persists** - your preference is saved automatically

## What's New

### Components Added

#### 1. ThemeProvider.tsx
Manages the entire theme system:
- Detects system dark mode preference
- Stores user preference in localStorage
- Prevents hydration mismatch
- Provides `useTheme()` hook for components

```tsx
import { useTheme } from '@/components/ThemeProvider'

export function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>Switch Theme</button>
}
```

#### 2. ThemeToggle.tsx
Beautiful toggle button with sun/moon icons:
- Placed in the navbar
- Shows loading state while mounting
- Accessible with ARIA labels
- Smooth SVG transitions

### Updated Files

#### app/layout.tsx
```tsx
import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### components/Navbar.tsx
- Added ThemeToggle button
- Positioned in top-right near menu button
- Works on all screen sizes

#### app/globals.css
Enhanced with:
- CSS custom properties for colors
- Smooth 300ms transitions
- Theme-specific element styling
- Better scrollbar appearance
- Improved focus states

### Color Schemes

#### Light Mode
- Background: `#f6f6f8` (very light gray)
- Text: `#0f172a` (dark slate)
- Primary: `#1f5cff` (bright blue)
- Bento cards: Subtle dark overlay

#### Dark Mode
- Background: `#0a0a0c` (deep black)
- Text: `#ffffff` (white)
- Primary: `#135bec` (original blue)
- Bento cards: Subtle light overlay

## How to Use

### For Users

1. **Toggle Theme**
   - Click the sun/moon icon in navbar
   - Change applies instantly
   - Preference is saved

2. **Automatic Detection**
   - First visit: Detects OS dark mode setting
   - Follows `prefers-color-scheme: dark` media query

3. **Persistent Storage**
   - Theme choice saved in browser
   - Survives browser close/restart
   - Stored in localStorage under key `theme`

### For Developers

#### Check Current Theme
```javascript
// In browser console
const { theme } = useTheme() // In components
localStorage.getItem('theme') // Directly
```

#### Manually Set Theme
```javascript
// In browser console
localStorage.setItem('theme', 'light')
location.reload()
```

#### Add Dark Mode Styling
```tsx
// Tailwind classes
<div className="bg-white dark:bg-slate-900">
  <p className="text-black dark:text-white">Content</p>
</div>

// CSS selectors
<div className="my-card">
  /* Styles for dark mode only */
  html.dark & { color: white; }
</div>
```

## File Reference

### Theme System Files
- `components/ThemeProvider.tsx` - Context provider & hook
- `components/ThemeToggle.tsx` - Toggle button component
- `app/globals.css` - Theme styles & transitions
- `tailwind.config.ts` - Color configuration

### Integration Points
- `app/layout.tsx` - Wraps app with ThemeProvider
- `components/Navbar.tsx` - Contains ThemeToggle
- All pages - Automatically themed via Tailwind classes

## Customization

### Change Primary Color

In `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_HEX_CODE', // e.g., '#ff6b6b'
}
```

### Change Background Colors

In `tailwind.config.ts`:
```typescript
colors: {
  'background-light': '#YOUR_COLOR',
  'background-dark': '#YOUR_COLOR',
}
```

### Adjust Transition Speed

In `app/globals.css`:
```css
body {
  transition: background-color 0.5s ease; /* Change 0.3s to 0.5s */
}
```

### Disable System Preference

In `components/ThemeProvider.tsx`, comment out:
```tsx
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
// Then just use localStorage value
```

## Technical Details

### How It Works

1. **Theme Detection**
   ```
   1. Check localStorage for stored theme
   2. If none found, check OS preference
   3. If still none, default to dark
   4. Apply theme to document.documentElement.className
   ```

2. **Class-Based Dark Mode**
   - Tailwind's `darkMode: 'class'` strategy
   - Adds `class="dark"` to `<html>` element
   - All `dark:*` utilities activate

3. **Smooth Transitions**
   - CSS transitions on all color properties
   - 300ms duration for professional feel
   - No animation (better performance)

4. **Hydration Safety**
   - UseEffect hook to apply theme after mount
   - `suppressHydrationWarning` prevents warnings
   - Returns children on first render to avoid mismatch

### Storage
```javascript
localStorage.getItem('theme') // 'light' or 'dark'
localStorage.setItem('theme', 'light')
localStorage.removeItem('theme') // Reset to system preference
```

### Media Query
```css
@media (prefers-color-scheme: dark) {
  /* User has dark mode enabled in OS */
}
```

## Accessibility

✅ **ARIA Labels**
- Toggle button has proper `aria-label`
- Clear feedback on current mode

✅ **Color Contrast**
- WCAG AA compliant in both modes
- Sufficient contrast ratios

✅ **Focus States**
- Clear focus visible indicators
- Keyboard navigation supported
- `outline: 2px solid primary`

✅ **Motion**
- Smooth transitions (not animated)
- No flashing or jarring changes
- Respects reduced motion preferences

## Testing

### Manual Testing
1. Click toggle - theme switches
2. Refresh page - preference persists
3. Open DevTools - check `dark` class on `<html>`
4. Different browser - setting doesn't sync (localStorage is per-browser)
5. Incognito window - resets to system preference

### Browser DevTools
```javascript
// Check theme
document.documentElement.classList.contains('dark') // true or false

// Check storage
localStorage.getItem('theme') // 'dark' or 'light'

// Toggle manually
document.documentElement.classList.toggle('dark')
localStorage.setItem('theme', 'light')
```

### Responsive Testing
- Desktop: Theme toggle in navbar
- Tablet: Same navbar layout
- Mobile: Toggle still accessible

## Common Issues & Solutions

### "Theme doesn't persist"
- Check if localStorage is enabled
- DevTools → Application → Storage → LocalStorage
- Check for `theme` key

### "Flash of wrong theme on load"
- Ensure `suppressHydrationWarning` is on `<html>`
- Check ThemeProvider timing
- Clear browser cache

### "Colors not changing"
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check dark class exists: `document.documentElement.className`
- Verify Tailwind config has `darkMode: 'class'`

### "Not following OS preference"
- Check system settings (OS dark mode)
- Check media query: `window.matchMedia('(prefers-color-scheme: dark)').matches`
- Clear localStorage to reset

## Performance

- **No layout shifts** - colors transition smoothly
- **No JavaScript animation** - uses CSS transitions
- **Minimal rerenders** - context changes only affect necessary components
- **localStorage is fast** - synchronous read (fine for this use case)

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 76+ | ✅ Full support |
| Firefox 67+ | ✅ Full support |
| Safari 12.1+ | ✅ Full support |
| Edge 79+ | ✅ Full support |
| IE 11 | ❌ Not supported |

## Future Enhancements

Consider adding:
- Auto theme based on time of day
- More color themes (blue, green, purple variants)
- High contrast mode for accessibility
- Custom color picker
- Theme preview before switching

## Summary

Your portfolio now has:
- ✅ Full light/dark mode support
- ✅ Persistent theme preference
- ✅ System preference detection
- ✅ Smooth transitions
- ✅ Fully accessible
- ✅ Mobile responsive
- ✅ No performance impact

**Enjoy your new theme system!** 🌙☀️
