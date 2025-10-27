import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import VerifiedIcon from '@mui/icons-material/Verified';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import GroupsIcon from '@mui/icons-material/Groups';

const certifications = [
  {
    title: 'ISO 9001:2015',
    category: 'Quality Management',
    description: 'Certified for quality management systems ensuring consistent delivery of products that meet customer and regulatory requirements.',
    year: '2020',
  },
  {
    title: 'ISO 14001:2015',
    category: 'Environmental Management',
    description: 'Environmental management certification demonstrating our commitment to reducing environmental impact and improving sustainability.',
    year: '2024',
  },
  {
    title: 'OEKO-TEX Standard 100',
    category: 'Product Safety',
    description: 'Textile testing certification ensuring our products are free from harmful substances and safe for human use.',
    year: '2021',
  },
  {
    title: 'GOTS Certification',
    category: 'Organic Textiles',
    description: 'Global Organic Textile Standard certification for processing organic fibers with environmental and social responsibility.',
    year: '2022',
  },
];

const sustainabilityInitiatives = [
  {
    icon: <WaterDropIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    title: 'Water Conservation',
    description: 'Advanced water recycling systems reduce consumption by 40% and minimize wastewater discharge.',
  },
  {
    icon: <EnergySavingsLeafIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    title: 'Renewable Energy',
    description: 'Solar power installation generates 30% of our energy needs, reducing carbon footprint significantly.',
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    title: 'Waste Management',
    description: 'Zero-waste manufacturing processes with comprehensive recycling programs for textile scraps.',
  },
  {
    icon: <EnergySavingsLeafIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    title: 'Sustainable Materials',
    description: 'Sourcing organic cotton and recycled fibers to promote sustainable textile production.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    title: 'Social Responsibility',
    description: 'Fair labor practices, safe working conditions, and community development programs.',
  },
];

function CertificateSustainability() {
  return (
    <>
      <Helmet>
        <title>Certifications & Sustainability - Skylark Textiles</title>
        <meta
          name="description"
          content="Learn about Skylark Textiles' certifications, sustainability initiatives, and commitment to environmental and social responsibility."
        />
      </Helmet>

      <PageHero
        title="Certifications & Sustainability"
        subtitle="Committed to quality, environmental stewardship, and social responsibility"
      />

      <Section py={10}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Our Certifications
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
            >
              Skylark Textiles holds multiple international certifications that validate our
              commitment to quality, safety, and environmental standards.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(26, 26, 46, 0.12)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <VerifiedIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                      <Chip label={cert.year} color="secondary" size="small" />
                    </Box>
                    <Chip
                      label={cert.category}
                      size="small"
                      sx={{ mb: 2, backgroundColor: 'primary.main', color: 'white' }}
                    />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {cert.description}
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
              Sustainability Initiatives
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
            >
              We are dedicated to sustainable textile manufacturing through innovative
              practices that protect our environment and support our communities.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {sustainabilityInitiatives.map((initiative, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{initiative.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {initiative.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {initiative.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section py={10}>
        <Container>
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
              Our Commitment to a Better Future
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              At Skylark Textiles, sustainability is not just a buzzword—it's integral to our
              business philosophy. We continuously invest in cleaner technologies, sustainable
              materials, and processes that minimize environmental impact while maintaining
              the highest quality standards.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              Our sustainability journey includes reducing water consumption through advanced
              recycling systems, transitioning to renewable energy sources, implementing
              zero-waste manufacturing practices, and ensuring fair labor conditions throughout
              our supply chain.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We believe in transparency and accountability. Our certifications are regularly
              audited by independent third parties to ensure we meet and exceed international
              standards for quality, environmental management, and social responsibility.
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default CertificateSustainability;
