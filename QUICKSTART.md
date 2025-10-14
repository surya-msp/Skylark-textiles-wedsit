# Quick Start Guide - Skylark Textiles Website

Get the Skylark Textiles website up and running in minutes.

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173`

## 📁 Project Overview

```
project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (routes)
│   ├── data/           # JSON data files
│   └── theme/          # MUI theme configuration
├── public/
│   └── assets/         # Images and static files
└── dist/               # Production build (created by npm run build)
```

## 🎨 Available Routes

- `/` - Home page
- `/about` - About us
- `/services` - Services & capabilities
- `/news` - News articles
- `/news/:slug` - Individual news article
- `/blog` - Blog posts
- `/blog/:slug` - Individual blog post
- `/events` - Events calendar
- `/contact` - Contact form
- `/booking` - Booking form

## ✏️ Editing Content

### 1. Update Company Information

**Contact Details** (`src/components/Footer.jsx`):
```javascript
// Lines ~79-109 - Update address, phone, email, hours
```

**Company Summary** (`src/pages/Home.jsx`, `src/pages/About.jsx`):
- Look for `TODO:` comments
- Replace placeholder text with actual content

### 2. Update Services

Edit `src/data/services.json`:
```json
{
  "title": "Service Name",
  "description": "Description here",
  "capacity": "50 tons per day",
  "machinery": ["Machine 1", "Machine 2"]
}
```

### 3. Add News Articles

Edit `src/data/news.json`:
```json
{
  "id": 1,
  "slug": "article-url",
  "title": "Article Title",
  "excerpt": "Brief description",
  "date": "2024-10-01",
  "image": "/assets/image.jpg",
  "content": "Full article text..."
}
```

### 4. Add Blog Posts

Edit `src/data/blog.json` (same format as news.json, with author and tags)

### 5. Add Events

Edit `src/data/events.json`:
```json
{
  "id": 1,
  "title": "Event Name",
  "startDate": "2025-02-10",
  "endDate": "2025-02-13",
  "location": "Event Location",
  "description": "Description here",
  "type": "upcoming",
  "image": "/assets/event.jpg"
}
```

## 🖼️ Adding Images

1. Place images in `public/assets/`
2. Reference them as `/assets/filename.jpg` in your code

**Recommended images:**
- Hero images: 1920x1080px
- Gallery images: 1200x800px
- Article images: 1200x630px
- Event images: 1200x630px

## 🎨 Changing Colors/Theme

Edit `src/theme/theme.js`:

```javascript
palette: {
  primary: {
    main: '#1a1a2e',  // Dark charcoal
  },
  secondary: {
    main: '#c9a961',  // Muted gold
  },
  background: {
    default: '#faf8f5',  // Off-white
  }
}
```

## 🔍 Finding Placeholder Content

Search for TODO comments:
```bash
grep -r "TODO:" src/
```

All areas requiring PDF content are marked with TODO comments.

## 📝 Testing Your Changes

```bash
# Development mode (with hot reload)
npm run dev

# Production build (verify before deployment)
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)
3. Or connect your GitHub repo for continuous deployment

### Deploy to Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder via FTP
3. Point your domain to the uploaded files

## ⚠️ Common Issues

### Images not loading
- Ensure images are in `public/assets/`
- Use `/assets/filename.jpg` (leading slash important)
- Check file names match exactly (case-sensitive)

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Styling issues
- MUI v5 uses `sx` prop for styling
- Check browser console for errors
- Ensure all components are imported correctly

## 📚 Further Reading

- **Full Documentation:** See `README.md`
- **Content Integration:** See `CONTENT_GUIDE.md`
- **MUI Documentation:** [mui.com](https://mui.com)
- **React Router:** [reactrouter.com](https://reactrouter.com)

## 🆘 Need Help?

1. Check `CONTENT_GUIDE.md` for detailed content mapping
2. Search for `TODO:` comments in the code
3. Review the README.md for comprehensive documentation

---

**Pro Tip:** Start by updating `src/data/*.json` files first, then move to React component files. This way, you can see your content appear on the site immediately!
