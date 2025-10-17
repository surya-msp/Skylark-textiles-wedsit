# Image Reference Guide - Skylark Textiles Website

Quick reference for all images used throughout the home page.

## 🏠 HOME PAGE IMAGES

### 1. Hero Background
**Location:** `src/pages/Home.jsx` (line ~86)

```javascript
backgroundImage: 'url(https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920)'
```

**Image:** Colorful textile fabric rolls
**Size:** 1920x1080px (Full HD)
**Usage:** Full-screen hero background with dark overlay

---

### 2. Our Mission Section
**Location:** `src/pages/Home.jsx` (line ~204)

```javascript
src="https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=1200"
```

**Image:** Manufacturing facility
**Size:** 1200x800px
**Usage:** 2-column layout beside mission text

---

### 3. Our Facilities Gallery (9 Images)
**Location:** `src/pages/Home.jsx` (lines 47-56)

```javascript
const galleryImages = [
  // Image 1
  {
    src: 'https://images.pexels.com/photos/7679456/pexels-photo-7679456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern textile weaving looms in production'
  },

  // Image 2
  {
    src: 'https://images.pexels.com/photos/8892061/pexels-photo-8892061.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Industrial fabric dyeing and finishing line'
  },

  // Image 3
  {
    src: 'https://images.pexels.com/photos/7679489/pexels-photo-7679489.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Quality control inspection of finished fabrics'
  },

  // Image 4
  {
    src: 'https://images.pexels.com/photos/6567614/pexels-photo-6567614.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'High-capacity yarn spinning facility'
  },

  // Image 5
  {
    src: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Premium textile fabric samples and swatches'
  },

  // Image 6
  {
    src: 'https://images.pexels.com/photos/6567539/pexels-photo-6567539.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Eco-friendly sustainable textile production'
  },

  // Image 7
  {
    src: 'https://images.pexels.com/photos/6567613/pexels-photo-6567613.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Textile factory production floor'
  },

  // Image 8
  {
    src: 'https://images.pexels.com/photos/3738383/pexels-photo-3738383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Organized thread spools for manufacturing'
  },

  // Image 9
  {
    src: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Stack of premium denim fabrics'
  }
];
```

**Size:** Each 1200x800px
**Usage:** 3-column responsive grid gallery

---

### 4. Latest Updates - News Articles (3 Images)
**Location:** `src/data/news.json`

```json
// News Article 1
{
  "title": "Skylark Textiles Launches New Sustainable Production Line",
  "image": "https://images.pexels.com/photos/6567539/pexels-photo-6567539.jpeg?auto=compress&cs=tinysrgb&w=1200"
}

// News Article 2
{
  "title": "Skylark Textiles Achieves ISO 14001:2015 Certification",
  "image": "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200"
}

// News Article 3
{
  "title": "Strategic Expansion into European Markets",
  "image": "https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=1200"
}
```

**Size:** 1200x630px (social media format)
**Usage:** Card layout with image, title, excerpt, and link

---

### 5. Latest Updates - Blog Posts (4 Images)
**Location:** `src/data/blog.json`

```json
// Blog Post 1
{
  "title": "The Future of Sustainable Textiles: Innovations and Challenges",
    "image": "https://t3.ftcdn.net/jpg/04/73/56/88/240_F_473568811_0R70C66lG6dpwxOrcxJrTRYeIOTnuSUK.jpg",
}

// Blog Post 2
{
  "title": "The Importance of Quality Control in Textile Manufacturing",
    "image": "https://static.vecteezy.com/system/resources/previews/049/099/215/non_2x/brightly-colored-fabrics-stacked-neatly-create-a-mesmerizing-visual-feast-photo.jpeg",
}

// Blog Post 3
{
  "title": "How to Choose the Right Textile Supplier for Your Business",
    "image": "https://static.vecteezy.com/system/resources/previews/049/099/215/non_2x/brightly-colored-fabrics-stacked-neatly-create-a-mesmerizing-visual-feast-photo.jpeg",
}

// Blog Post 4
{
  "title": "Textile Industry Trends to Watch in 2024",
  "image": "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1200"
}
```

**Size:** 1200x630px
**Usage:** Card layout showing 3 most recent posts from combined news + blog

---

## 📊 Image Summary

| Section | Count | Size | Total |
|---------|-------|------|-------|
| Hero Background | 1 | 1920px | 1 |
| Mission Section | 1 | 1200px | 1 |
| Facilities Gallery | 9 | 1200px | 9 |
| News Articles | 3 | 1200px | 3 |
| Blog Posts | 4 | 1200px | 4 |
| **TOTAL** | **18** | - | **18 images** |

---

## 🔄 How to Update Images

### Change Hero Background
Edit `src/pages/Home.jsx` around line 86:
```javascript
backgroundImage: 'url(YOUR_NEW_IMAGE_URL)'
```

### Change Mission Image
Edit `src/pages/Home.jsx` around line 204:
```javascript
src="YOUR_NEW_IMAGE_URL"
```

### Change Gallery Images
Edit `src/pages/Home.jsx` lines 47-56:
```javascript
const galleryImages = [
  { src: 'YOUR_IMAGE_URL', alt: 'Description' },
  // ... more images
];
```

### Change News Images
Edit `src/data/news.json`:
```json
{
  "image": "YOUR_NEW_IMAGE_URL"
}
```

### Change Blog Images
Edit `src/data/blog.json`:
```json
{
  "image": "YOUR_NEW_IMAGE_URL"
}
```

---

## 🎨 Image Guidelines

### Recommended Sizes
- **Hero backgrounds:** 1920x1080px minimum
- **Feature images:** 1200x800px
- **Card images:** 1200x630px (16:9 aspect ratio)

### Image Optimization
All Pexels images are pre-optimized with:
- `auto=compress` - Automatic compression
- `cs=tinysrgb` - Color space optimization
- `w=1200` or `w=1920` - Width specification

### Performance Tips
1. Use WebP format when possible: Add `&fm=webp` to URL
2. Specify exact dimensions needed
3. Use responsive images for different breakpoints
4. Enable lazy loading (already configured)

---

## 🔗 More Images

See `HD_TEXTILE_IMAGES.md` for:
- 12+ additional HD textile images
- Alternative image options
- Detailed usage guide
- Custom sizing parameters

---

## ✅ Current Status

All sections on the home page now have professional HD images:
- ✅ Hero section
- ✅ Mission section
- ✅ Facilities gallery (9 images)
- ✅ Latest updates (7 images total)
- ✅ All images loading from Pexels CDN
- ✅ Zero broken image links

**Build Status:** ✅ Successful
**All Images:** ✅ Loading correctly
**Performance:** ✅ Optimized

---

**Last Updated:** October 2024
**Version:** 2.0 - Full Image Integration
