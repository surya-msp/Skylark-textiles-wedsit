import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import FactoryIcon from '@mui/icons-material/Factory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import InventoryIcon from '@mui/icons-material/Inventory';
import EngineeringIcon from '@mui/icons-material/Engineering';

const facilities = [
  {
    title: 'Manufacturing Units',
    icon: <FactoryIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    description: 'State-of-the-art manufacturing facilities spread across multiple locations, equipped with advanced machinery and technology for textile production.',
  },
  {
    title: 'Production Capacity',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    description: 'High-capacity production lines capable of processing thousands of meters of fabric daily while maintaining consistent quality standards.',
  },
  {
    title: 'Warehouse & Storage',
    icon: <InventoryIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    description: 'Modern warehousing facilities with climate-controlled storage to preserve textile quality and manage inventory efficiently.',
  },
  {
    title: 'Quality Control Labs',
    icon: <EngineeringIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    description: 'Advanced testing laboratories equipped with latest instruments to ensure every product meets international quality standards.',
  },
];

const infrastructureImages = [
  { src: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Modern Textile Facility' },
  { src: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Production Floor' },
  { src: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Quality Control' },
  { src: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Fabric Storage' },
  { src: 'https://images.pexels.com/photos/5705471/pexels-photo-5705471.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Textile Display' },
  { src: 'https://images.pexels.com/photos/3738383/pexels-photo-3738383.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Thread Production' },
];

function Infrastructure() {
  return (
    <>
      <Helmet>
        <title>Infrastructure - Skylark Textiles</title>
        <meta
          name="description"
          content="Explore Skylark Textiles' world-class infrastructure including manufacturing units, production facilities, and quality control laboratories."
        />
      </Helmet>

      <PageHero
        title="Our Infrastructure"
        subtitle="World-class facilities and advanced technology driving textile excellence"
      />

      <Section py={10}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Manufacturing Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
            >
              Our infrastructure represents the backbone of our operations, combining cutting-edge technology
              with skilled craftsmanship to deliver superior textile products consistently.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {facilities.map((facility, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(26, 26, 46, 0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{facility.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {facility.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {facility.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section backgroundColor="background.default" py={10}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Facility Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
            >
              Take a visual tour of our modern facilities equipped with advanced technology
              and operated by skilled professionals.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {infrastructureImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={image.src}
                    alt={image.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {image.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section py={10}>
        <Container>
          <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Technology & Innovation
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
              Our commitment to excellence is reflected in our continuous investment in the latest
              textile manufacturing technology. From automated weaving looms to computerized dyeing
              systems, we leverage innovation to enhance productivity, reduce waste, and maintain
              the highest quality standards in every product we manufacture.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              With a focus on sustainable practices, our facilities are designed to minimize
              environmental impact while maximizing efficiency. Energy-efficient machinery,
              water recycling systems, and eco-friendly production processes are integral
              parts of our infrastructure strategy.
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Infrastructure;
