import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'News', path: '/news' },
  { label: 'Blog', path: '/blog' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: <FacebookIcon />, url: '#', label: 'Facebook' },
  { icon: <LinkedInIcon />, url: '#', label: 'LinkedIn' },
  { icon: <InstagramIcon />, url: '#', label: 'Instagram' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 700,
                mb: 2,
                letterSpacing: '0.05em',
              }}
            >
              SKYLARK TEXTILES
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}>
              {/* TODO: Replace with actual company summary from PDF */}
              A leading textile manufacturer committed to excellence in quality,
              innovation, and sustainable practices. Serving global markets with
              premium yarns, fabrics, and textile solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  sx={{
                    color: 'primary.contrastText',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'primary.main',
                      borderColor: 'secondary.main',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: 0.9,
                    fontSize: '0.9375rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#c9a961';
                    e.target.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'inherit';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 20, mt: 0.3, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                  {/* TODO: Replace with actual address from PDF */}
                  2/206, Tiruppur Main Road, <br />
                  Gudimangalam, Udumalpet,<br />
                  Thiruppur District - 642 201.,<br />
                  Tamil Nadu, INDIA
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {/* TODO: Replace with actual phone from PDF */}
                  +91 94420 09317<br/>
                  +91 99438 49317
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {/* TODO: Replace with actual email from PDF */}
                  info@skylarktextiles.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Business Hours
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Monday - Friday
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500 }}>
                  {/* TODO: Replace with actual hours from PDF */}
                  9:00 - 18:00
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Saturday
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500 }}>
                  9:00 - 14:00
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Sunday
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500 }}>
                  Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Skylark Textiles. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              to="/privacy"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.875rem',
                opacity: 0.8,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.875rem',
                opacity: 0.8,
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
