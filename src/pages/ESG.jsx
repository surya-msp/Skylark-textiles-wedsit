import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BalanceIcon from '@mui/icons-material/Balance';

const esgPillars = [
  {
    icon: <PublicIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
    title: 'Environmental',
    description: 'Committed to reducing environmental impact through sustainable practices and green technologies.',
    initiatives: [
      'Carbon footprint reduction by 35% since 2020',
      'Water recycling achieving 40% conservation',
      '30% energy from renewable sources',
      'Zero-waste manufacturing processes',
      'Sustainable raw material sourcing',
    ],
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
    title: 'Social',
    description: 'Prioritizing people through fair labor practices, employee welfare, and community development.',
    initiatives: [
      'Fair wages and safe working conditions',
      'Employee skill development programs',
      'Gender equality and diversity initiatives',
      'Healthcare and education support',
      'Community engagement programs',
    ],
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
    title: 'Governance',
    description: 'Maintaining highest standards of corporate ethics, transparency, and accountability.',
    initiatives: [
      'Transparent business practices',
      'Strong board oversight and ethics',
      'Compliance with all regulations',
      'Risk management frameworks',
      'Stakeholder engagement policies',
    ],
  },
];

const impactMetrics = [
  { value: '35%', label: 'Carbon Reduction', icon: <TrendingUpIcon /> },
  { value: '40%', label: 'Water Conservation', icon: <TrendingUpIcon /> },
  { value: '30%', label: 'Renewable Energy', icon: <TrendingUpIcon /> },
  { value: '100%', label: 'Fair Labor Practices', icon: <CheckCircleIcon /> },
];

function ESG() {
  return (
    <>
      <Helmet>
        <title>ESG - Environmental, Social & Governance - Skylark Textiles</title>
        <meta
          name="description"
          content="Discover Skylark Textiles' commitment to Environmental, Social, and Governance (ESG) principles for sustainable and responsible business practices."
        />
      </Helmet>

      <PageHero
        title="ESG - Environmental, Social & Governance"
        subtitle="Building a sustainable future through responsible business practices"
      />

      <Section py={10}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Our ESG Framework
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
            >
              At Skylark Textiles, we integrate Environmental, Social, and Governance principles
              into every aspect of our business to create long-term value for all stakeholders.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {esgPillars.map((pillar, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {pillar.icon}
                      <Typography variant="h4" sx={{ mt: 2, mb: 1.5, fontWeight: 600 }}>
                        {pillar.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {pillar.description}
                      </Typography>
                    </Box>
                    <List dense>
                      {pillar.initiatives.map((initiative, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={initiative}
                            primaryTypographyProps={{ fontSize: '0.875rem' }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
              Impact Metrics
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
            >
              Measurable progress toward our ESG goals demonstrates our commitment to
              sustainable and responsible operations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {impactMetrics.map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box sx={{ color: 'secondary.main', mb: 2 }}>{metric.icon}</Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {metric.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section py={10}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our ESG Commitment
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                Skylark Textiles recognizes that sustainable business practices are essential
                for long-term success. Our ESG framework guides our decision-making and ensures
                we create value for all stakeholders—employees, customers, communities, and
                the environment.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                We regularly assess and report on our ESG performance, setting ambitious targets
                and holding ourselves accountable for continuous improvement. Our governance
                structure ensures oversight, transparency, and ethical conduct at all levels.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, backgroundColor: 'primary.main', color: 'white' }}>
                <BusinessIcon sx={{ fontSize: 56, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Responsible Business Leadership
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.95 }}>
                  As a leading textile manufacturer, we take our responsibility seriously.
                  From ethical sourcing to employee wellbeing, from carbon reduction to
                  community support, every decision reflects our commitment to doing
                  business the right way.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section backgroundColor="secondary.main" py={8}>
        <Container>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Building a Sustainable Tomorrow
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.95, maxWidth: 700, mx: 'auto' }}>
              Our ESG initiatives are not just about compliance—they represent our vision
              for a better, more sustainable textile industry.
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default ESG;
