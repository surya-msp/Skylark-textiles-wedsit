import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

const heroImages = [
  'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=3840',
  'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=3840',
  'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=3840',
  'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=3840',
  'https://images.pexels.com/photos/5705471/pexels-photo-5705471.jpeg?auto=compress&cs=tinysrgb&w=3840',
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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
        }}
      >
        {heroImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
              zIndex: 0,
            }}
          />
        ))}
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

      <Section py={10} backgroundColor="background.default">
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
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
          >
            Contact Us
          </Button>
        </Box>
      </Section>
    </>
  );
}

export default Home;
