import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function PageHero({ title, subtitle, image, breadcrumbs = [] }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 300, md: 400 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'primary.main',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: image ? 0.2 : 0,
          transition: 'opacity 0.3s ease',
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, md: 8 },
        }}
      >
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              mb: 3,
              '& .MuiBreadcrumbs-separator': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          >
            <MuiLink
              component={Link}
              to="/"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Home
            </MuiLink>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return isLast ? (
                <Typography
                  key={crumb.label}
                  sx={{
                    color: 'primary.contrastText',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {crumb.label}
                </Typography>
              ) : (
                <MuiLink
                  key={crumb.label}
                  component={Link}
                  to={crumb.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {crumb.label}
                </MuiLink>
              );
            })}
          </Breadcrumbs>
        )}

        <Typography
          variant="h1"
          sx={{
            color: 'primary.contrastText',
            mb: subtitle ? 2 : 0,
            maxWidth: 800,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 300,
              maxWidth: 700,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default PageHero;
