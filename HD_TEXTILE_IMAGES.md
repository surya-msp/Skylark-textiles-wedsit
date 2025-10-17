# HD Textile Images for Skylark Textiles Website

This document lists high-quality, royalty-free textile images from Pexels that can be used throughout the website.

## Current Implementation

### Home Page Hero Background
**Currently Used:**
```
https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920
```
- Image: Colorful textile fabric rolls
- Resolution: 1920px wide (HD)
- Perfect for: Hero background with text overlay

## Alternative HD Textile Images from Pexels

### For Hero Sections

1. **Fabric Rolls - Colorful**
   ```
   https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920
   ```
   - Current hero image
   - Bright, professional, shows textile variety

2. **Textile Weaving Loom**
   ```
   https://images.pexels.com/photos/7679456/pexels-photo-7679456.jpeg?auto=compress&cs=tinysrgb&w=1920
   ```
   - Traditional weaving loom with threads
   - Good for manufacturing/heritage sections

3. **Colorful Yarn Spools**
   ```
   https://images.pexels.com/photos/6567614/pexels-photo-6567614.jpeg?auto=compress&cs=tinysrgb&w=1920
   ```
   - Vibrant yarn spools
   - Great for services/spinning sections

4. **Fabric Manufacturing**
   ```
   https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=1920
   ```
   - Industrial textile production
   - Perfect for capabilities showcase

5. **Cotton Textile Close-up**
   ```
   https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920
   ```
   - White cotton textile texture
   - Clean, premium look for quality sections

### For Gallery Section

6. **Textile Patterns**
   ```
   https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1200
   ```
   - Colorful textile patterns
   - Good for product showcase

7. **Denim Fabric Stack**
   ```
   https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1200
   ```
   - Stack of denim fabrics
   - Shows fabric variety

8. **Thread Spools**
   ```
   https://images.pexels.com/photos/3738383/pexels-photo-3738383.jpeg?auto=compress&cs=tinysrgb&w=1200
   ```
   - Organized thread spools
   - Great for manufacturing details

9. **Fabric Dyeing**
   ```
   https://images.pexels.com/photos/8892061/pexels-photo-8892061.jpeg?auto=compress&cs=tinysrgb&w=1200
   ```
   - Colorful dyed fabrics
   - Perfect for dyeing services

10. **Quality Control**
    ```
    https://images.pexels.com/photos/7679489/pexels-photo-7679489.jpeg?auto=compress&cs=tinysrgb&w=1200
    ```
    - Hands examining textile
    - Ideal for quality assurance sections

11. **Textile Factory Floor**
    ```
    https://images.pexels.com/photos/6567613/pexels-photo-6567613.jpeg?auto=compress&cs=tinysrgb&w=1200
    ```
    - Industrial textile facility
    - Great for facilities section

12. **Sustainable Cotton**
    ```
    https://images.pexels.com/photos/6567539/pexels-photo-6567539.jpeg?auto=compress&cs=tinysrgb&w=1200
    ```
    - Natural cotton plants
    - Perfect for sustainability section

## How to Use These Images

### Option 1: Direct URL (Current Method)
Use the Pexels URL directly in your code:

```jsx
backgroundImage: 'url(https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920)'
```

**Pros:**
- No download needed
- Always latest version
- CDN optimized

**Cons:**
- Requires internet connection
- External dependency

### Option 2: Download and Host Locally
1. Download the image from Pexels
2. Save to `public/assets/`
3. Reference as `/assets/filename.jpg`

```jsx
backgroundImage: 'url(/assets/hero-textile.jpg)'
```

**Pros:**
- No external dependencies
- Full control
- Faster load times

**Cons:**
- Need to download manually
- Takes up storage space

## Image Parameters Explained

Pexels URLs support these parameters:

- `auto=compress` - Automatic compression
- `cs=tinysrgb` - Color space optimization
- `w=1920` - Width in pixels (use 1920 for HD, 3840 for 4K)
- `h=1080` - Height in pixels (optional)
- `fit=crop` - Crop to fit dimensions

Example for different sizes:
```
Mobile (small):    w=800
Tablet:            w=1200
Desktop HD:        w=1920
Desktop 4K:        w=3840
```

## Updating the Home Hero Image

To change the home page hero background image, edit `src/pages/Home.jsx`:

```jsx
'&::before': {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
},
```

## Best Practices

1. **Always use overlay** - The current dark overlay (75% opacity) ensures text is readable
2. **HD quality** - Use at least 1920px width for hero images
3. **Aspect ratio** - Use landscape images (16:9 or wider) for hero sections
4. **File size** - Pexels automatically optimizes, but monitor load times
5. **Attribution** - While not required for Pexels, consider crediting photographers

## Performance Tips

1. **Lazy loading** - Already configured for gallery images
2. **Responsive images** - Use different sizes for different breakpoints
3. **WebP format** - Pexels supports WebP via URL parameters
4. **Preload hero** - Consider preloading the hero image for faster LCP

Example with WebP:
```
https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920&fm=webp
```

## License Information

All images from Pexels are:
- ✅ Free to use
- ✅ No attribution required
- ✅ Commercial use allowed
- ✅ Unlimited downloads
- ✅ Can be modified

Source: https://www.pexels.com/license/

---

**Note:** The current implementation uses a direct Pexels URL. For production, consider downloading and hosting images locally for better performance and reliability.

**Last Updated:** October 2024
