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
import logo from '../assets/logo.png'

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
  { src: 'https://t4.ftcdn.net/jpg/01/46/19/97/240_F_146199738_N8GwsSTWjwdfMlVunBegsTNlBZZG9gHN.jpg' },
  { src: 'https://t4.ftcdn.net/jpg/02/46/66/91/240_F_246669196_rfPrv48UdfAJcizItX1N7gnUewRmASur.jpg', alt: 'Vibrant fabric store with colorful textiles' },
  { src: 'https://t3.ftcdn.net/jpg/04/61/24/00/240_F_461240064_Np69E4wo81UmPoM4BcgUiYsIo8fddN1d.jpg', alt: 'Colorful yarn and thread collection' },
  { src: 'https://t3.ftcdn.net/jpg/02/14/30/12/240_F_214301281_IABBckv4fOl4igc0rlOaJcvCnHCCAcsI.jpg', alt: 'Beautiful textile pattern samples' },
  { src: 'https://t3.ftcdn.net/jpg/03/35/88/46/240_F_335884635_0Piz4KrVbFdCQ9YMep899taNSPZe2HKt.jpg', alt: 'Colorful fabric textile display' },
  { src: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg', alt: 'Elegant fabric rolls in textile shop' },
  { src: 'https://t4.ftcdn.net/jpg/05/03/42/07/240_F_503420710_1ECwHx9ZXTNUm7ajqf3pMJ7Taxf6Twh1.jpg', alt: 'Organized colorful thread spools' },
  { src: 'https://t4.ftcdn.net/jpg/02/74/65/53/240_F_274655374_WWPOy7i7C2cP8at33jFZxHBiN0G6MHbi.jpg', alt: 'Vibrant textile shopping experience' },
  { src: 'https://t3.ftcdn.net/jpg/06/00/53/14/240_F_600531470_pCi3Ye8NyzrPtG7w2ax66IYLjzno4TGV.jpg', alt: 'Colorful textile material display' },
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
          minHeight: { xs: '80vh', md: '140vh' },
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
            backgroundImage:
              'url(https://t3.ftcdn.net/jpg/02/14/30/12/240_F_214301281_IABBckv4fOl4igc0rlOaJcvCnHCCAcsI.jpg)',
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
            zIndex: 1,
          },
        }}
      >
        {/* Logo fixed at top-start */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 3,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '180px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>

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
