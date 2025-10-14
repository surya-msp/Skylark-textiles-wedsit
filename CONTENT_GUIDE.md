# Content Integration Guide for Skylark Textiles PDF

This document provides a detailed mapping of where to insert content from the "Skylark textiles profile.pdf" into the website codebase.

## 🔍 Quick Reference: TODO Locations

All areas requiring PDF content are marked with `TODO:` comments in the code. Search for "TODO:" to find them quickly.

## 📋 Content Mapping by Category

### 1. Company Overview & Mission

**Files to Update:**
- `src/components/Footer.jsx` - Line ~42
- `src/pages/Home.jsx` - Lines ~148-153
- `src/pages/About.jsx` - Lines ~93-100, 109-114, 123-128

**What to Extract from PDF:**
- Company founding story and heritage
- Mission statement (what the company aims to do)
- Vision statement (where the company aims to be)
- Core values and principles
- Brief company summary (2-3 sentences for footer)

**Example Format:**
```javascript
// In Footer.jsx
Company summary paragraph here...

// In About.jsx - Mission
"To deliver exceptional textile products that exceed expectations while..."

// In About.jsx - Vision
"To be recognized globally as the leading sustainable textile manufacturer..."
```

---

### 2. Contact Information

**Files to Update:**
- `src/components/Footer.jsx` - Lines ~79-109
- `src/pages/Contact.jsx` - Lines ~14-45

**What to Extract from PDF:**
- Complete physical address(es)
- Phone numbers (main, sales, support)
- Email addresses (info@, sales@, support@)
- Business hours (days and times)
- Factory/office locations
- Social media URLs (LinkedIn, Facebook, Instagram)

**Example Format:**
```javascript
{
  address: [
    'Skylark Textiles Manufacturing',
    '123 Industrial Estate',
    'Textile Hub, City 500001',
    'Country'
  ],
  phone: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
  email: ['info@skylarktextiles.com', 'sales@skylarktextiles.com'],
  hours: {
    'Monday - Friday': '9:00 AM - 6:00 PM',
    'Saturday': '9:00 AM - 2:00 PM',
    'Sunday': 'Closed'
  }
}
```

---

### 3. Manufacturing Capabilities

**Files to Update:**
- `src/data/services.json` - All service entries

**What to Extract from PDF:**
- **Spinning:**
  - Types of spinning (ring, open-end, compact)
  - Machinery brands and models
  - Daily/monthly capacity in tons or kg
  - Yarn counts produced
  - Turnaround times
  - Minimum order quantities

- **Weaving:**
  - Loom types (rapier, air jet, water jet)
  - Fabric constructions (plain, twill, satin, jacquard)
  - Machinery details
  - Capacity in meters/day
  - Fabric width range

- **Knitting:**
  - Knitting machine types (circular, flat, seamless)
  - Gauge ranges
  - Fabric types produced

- **Dyeing & Printing:**
  - Dyeing methods (yarn, piece, garment)
  - Printing technologies (rotary, digital, screen)
  - Color matching capabilities
  - Environmental certifications

- **Finishing:**
  - Finishing treatments offered
  - Special treatments (waterproof, antibacterial)
  - Machinery specifications

**Example Format:**
```json
{
  "title": "Spinning",
  "capacity": "50 tons per day",
  "turnaround": "7-10 days",
  "moq": "500 kg per order",
  "machinery": [
    "Rieter G36 Ring Spinning Frames",
    "Schlafhorst Autoconer 6"
  ]
}
```

---

### 4. Quality Certifications

**Files to Update:**
- `src/pages/About.jsx` - Lines ~244-263

**What to Extract from PDF:**
- ISO certifications (9001, 14001, etc.) with year
- OEKO-TEX certification level
- GOTS certification status
- BCI membership
- Any other quality/environmental certifications
- Certification numbers if relevant

**Current placeholders:**
- ISO 9001:2015
- ISO 14001:2015
- OEKO-TEX Standard 100
- GOTS
- BCI

Update with actual certifications from PDF.

---

### 5. Timeline & History

**Files to Update:**
- `src/pages/About.jsx` - Lines ~9-43

**What to Extract from PDF:**
- Company founding year
- Major expansion milestones
- Certification achievements
- Technology upgrades
- Market expansions
- Awards and recognitions

**Example Format:**
```javascript
{
  year: '1985',
  label: 'Foundation',
  description: 'Skylark Textiles was established...'
}
```

---

