import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import servicesData from '../data/services.json';

function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Capabilities - Skylark Textiles</title>
        <meta
          name="description"
          content="Comprehensive textile manufacturing services including spinning, weaving, knitting, dyeing, printing, finishing, and quality assurance."
        />
      </Helmet>

      <PageHero
        title="Our Services"
        subtitle="Comprehensive textile manufacturing solutions tailored to your needs"
        breadcrumbs={[{ label: 'Services', path: '/services' }]}
      />

      <Section py={10}>
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', lineHeight: 1.8, fontSize: '1.125rem' }}>
          {/* TODO: Replace with actual services introduction from PDF */}
          From raw materials to finished products, we offer end-to-end textile manufacturing
          solutions. Our integrated facilities and experienced team ensure quality, consistency, and
          timely delivery for projects of any scale.
        </Typography>

        <Grid container spacing={4}>
          {servicesData.map((service) => (
            <Grid item xs={12} key={service.id}>
              <Card
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(26, 26, 46, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}
                      >
                        {service.description}
                      </Typography>

                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Key Capabilities
                      </Typography>
                      <List dense>
                        {service.capabilities.map((capability, index) => (
                          <ListItem key={index} disableGutters>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary={capability} />
                          </ListItem>
                        ))}
                      </List>

                      {service.machinery && (
                        <>
                          <Typography variant="h6" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                            Equipment & Technology
                          </Typography>
                          <List dense>
                            {service.machinery.map((machine, index) => (
                              <ListItem key={index} disableGutters>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary={machine}
                                  primaryTypographyProps={{ variant: 'body2' }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}

                      {service.certifications && (
                        <>
                          <Typography variant="h6" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                            Certifications
                          </Typography>
                          <List dense>
                            {service.certifications.map((cert, index) => (
                              <ListItem key={index} disableGutters>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary={cert} />
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          p: 3,
                          backgroundColor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                          Specifications
                        </Typography>

                        {service.capacity && (
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}
                            >
                              CAPACITY
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {service.capacity}
                            </Typography>
                          </Box>
                        )}

                        {service.turnaround && (
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}
                            >
                              TURNAROUND
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {service.turnaround}
                            </Typography>
                          </Box>
                        )}

                        {service.moq && (
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}
                            >
                              MINIMUM ORDER
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {service.moq}
                            </Typography>
                          </Box>
                        )}

                        <Divider sx={{ my: 3 }} />

                        <Button
                          component={Link}
                          to="/booking"
                          variant="contained"
                          color="secondary"
                          fullWidth
                        >
                          Request Quote
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section backgroundColor="background.default" py={8}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto', lineHeight: 1.8 }}>
            Contact us to discuss your requirements, request samples, or schedule a facility tour.
            Our team is ready to help you find the perfect textile solution.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              color="secondary"
              size="large"
            >
              Schedule a Visit
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              color="primary"
              size="large"
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Services;
