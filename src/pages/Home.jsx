import { Box, IconButton, Typography, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import cinematicStyleMall from '../assets/cinematicStyleMall.jpg';

const galleryImages = [
  { src: 'https://t4.ftcdn.net/jpg/01/46/19/97/240_F_146199738_N8GwsSTWjwdfMlVunBegsTNlBZZG9gHN.jpg' },
  { src: 'https://t4.ftcdn.net/jpg/02/46/66/91/240_F_246669196_rfPrv48UdfAJcizItX1N7gnUewRmASur.jpg' },
  { src: 'https://t3.ftcdn.net/jpg/04/61/24/00/240_F_461240064_Np69E4wo81UmPoM4BcgUiYsIo8fddN1d.jpg' },
  { src: 'https://t3.ftcdn.net/jpg/02/14/30/12/240_F_214301281_IABBckv4fOl4igc0rlOaJcvCnHCCAcsI.jpg' },
  { src: 'https://t3.ftcdn.net/jpg/03/35/88/46/240_F_335884635_0Piz4KrVbFdCQ9YMep899taNSPZe2HKt.jpg' },
  { src: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg' },
  { src: 'https://t4.ftcdn.net/jpg/05/03/42/07/240_F_503420710_1ECwHx9ZXTNUm7ajqf3pMJ7Taxf6Twh1.jpg' },
  { src: 'https://t4.ftcdn.net/jpg/02/74/65/53/240_F_274655374_WWPOy7i7C2cP8at33jFZxHBiN0G6MHbi.jpg' },
  { src: 'https://t3.ftcdn.net/jpg/06/00/53/14/240_F_600531470_pCi3Ye8NyzrPtG7w2ax66IYLjzno4TGV.jpg' },
];

function Home() {
  const handleScroll = () => {
    const element = document.getElementById('facilities-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Skylark Textiles - Premium Textile Manufacturing & Solutions</title>
        <meta
          name="description"
          content="Leading textile manufacturer offering premium yarns, fabrics, and textile solutions with ISO certified quality, sustainable practices, and global reach."
        />
      </Helmet>

      {/* Hero Image Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '80vh', sm: '90vh', md: '100vh' },
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${cinematicStyleMall})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'transform 10s ease-in-out',
            filter: 'brightness(0.7)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />

        {/* Mouse Scroll Icon (Bottom Center) */}
        <IconButton
          onClick={handleScroll}
          sx={{
            position: 'absolute',
            bottom: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            animation: 'bounce 2s infinite',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.4)',
              transform: 'translateX(-50%) translateY(4px)',
            },
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '50%': { transform: 'translateX(-50%) translateY(6px)' },
            },
          }}
        >
          <KeyboardArrowDown sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Gallery Section */}
      <Section id="facilities-section" py={10}>
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

      {/* CTA Section */}
      <Section py={10} backgroundColor="background.default">
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 8 },
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 3,
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
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Section>
    </>
  );
}

export default Home;
