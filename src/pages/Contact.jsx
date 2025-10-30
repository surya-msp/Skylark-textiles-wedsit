import { Box, Typography, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactInfo = [
  {
    icon: <LocationOnIcon fontSize="large" />,
    title: 'Address',
    content: [
      '2/206, Tiruppur Main Road',
      'Gudimangalam, Udumalpet',
      'Thiruppur District - 642 201.',
      'Tamil Nadu, INDIA'
    ],
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: 'Phone',
    content: ['+91 94420 09317', '+91 99438 49317'],
  },
  {
    icon: <EmailIcon fontSize="large" />,
    title: 'Email',
    content: ['info@skylarktextiles.com'],
  },
  {
    icon: <AccessTimeIcon fontSize="large" />,
    title: 'Business Hours',
    content: [
      'Monday - Saturday: 9:00 AM - 9:00 PM',
      'Sunday: Closed',
    ],
  },
];

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Skylark Textiles</title>
        <meta
          name="description"
          content="Get in touch with Skylark Textiles. Contact our team for inquiries, quotes, or to schedule a facility visit."
        />
      </Helmet>

      <PageHero
        title="Contact Us"
        subtitle="We're here to answer your questions and discuss your textile needs"
        breadcrumbs={[{ label: 'Contact', path: '/contact' }]}
      />

      <Section py={10}>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
              {/* TODO: Replace with actual contact intro from PDF */}
              Have a question about our services, need a quote, or want to schedule a factory
              visit? Fill out the form and our team will get back to you promptly.
            </Typography>
            <ContactForm />
          </Grid>

          <Grid item xs={12} lg={6}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Contact Information
            </Typography>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        backgroundColor: 'rgba(201, 169, 97, 0.03)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: 'secondary.main',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {info.title}
                    </Typography>
                    {info.content.map((line, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 0.5 }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Our Location
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps?q=2/206,+Tiruppur+Main+Road,+Gudimangalam,+Udumalpet,+Thiruppur+District+-+642201,+Tamil+Nadu,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section backgroundColor="background.default" py={8}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Visit Our Facility
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Experience our manufacturing capabilities firsthand. Schedule a visit to tour our
            facilities, meet our team, and see our production processes in action.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'secondary.main' }}>
            Call us at +91 94420 09317 or use our booking form to schedule your visit.
          </Typography>
        </Box>
      </Section>
    </>
  );
}

export default Contact;
