import { Box, Typography, Grid } from '@mui/material';
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
    icon: <LocationOnIcon />,
    title: 'Address',
    content: '2/206, Tiruppur Main Road, Gudimangalam, Udumalpet, Thiruppur District - 642 201, Tamil Nadu, INDIA',
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    content: '+91 94420 09317 / +91 99438 49317',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'info@skylarktextiles.com',
  },
  {
    icon: <AccessTimeIcon />,
    title: 'Business Hours',
    content: 'Monday - Saturday: 9:00 AM - 9:00 PM | Sunday: Closed',
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

      <Section py={8}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Contact Information
          </Typography>

          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      color: 'secondary.main',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 169, 97, 0.1)',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {info.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} lg={7}>
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 1,
                  display: 'block'
                }}
              >
                GET IN TOUCH
              </Typography>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                Let's Start a Conversation
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary', maxWidth: 600 }}>
                Have a question about our services, need a quote, or want to schedule a factory visit?
                Fill out the form and our team will get back to you promptly.
              </Typography>
            </Box>
            <ContactForm />
          </Grid>

          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                position: 'sticky',
                top: 100,
                pl: { lg: 4 }
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Find Us on Map
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 500,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
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

      <Section
        backgroundColor="background.default"
        py={8}
        sx={{
          backgroundImage: 'linear-gradient(180deg, rgba(201, 169, 97, 0.02) 0%, rgba(201, 169, 97, 0.05) 100%)',
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            VISIT US
          </Typography>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Experience Our Facility
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
            Experience our manufacturing capabilities firsthand. Schedule a visit to tour our
            facilities, meet our team, and see our production processes in action.
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              backgroundColor: 'rgba(201, 169, 97, 0.1)',
            }}
          >
            <PhoneIcon sx={{ color: 'secondary.main' }} />
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'secondary.main' }}>
              +91 94420 09317
            </Typography>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Contact;
