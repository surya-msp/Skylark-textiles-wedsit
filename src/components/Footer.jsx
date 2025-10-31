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
        pt: { xs: 2, md: 3 },
        pb: { xs: 2, md: 3 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* === TOP SECTION === */}
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* Left: Logo & Description */}
          <Grid item xs={12} md={7} lg={7}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'flex-start',
                gap: { xs: 3, sm: 6, md: 10 },
                flexWrap: 'wrap',
                ml:"5px"
              }}
            >
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
                  style={{ width: '160px', height: 'auto' }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: '100%', sm: '250px' , md:"450px" },
                  maxWidth: '380px',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    lineHeight: 1.6,
                    opacity: 0.9,
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  }}
                >
                  A leading textile manufacturer committed to excellence in quality,
                  innovation, and sustainable practices. Serving global markets with
                  premium yarns, fabrics, and textile solutions.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right: Contact Info */}
          <Grid item xs={12} md={5} lg={5}>
            <Typography
              variant="h6"
              sx={{
                mb: 1.5,
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.1rem' },
                letterSpacing: '0.05em',
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 18, mt: 0.2, opacity: 0.8 }} />
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    lineHeight: 1.5,
                    fontSize: { xs: '0.65rem', sm: '0.7rem' },
                  }}
                >
                  2/206, Tiruppur Main Road, Gudimangalam Udumalpet,<br />
                  Thiruppur District - 642 201., Tamil Nadu, INDIA
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.9, fontSize: {  xs: '0.65rem', sm: '0.7rem'  } }}
                >
                  +91 94420 09317, +91 99438 49317
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.9, fontSize: {  xs: '0.65rem', sm: '0.7rem'  } }}
                >
                  info@skylarktextiles.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.15)' }} />

        {/* === BOTTOM SECTION === */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 2, sm: 3 },
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
              backgroundColor: 'rgba(255,255,255,0.4)',
              display: { xs: 'none', sm: 'block' },
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

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              mt: { xs: 1, sm: 0 },
              opacity: 0.8,
              fontSize: '0.75rem',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} Skylark Textiles. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
