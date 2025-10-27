import { Box, Typography, Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import VerifiedIcon from '@mui/icons-material/Verified';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import GroupsIcon from '@mui/icons-material/Groups';


const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
  { name: 'OEKO-TEX Standard 100', description: 'Textile Safety and Harmful Substances' },
  { name: 'GOTS', description: 'Global Organic Textile Standard' },
  { name: 'BCI', description: 'Better Cotton Initiative' },
];

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Skylark Textiles</title>
        <meta
          name="description"
          content="Learn about Skylark Textiles' heritage, mission, values, and commitment to sustainable textile manufacturing excellence."
        />
      </Helmet>

      <PageHero
        title="About Skylark Textiles"
        subtitle="Crafting quality textiles with passion, precision, and purpose"
        breadcrumbs={[{ label: 'About', path: '/about' }]}
      />

      <Section py={10}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              {/* TODO: Replace with actual company history from PDF */}
              Founded with a vision to revolutionize textile manufacturing, Skylark Textiles has
              grown from a small-scale operation to a globally recognized manufacturer. Our journey
              has been defined by continuous innovation, unwavering commitment to quality, and a
              deep respect for both people and the environment.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              Over the decades, we have invested heavily in state-of-the-art technology while
              preserving traditional craftsmanship. This unique blend allows us to produce textiles
              that combine contemporary design with timeless quality.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Today, we serve clients across multiple continents, partnering with leading fashion
              brands, home textile companies, and industrial textile users. Our reputation is built
              on reliability, innovation, and an uncompromising commitment to excellence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '125%',
                overflow: 'hidden',
                backgroundColor: 'grey.200',
              }}
            >
              <Box
                component="img"
                src="/assets/about-story.jpg"
                alt="Skylark Textiles heritage and history"
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
        </Grid>
      </Section>

      <Section backgroundColor="background.default" py={10}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <VerifiedIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h4" sx={{ mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {/* TODO: Replace with actual mission from PDF */}
                To deliver exceptional textile products that exceed expectations while maintaining
                the highest standards of quality, sustainability, and ethical manufacturing
                practices.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <EnergySavingsLeafIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h4" sx={{ mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {/* TODO: Replace with actual vision from PDF */}
                To be recognized globally as the leading sustainable textile manufacturer,
                pioneering innovations that shape the future of the industry.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <GroupsIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h4" sx={{ mb: 2 }}>
                Our Values
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {/* TODO: Replace with actual values from PDF */}
                Integrity, excellence, innovation, sustainability, and respect for people and the
                planet guide every decision we make.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section backgroundColor="background.default" py={10}>
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Facilities & Capacity
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
        >
          {/* TODO: Replace with actual facilities info from PDF */}
          Our manufacturing facilities span multiple locations, equipped with cutting-edge
          technology and operated by skilled professionals.
        </Typography>
        <Grid container spacing={4}>
          {[
            { label: 'Production Capacity', value: '500+ tons/month' },
            { label: 'Manufacturing Units', value: '3 locations' },
            { label: 'Skilled Workforce', value: '2,000+ employees' },
            { label: 'Export Markets', value: '50+ countries' },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ mb: 1, color: 'secondary.main', fontWeight: 700 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section py={10}>
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Certifications & Compliance
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
        >
          {/* TODO: Replace with actual certifications info from PDF */}
          Our commitment to quality and sustainability is validated by internationally recognized
          certifications and standards.
        </Typography>
        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'rgba(201, 169, 97, 0.03)',
                  },
                }}
              >
                <VerifiedIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {cert.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {cert.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}

export default About;
