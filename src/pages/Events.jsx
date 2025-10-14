import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import eventsData from '../data/events.json';

function Events() {
  const upcomingEvents = eventsData.filter((event) => event.type === 'upcoming');
  const pastEvents = eventsData.filter((event) => event.type === 'past');

  const generateICS = (event) => {
    const formatDate = (dateStr) => {
      return dateStr.replace(/-/g, '') + 'T000000Z';
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Skylark Textiles//Events//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@skylarktextiles.com`,
      `DTSTAMP:${formatDate(new Date().toISOString().split('T')[0])}`,
      `DTSTART:${formatDate(event.startDate)}`,
      `DTEND:${formatDate(event.endDate)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const EventCard = ({ event, isPast = false }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        opacity: isPast ? 0.8 : 1,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(26, 26, 46, 0.12)',
        },
      }}
    >
      {event.image && (
        <CardMedia
          component="div"
          sx={{
            paddingTop: '56.25%',
            backgroundColor: 'grey.200',
          }}
          image={event.image}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column' }}>
        <Chip
          label={isPast ? 'Past Event' : 'Upcoming'}
          size="small"
          sx={{
            mb: 2,
            alignSelf: 'flex-start',
            backgroundColor: isPast ? 'grey.300' : 'secondary.main',
            color: isPast ? 'text.secondary' : 'primary.main',
            fontWeight: 600,
          }}
        />

        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          {event.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CalendarTodayIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            {event.endDate !== event.startDate &&
              ` - ${new Date(event.endDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}`}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 3 }}>
          <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.3 }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {event.location}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, flexGrow: 1 }}>
          {event.description}
        </Typography>

        {!isPast && (
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<DownloadIcon />}
              onClick={() => generateICS(event)}
            >
              Add to Calendar
            </Button>
            <Button
              component={Link}
              to={`/booking?event=${encodeURIComponent(event.title)}`}
              variant="contained"
              color="secondary"
              size="small"
            >
              Register
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Events - Skylark Textiles</title>
        <meta
          name="description"
          content="Join us at upcoming trade fairs, exhibitions, and industry events. Connect with the Skylark Textiles team worldwide."
        />
      </Helmet>

      <PageHero
        title="Events"
        subtitle="Meet us at trade shows, exhibitions, and industry events worldwide"
        breadcrumbs={[{ label: 'Events', path: '/events' }]}
      />

      {upcomingEvents.length > 0 && (
        <Section py={10}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Upcoming Events
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 800 }}
          >
            Join us at these upcoming events to explore our latest collections, discuss partnership
            opportunities, and connect with our team.
          </Typography>
          <Grid container spacing={4}>
            {upcomingEvents.map((event) => (
              <Grid item xs={12} md={6} key={event.id}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        </Section>
      )}

      {pastEvents.length > 0 && (
        <Section backgroundColor="background.default" py={10}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Past Events
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 800 }}
          >
            Our participation in these events has helped us connect with clients and partners
            worldwide.
          </Typography>
          <Grid container spacing={4}>
            {pastEvents.map((event) => (
              <Grid item xs={12} md={6} key={event.id}>
                <EventCard event={event} isPast />
              </Grid>
            ))}
          </Grid>
        </Section>
      )}

      {upcomingEvents.length === 0 && pastEvents.length === 0 && (
        <Section py={10}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              No events scheduled at the moment. Check back soon!
            </Typography>
          </Box>
        </Section>
      )}
    </>
  );
}

export default Events;
