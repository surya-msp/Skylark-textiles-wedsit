# Skylark Textiles - Company Website

A premium, responsive company website for Skylark Textiles built with React, MUI v5, and React Router. Features a clean, elegant design inspired by luxury textile aesthetics with comprehensive company information, services, news, blog, events, and contact functionality.

## 🚀 Features

- **Modern Tech Stack**: Vite + React 18 + MUI v5 + React Router
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Premium Aesthetics**: Luxury textile-inspired design with elegant typography and generous whitespace
- **SEO Optimized**: React Helmet Async for per-route meta tags
- **Complete Pages**: Home, About, Services, News, Blog, Events, Contact, Booking
- **Interactive Forms**: Contact and booking forms with validation
- **Dynamic Routing**: Individual article pages for news and blog posts
- **Event Management**: Calendar integration with .ics file download
- **Accessibility**: Keyboard navigation, ARIA labels, proper focus management

## 📁 Project Structure

```
project/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx
│   │   ├── Section.jsx
│   │   ├── HighlightCard.jsx
│   │   ├── Gallery.jsx
│   │   ├── ContactForm.jsx
│   │   └── BookingForm.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── News.jsx
│   │   ├── NewsArticle.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Events.jsx
│   │   ├── Contact.jsx
│   │   └── Booking.jsx
│   ├── data/            # JSON data files
│   │   ├── news.json
│   │   ├── blog.json
│   │   ├── events.json
│   │   └── services.json
│   ├── theme/           # MUI theme configuration
│   │   └── theme.js
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Application entry point
├── public/
│   └── assets/          # Images and static assets
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep charcoal (#1a1a2e) for text and headers
- **Secondary**: Muted gold (#c9a961) for accents and CTAs
- **Background**: Warm off-white (#faf8f5)
- **Text**: Charcoal (#1a1a2e) and secondary gray (#4a4a5e)

### Typography
- **Headings**: Cormorant Garamond (serif) - elegant and refined
- **Body**: Inter (sans-serif) - clean and readable
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- Consistent 8px spacing system
- Generous whitespace for premium feel
- Container max-width: 1280px

## 🔧 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Content Management

### Updating Content from PDF

The website is structured to easily integrate content from the Skylark Textiles PDF. Look for `TODO:` comments throughout the codebase marking areas where PDF content should be inserted.

#### Key Areas to Update:

1. **Company Information** (src/components/Footer.jsx)
   - Company summary
   - Contact details (address, phone, email)
   - Business hours
   - Social media links

2. **Home Page** (src/pages/Home.jsx)
   - Hero headline and subtitle
   - Company overview
   - Mission statement

3. **About Page** (src/pages/About.jsx)
   - Company history and heritage
   - Mission, vision, and values
   - Timeline milestones
   - Facilities and capacity
   - Leadership information

4. **Services** (src/data/services.json)
   - Detailed capabilities
   - Machinery specifications
   - Capacity metrics
   - Turnaround times
   - Minimum order quantities

5. **Contact Page** (src/pages/Contact.jsx)
   - Physical address
   - Phone numbers
   - Email addresses
   - Business hours
   - Map coordinates

### Updating Data Files

All content data is stored in JSON files in the `src/data/` directory:

#### News (src/data/news.json)
```json
{
  "id": 1,
  "slug": "article-url-slug",
  "title": "Article Title",
  "excerpt": "Short description",
  "date": "2024-10-01",
  "image": "/assets/image.jpg",
  "content": "Full article content..."
}
```

#### Blog (src/data/blog.json)
```json
{
  "id": 1,
  "slug": "post-url-slug",
  "title": "Post Title",
  "excerpt": "Short description",
  "date": "2024-10-01",
  "author": "Author Name",
  "tags": ["tag1", "tag2"],
  "image": "/assets/image.jpg",
  "content": "Full post content..."
}
```

#### Events (src/data/events.json)
```json
{
  "id": 1,
  "title": "Event Name",
  "startDate": "2025-02-10",
  "endDate": "2025-02-13",
  "location": "Event Location",
  "description": "Event description",
  "type": "upcoming",
  "image": "/assets/image.jpg"
}
```

#### Services (src/data/services.json)
```json
{
  "id": 1,
  "title": "Service Name",
  "description": "Service description",
  "capabilities": ["Capability 1", "Capability 2"],
  "machinery": ["Machine 1", "Machine 2"],
  "capacity": "Production capacity",
  "turnaround": "Time estimate",
  "moq": "Minimum order quantity"
}
```

## 🖼️ Adding Images

Place images in the `public/assets/` directory. Reference them in your code using `/assets/filename.jpg`.

### Recommended Images:
- `/assets/loom-hero.jpg` - Weaving looms
- `/assets/dyeing-line.jpg` - Dyeing facilities
- `/assets/quality-control.jpg` - QC inspection
- `/assets/spinning-facility.jpg` - Spinning operations
- `/assets/fabric-samples.jpg` - Product samples
- `/assets/sustainable-production.jpg` - Sustainability initiatives
- `/assets/about-hero.jpg` - Company overview
- `/assets/about-story.jpg` - Heritage and history

For best results, use high-quality images with a 16:9 or 4:3 aspect ratio.

## 🎯 Key Features Explained

### Routing
- All routes are configured in `src/App.jsx`
- Dynamic routes for news and blog articles (`:slug` parameter)
- 404 handling with automatic redirect

### Forms
- **Contact Form**: Validation for name, email, phone, subject, and message
- **Booking Form**: Date/time picker, visit type selection, event pre-fill
- Success states with print-friendly confirmation

### SEO
- React Helmet Async for meta tags
- Per-route titles and descriptions
- Open Graph and Twitter card support (can be extended)

### Events Calendar
- Automatic .ics file generation
- Add to calendar functionality
- Past/upcoming event filtering

## 🚀 Deployment

### Build
```bash
npm run build
```
This creates a `dist/` directory with optimized production files.

### Deploy Options
- **Vercel**: Connect your git repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect to git
- **AWS S3**: Upload `dist/` contents to S3 bucket with static hosting
- **Traditional hosting**: Upload `dist/` contents via FTP

### Environment Variables
For production, ensure any API keys or configuration are set as environment variables:
- Create `.env` file for local development
- Use hosting platform's environment variable settings for production

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Troubleshooting

### Dev Server Cache Issues (504 Error)

If you encounter "504 Outdated Optimize Dep" errors when running the dev server:

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

The vite.config.js has been configured with `force: true` to prevent this issue, but occasionally you may need to manually clear the cache.

## 📄 License

Copyright © 2024 Skylark Textiles. All rights reserved.

## 🤝 Support

For questions or support, please contact the development team or refer to the component documentation within the codebase.

---

Built with ❤️ for Skylark Textiles