### 6. Facilities & Capacity

**Files to Update:**
- `src/pages/About.jsx` - Lines ~210-240

**What to Extract from PDF:**
- Total production capacity (tons/month or year)
- Number of manufacturing units/locations
- Total workforce/employees
- Number of export markets/countries
- Factory floor space
- Number of machines

**Current placeholders:**
```javascript
{ label: 'Production Capacity', value: '500+ tons/month' },
{ label: 'Manufacturing Units', value: '3 locations' },
{ label: 'Skilled Workforce', value: '2,000+ employees' },
{ label: 'Export Markets', value: '50+ countries' }
```

---

### 7. Leadership Team

**Files to Update:**
- `src/pages/About.jsx` (may need new section)

**What to Extract from PDF:**
- Key leadership names and titles
- Board of directors
- Founder information
- Management team bios

**Suggested Implementation:**
Add a new section in About.jsx after the facilities section:

```javascript
<Section py={10}>
  <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
    Leadership Team
  </Typography>
  <Grid container spacing={4}>
    {/* Leadership cards */}
  </Grid>
</Section>
```

---

### 8. Sustainability Initiatives

**Files to Update:**
- `src/pages/Home.jsx` - Line ~47 (Sustainability highlight)
- `src/pages/About.jsx` (may need expansion)

**What to Extract from PDF:**
- Renewable energy usage
- Water conservation measures
- Waste reduction programs
- Carbon footprint reduction
- Sustainable material sourcing
- Environmental compliance

---

### 9. Products & Markets

**What to Extract from PDF:**
- Product categories (yarns, greige, finished fabrics, home textiles, apparel)
- Key client industries
- Geographic markets served
- Notable client names (if shareable)
- Export percentages

**Suggested Implementation:**
Consider adding a new Products page or expanding the Services page with product lines.

---

### 10. News & Updates

**Files to Update:**
- `src/data/news.json`

**What to Extract from PDF:**
- Recent company announcements
- New certifications or awards
- Expansion news
- Partnership announcements
- Trade show participation
- New product launches

Replace placeholder news articles with actual company news.

---

### 11. Technical Specifications

**What to Extract from PDF:**
- Yarn count ranges
- Fabric weight ranges
- Fabric width options
- Color fastness ratings
- Shrinkage tolerances
- Quality control processes
- Testing equipment

Add to relevant service descriptions in `services.json`.

---

## 🖼️ Image Guidelines

### Required Images (place in `public/assets/`)

1. **Home Page:**
   - Hero background (full-width, 1920x1080 recommended)
   - Gallery images (6 images, textile/manufacturing themed)

2. **About Page:**
   - Company heritage image
   - Timeline visuals
   - Facility photos

3. **Services:**
   - Process photos for each service category

4. **News & Blog:**
   - Featured images for articles (1200x630 recommended)

5. **Events:**
   - Event venue or activity photos

### Image Naming Convention:
```
loom-hero.jpg
dyeing-line.jpg
quality-control.jpg
spinning-facility.jpg
fabric-samples.jpg
sustainable-production.jpg
about-hero.jpg
about-story.jpg
```

---

## ⚡ Quick Start Instructions

1. **Search for TODOs:**
   ```bash
   grep -r "TODO:" src/
   ```

2. **Update JSON files first:**
   - Start with `services.json` (most detailed)
   - Then `news.json` and `events.json`
   - Finally `blog.json` if you have content

3. **Update React components:**
   - Footer.jsx (contact info, company summary)
   - About.jsx (mission, vision, history)
   - Home.jsx (hero text, overview)
   - Contact.jsx (detailed contact info)

4. **Add images:**
   - Place all images in `public/assets/`
   - Update image paths in components and data files

5. **Test locally:**
   ```bash
   npm run dev
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🎯 Priority Order

1. **High Priority (Core Information):**
   - Contact information (Footer, Contact page)
   - Company mission/vision (About page)
   - Services capabilities (services.json)
   - Certifications (About page)

2. **Medium Priority (Supporting Content):**
   - Company history/timeline (About page)
   - Facilities data (About page)
   - Hero section text (Home page)
   - Business hours

3. **Low Priority (Enhanced Content):**
   - News articles
   - Blog posts
   - Event details
   - Gallery images

---

## 📞 Support

If you encounter any issues or need clarification on where to place specific content, refer to the main README.md or search for "TODO:" comments in the codebase.

---

**Last Updated:** October 2024
**Version:** 1.0
