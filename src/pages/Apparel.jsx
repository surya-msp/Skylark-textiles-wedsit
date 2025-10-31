import { Box, Typography, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

const preProductionSteps = [
  {
    title: 'Design',
    description: 'Creating the initial sketches and technical drawings for the garment.',
    image: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Pattern Making',
    description: 'Developing technical patterns used for cutting the fabric.',
    image: 'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Sample Making',
    description: 'Producing a sample garment for buyer approval, which may involve adjustments to the design, fit, and construction.',
    image: 'https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Grading',
    description: 'Scaling the pattern to create different sizes.',
    image: 'https://images.pexels.com/photos/7148397/pexels-photo-7148397.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Marker Making',
    description: 'Laying out the patterns on the fabric to minimize waste during cutting.',
    image: 'https://images.pexels.com/photos/6765018/pexels-photo-6765018.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const productionSteps = [
  {
    title: 'Spreading and Cutting',
    description: 'Laying multiple layers of fabric on a table and cutting them according to the marker, either manually or with machines.',
    image: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Sorting and Bundling',
    description: 'Organizing the cut pieces into bundles for sewing operators.',
    image: 'https://images.pexels.com/photos/6765046/pexels-photo-6765046.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Sewing',
    description: 'Stitching the cut pieces together to form the garment.',
    image: 'https://images.pexels.com/photos/3738369/pexels-photo-3738369.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const postProductionSteps = [
  {
    title: 'Finishing',
    description: 'Adding final touches such as buttons, labels, and special washes. This stage may also include treatments like water-repellent or anti-static finishes.',
    image: 'https://images.pexels.com/photos/3738384/pexels-photo-3738384.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Inspection',
    description: 'Conducting a final quality check to ensure the garment meets standards and matches the original design.',
    image: 'https://images.pexels.com/photos/7148470/pexels-photo-7148470.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Pressing',
    description: 'Ironing the garment for a polished, finished look.',
    image: 'https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Packaging',
    description: 'Folding, tagging, and packing the garments for shipment.',
    image: 'https://images.pexels.com/photos/7148445/pexels-photo-7148445.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

function ProcessCard({ title, description, image, number }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        backgroundColor: 'background.paper',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          borderColor: 'secondary.main',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 200,
          overflow: 'hidden',
          backgroundColor: 'grey.200',
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {number && (
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: 'secondary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.1rem',
            }}
          >
            {number}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, minHeight: 64 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

function Apparel() {
  return (
    <>
      <Helmet>
        <title>Apparel Manufacturing - Skylark Textiles</title>
        <meta
          name="description"
          content="Explore our comprehensive apparel manufacturing process from pre-production to post-production at Skylark Textiles."
        />
      </Helmet>

      <PageHero
        title="Apparel Manufacturing"
        subtitle="From design to delivery, excellence in every stitch"
        breadcrumbs={[{ label: 'Apparel', path: '/apparel' }]}
      />

      <Section py={10}>
        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Our Manufacturing Process
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            At Skylark Textiles, we follow a meticulous three-stage manufacturing process to ensure every garment
            meets the highest standards of quality and craftsmanship.
          </Typography>
        </Box>

        <Box sx={{ mb: 10 }}>
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: 'block',
              }}
            >
              STAGE 01
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Pre-Production
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              The planning and preparation phase where designs come to life
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {preProductionSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProcessCard {...step} number={index + 1} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 10 }}>
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: 'block',
              }}
            >
              STAGE 02
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Production
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Transforming fabric into finished garments with precision and care
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {productionSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProcessCard {...step} number={index + 1} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: 'block',
              }}
            >
              STAGE 03
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Post-Production
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Final touches and quality assurance for perfect delivery
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {postProductionSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProcessCard {...step} number={index + 1} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Section>

      <Section
        backgroundColor="background.default"
        py={8}
        sx={{
          backgroundImage: 'linear-gradient(180deg, rgba(201, 169, 97, 0.02) 0%, rgba(201, 169, 97, 0.05) 100%)',
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Quality at Every Step
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary', mb: 4 }}>
            Our comprehensive manufacturing process ensures that every garment we produce meets international
            quality standards. From the initial design concept to the final packaged product, we maintain strict
            quality control measures and employ skilled professionals at every stage.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'secondary.main' }}>
            Experience excellence in apparel manufacturing with Skylark Textiles
          </Typography>
        </Box>
      </Section>
    </>
  );
}

export default Apparel;
