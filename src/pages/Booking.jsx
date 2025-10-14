import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import BookingForm from '../components/BookingForm';

function Booking() {
  return (
    <>
      <Helmet>
        <title>Book a Visit - Skylark Textiles</title>
        <meta
          name="description"
          content="Schedule a factory tour, capabilities discussion, or sampling session with Skylark Textiles. Book your visit today."
        />
      </Helmet>

      <PageHero
        title="Book a Visit"
        subtitle="Schedule a factory tour, discuss capabilities, or request samples"
        breadcrumbs={[{ label: 'Booking', path: '/booking' }]}
      />

      <Section py={10}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', lineHeight: 1.8, fontSize: '1.125rem' }}>
            {/* TODO: Replace with actual booking intro from PDF */}
            We welcome the opportunity to meet with you and discuss how Skylark Textiles can meet
            your needs. Whether you'd like to tour our facilities, explore our capabilities, or
            request product samples, we're here to help.
          </Typography>

          <BookingForm />

          <Box
            sx={{
              mt: 6,
              p: 4,
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              What to Expect
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
              <strong>Factory Tour:</strong> Experience our manufacturing processes firsthand with a
              guided tour of our facilities, including spinning, weaving, dyeing, and finishing
              operations.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
              <strong>Capabilities Discussion:</strong> Meet with our technical team to discuss your
              specific requirements and learn how our capabilities can meet your needs.
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              <strong>Sampling:</strong> Review our product range and request samples to evaluate
              quality, texture, and suitability for your projects.
            </Typography>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Booking;
