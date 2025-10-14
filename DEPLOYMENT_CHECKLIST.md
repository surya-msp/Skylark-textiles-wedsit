# Deployment Checklist - Skylark Textiles Website

Use this checklist before deploying the website to production.

## ✅ Pre-Deployment Checklist

### 1. Content Review
- [ ] All TODO comments have been addressed
- [ ] Company information is accurate (Footer.jsx)
- [ ] Contact details are correct (phone, email, address)
- [ ] Business hours are updated
- [ ] Mission and vision statements reviewed
- [ ] Services data is complete and accurate
- [ ] All placeholder text has been replaced
- [ ] Timeline/history is accurate
- [ ] Certifications are up-to-date
- [ ] Social media links are correct

### 2. Data Files
- [ ] `src/data/services.json` - All services updated
- [ ] `src/data/news.json` - Real news articles added
- [ ] `src/data/blog.json` - Blog posts added (if applicable)
- [ ] `src/data/events.json` - Events updated with real dates
- [ ] All slugs are URL-friendly (lowercase, hyphens, no spaces)
- [ ] All dates are in correct format (YYYY-MM-DD)

### 3. Images
- [ ] All required images are in `public/assets/`
- [ ] Hero images added (1920x1080px recommended)
- [ ] Gallery images added (6 images)
- [ ] Service images added
- [ ] News/blog article images added
- [ ] Event images added
- [ ] About page images added
- [ ] All image paths are correct (`/assets/filename.jpg`)
- [ ] Image file sizes are optimized (< 500KB each)
- [ ] Alt text is descriptive for all images

### 4. Forms
- [ ] Contact form tested - emails received correctly
- [ ] Booking form tested - submissions working
- [ ] Form validation working properly
- [ ] Success messages displaying correctly
- [ ] Error handling working properly

### 5. Navigation & Links
- [ ] All menu links working
- [ ] Footer links functional
- [ ] Breadcrumbs showing correctly
- [ ] News article links working
- [ ] Blog post links working
- [ ] "Book a Visit" button working throughout site
- [ ] No broken links (404 errors)
- [ ] External links open in correct window/tab

### 6. Responsive Design
- [ ] Site tested on mobile (320px - 768px)
- [ ] Site tested on tablet (768px - 1024px)
- [ ] Site tested on desktop (1024px+)
- [ ] All sections stack correctly on mobile
- [ ] Forms are usable on mobile
- [ ] Images scale properly
- [ ] Text is readable on all screen sizes
- [ ] Navigation menu works on mobile

### 7. Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 8. SEO & Meta Tags
- [ ] Page titles are descriptive
- [ ] Meta descriptions are present
- [ ] Helmet async working on all pages
- [ ] Favicon is set
- [ ] Open Graph tags (optional but recommended)

### 9. Performance
- [ ] Build completes without errors
- [ ] No console errors in browser
- [ ] Images load without breaking layout
- [ ] Smooth scrolling and transitions
- [ ] Forms submit without lag
- [ ] Page load time < 3 seconds

### 10. Legal & Compliance
- [ ] Privacy policy added (if collecting data)
- [ ] Terms of service added (if needed)
- [ ] Cookie notice (if applicable)
- [ ] Copyright year is current
- [ ] Company registration details (if required by law)

## 🔨 Build & Deploy

### Step 1: Final Build
```bash
# Clean install
rm -rf node_modules package-lock.json dist
npm install

# Run production build
npm run build

# No errors should appear
```

### Step 2: Test Production Build Locally
```bash
npm run preview
```
Visit `http://localhost:4173` and test thoroughly.

### Step 3: Deploy

#### Option A: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify Drop
3. Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Option C: Traditional Hosting
1. Run `npm run build`
2. Upload entire `dist/` folder contents
3. Configure server to serve `index.html` for all routes
4. Ensure .htaccess or equivalent is configured for SPA routing

### Step 4: Post-Deployment Verification
- [ ] Visit production URL
- [ ] Test all routes/pages
- [ ] Submit test contact form
- [ ] Submit test booking
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly
- [ ] Check all external links
- [ ] Test navigation flow
- [ ] Verify SSL/HTTPS working

## 🔒 Security Checklist

- [ ] No API keys in client-side code
- [ ] No sensitive data exposed in console
- [ ] Forms validate on client AND server
- [ ] HTTPS enabled
- [ ] Security headers configured (if applicable)

## 📊 Analytics (Optional)

- [ ] Google Analytics installed (if needed)
- [ ] Tag Manager configured (if needed)
- [ ] Conversion tracking setup
- [ ] Event tracking configured

## 🎯 Launch Day

1. **Final Content Review**
   - Have stakeholders review all pages
   - Check for typos and formatting
   - Verify all information is current

2. **Performance Check**
   - Run Lighthouse audit
   - Check Page Speed Insights
   - Optimize if needed

3. **Backup**
   - Commit all changes to Git
   - Tag release version
   - Document deployment

4. **DNS Configuration**
   - Point domain to hosting
   - Configure SSL certificate
   - Test domain propagation

5. **Go Live**
   - Make final deployment
   - Monitor for issues
   - Check error logs

6. **Announcement**
   - Update old site (if any) with redirect
   - Announce on social media
   - Inform stakeholders

## 📞 Post-Launch Support

### Monitor for 48 Hours
- Form submissions
- Page load times
- Error logs
- User feedback
- Analytics data

### Common Issues & Fixes

**Images not loading:**
- Check file paths use `/assets/` prefix
- Verify files are in `public/assets/`
- Check file name case sensitivity

**Forms not submitting:**
- Verify form endpoints
- Check CORS settings
- Test on different browsers

**Routing issues:**
- Configure server for SPA routing
- Check .htaccess or server config
- Verify all routes in React Router

**Performance issues:**
- Enable gzip compression
- Configure CDN
- Optimize images further
- Enable caching

## ✨ Optional Enhancements

After successful launch, consider:
- [ ] Add Google Maps integration to Contact page
- [ ] Implement actual form backend (instead of mock)
- [ ] Add blog subscription feature
- [ ] Implement search functionality
- [ ] Add language selector (if multi-language)
- [ ] Add live chat support
- [ ] Integrate with CRM
- [ ] Add testimonials section
- [ ] Implement product catalog
- [ ] Add newsletter signup

---

## 📝 Deployment Log

Document each deployment:

```
Date: _______________
Version: _______________
Deployed by: _______________
Changes: _______________
Issues: _______________
```

---

**Remember:** Test everything twice before going live. It's easier to fix issues before launch than after! 🚀
