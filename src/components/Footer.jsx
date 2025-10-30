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
import footerLogo2 from '../assets/footerLogo2.png';

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
        pt: 5,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* TOP SECTION */}
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Logo + Description */}
          <Grid item xs={12} md={7} lg={8}>
            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'column', sm: 'row' },
                flexWrap: 'wrap',
                gap: 15,
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  textAlign: { xs: 'left', sm: 'center' },
                }}
              >
                <img
                  src={footerLogo2}
                  alt="Skylark Textiles"
                  style={{ width: '180px', height: 'auto' }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1.2,
                    opacity: 0.8,
                    fontSize: '0.75rem',
                  }}
                >
                  © {new Date().getFullYear()} Skylark Textiles. All rights reserved.
                </Typography>
              </Box>

              {/* Description */}
              <Box sx={{ flex: 1, minWidth: '250px', maxWidth: '350px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    lineHeight: 1.6,
                    opacity: 0.9,
                    fontSize: '0.9rem',
                  }}
                >
                  A leading textile manufacturer committed to excellence in quality,
                  innovation, and sustainable practices. Serving global markets with
                  premium yarns, fabrics, and textile solutions.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right: Contact */}
          <Grid item xs={12} md={5} lg={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 1.5,
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '0.05em',
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 18, mt: 0.2, opacity: 0.8 }} />
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.9, lineHeight: 1.5, fontSize: '0.85rem' }}
                >
                  2/206, Tiruppur Main Road, Gudimangalam, Udumalpet,<br />
                  Thiruppur District - 642 201., Tamil Nadu, INDIA
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                  +91 94420 09317, +91 99438 49317
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                  info@skylarktextiles.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.15)' }} />

        {/* BOTTOM SECTION */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2.5,
            textAlign: 'center',
          }}
        >
          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
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

          {/* Divider Dot */}
          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              to="/privacy"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.8rem',
                opacity: 0.85,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.8rem',
                opacity: 0.85,
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
