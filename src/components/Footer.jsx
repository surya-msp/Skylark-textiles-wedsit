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
        pt: 2.5,
        pb: 2,
        mt: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 700,
                mb: 1,
                letterSpacing: '0.05em',
                fontSize: '1.1rem',
              }}
            >
              SKYLARK TEXTILES
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, opacity: 0.9, fontSize: '0.85rem' }}>
              A leading textile manufacturer committed to excellence in quality,
              innovation, and sustainable practices. Serving global markets with
              premium yarns, fabrics, and textile solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.8 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  size="small"
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

          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.05em',
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 16, mt: 0.2, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.4, fontSize: '0.8rem' }}>
                  2/206, Tiruppur Main Road, Gudimangalam, Udumalpet,<br />
                  Thiruppur District - 642 201., Tamil Nadu, INDIA
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.8rem' }}>
                  +91 94420 09317, +91 99438 49317
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.8rem' }}>
                  info@skylarktextiles.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1.5, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Skylark Textiles. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2.5 }}>
            <Link
              to="/privacy"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.75rem',
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
                fontSize: '0.75rem',
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
