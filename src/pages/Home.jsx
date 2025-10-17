import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Section from '../components/Section';
import HighlightCard from '../components/HighlightCard';
import Gallery from '../components/Gallery';
import newsData from '../data/news.json';
import blogData from '../data/blog.json';

const highlights = [
  {
    icon: <PrecisionManufacturingIcon fontSize="inherit" />,
    title: 'Advanced Manufacturing',
    description: 'State-of-the-art facilities with cutting-edge technology for spinning, weaving, knitting, dyeing, and finishing processes.',
  },
  {
    icon: <CheckCircleIcon fontSize="inherit" />,
    title: 'Quality & Certifications',
    description: 'ISO 9001, ISO 14001, OEKO-TEX certified. Rigorous quality control at every production stage.',
  },
  {
    icon: <PublicIcon fontSize="inherit" />,
    title: 'Global Reach',
    description: 'Serving international markets with reliable supply chains and partnerships with leading brands worldwide.',
  },
  {
    icon: <EnergySavingsLeafIcon fontSize="inherit" />,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices, renewable energy, and sustainable textile manufacturing for a better future.',
  },
];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/7679456/pexels-photo-7679456.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern textile weaving looms in production' },
  { src: 'https://images.pexels.com/photos/8892061/pexels-photo-8892061.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Industrial fabric dyeing and finishing line' },
  { src: 'https://images.pexels.com/photos/7679489/pexels-photo-7679489.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Quality control inspection of finished fabrics' },
  { src: 'https://images.pexels.com/photos/6567614/pexels-photo-6567614.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'High-capacity yarn spinning facility' },
  { src: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Premium textile fabric samples and swatches' },
  { src: 'https://images.pexels.com/photos/6567539/pexels-photo-6567539.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Eco-friendly sustainable textile production' },
  { src: 'https://images.pexels.com/photos/6567613/pexels-photo-6567613.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Textile factory production floor' },
  { src: 'https://images.pexels.com/photos/3738383/pexels-photo-3738383.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Organized thread spools for manufacturing' },
  { src: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Stack of premium denim fabrics' },
];

function Home() {
  const recentContent = [...newsData, ...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Skylark Textiles - Premium Textile Manufacturing & Solutions</title>
        <meta
          name="description"
          content="Leading textile manufacturer offering premium yarns, fabrics, and textile solutions with ISO certified quality, sustainable practices, and global reach."
        />
      </Helmet>

      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: 'primary.main',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(26, 26, 46, 0.75)',
            zIndex: 1,
          },
        }}
      >
        <Container
          sx={{
            position: 'relative',
            zIndex: 2,
            py: { xs: 8, md: 12 },
          }}
        >
          <Box sx={{ maxWidth: 800 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'primary.contrastText',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              Crafting Excellence in Every Thread
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 5,
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Premium textile manufacturing with uncompromising quality, sustainable practices, and
              innovative solutions for global markets.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Explore Services
              </Button>
              <Button
                component={Link}
                to="/booking"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'primary.contrastText',
                  color: 'primary.contrastText',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                  },
                }}
              >
                Book a Visit
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Section py={10}>
        <Grid container spacing={4}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <HighlightCard {...highlight} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section backgroundColor="background.default" py={10}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            About Skylark Textiles
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
          >
            {/* TODO: Replace with actual company overview from PDF */}
            With decades of experience in textile manufacturing, Skylark Textiles has established
            itself as a trusted partner for premium textile solutions. Our commitment to quality,
            innovation, and sustainability drives everything we do.
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '66.67%',
                overflow: 'hidden',
                backgroundColor: 'grey.200',
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Skylark Textiles manufacturing facility"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              {/* TODO: Replace with actual mission from PDF */}
              To deliver exceptional textile products that exceed client expectations while
              maintaining the highest standards of quality, sustainability, and ethical
              manufacturing practices.
            </Typography>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Section>

      <Section py={10}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Our Facilities
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
          >
            State-of-the-art manufacturing facilities equipped with advanced technology and operated
            by skilled professionals.
          </Typography>
        </Box>
        <Gallery images={galleryImages} />
      </Section>

      <Section backgroundColor="background.default" py={10}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Latest Updates
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
          >
            Stay informed with our latest news, insights, and industry updates.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {recentContent.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(26, 26, 46, 0.12)',
                  },
                }}
              >
                {item.image && (
                  <CardMedia
                    component="div"
                    sx={{
                      paddingTop: '56.25%',
                      backgroundColor: 'grey.200',
                    }}
                    image={item.image}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: 'secondary.main', fontWeight: 600, mb: 1, display: 'block' }}
                  >
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {item.excerpt}
                  </Typography>
                  <Button
                    component={Link}
                    to={newsData.includes(item) ? `/news/${item.slug}` : `/blog/${item.slug}`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 'auto' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section py={10}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 8 },
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Typography variant="h2" sx={{ mb: 3, color: 'inherit' }}>
            Ready to Partner with Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 300, maxWidth: 700, mx: 'auto' }}>
            Schedule a factory visit, discuss your requirements, or request samples. Our team is
            ready to help you find the perfect textile solution.
          </Typography>
          <Button
            component={Link}
            to="/booking"
            variant="contained"
            color="secondary"
            size="large"
          >
            Book a Visit
          </Button>
        </Box>
      </Section>
    </>
  );
}

export default Home;
