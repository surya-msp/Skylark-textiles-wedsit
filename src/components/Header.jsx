import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'News', path: '/news' },
  { label: 'Blog', path: '/blog' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: trigger ? 'background.paper' : 'transparent',
          transition: 'all 0.3s ease',
          borderBottom: trigger ? 1 : 0,
          borderColor: 'divider',
        }}
      >
        <Container>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: 2,
              minHeight: { xs: 64, md: 80 },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  color: 'primary.main',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                SKYLARK TEXTILES
              </Box>
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? 'secondary.main' : 'text.primary',
                    px: 2,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive(item.path) ? '70%' : 0,
                      height: '2px',
                      backgroundColor: 'secondary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '70%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {/* <Button
                component={Link}
                to="/booking"
                variant="contained"
                color="secondary"
                sx={{
                  ml: 2,
                  fontWeight: 600,
                }}
              >
                Book a Visit
              </Button> */}
            </Box>

            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  selected={isActive(item.path)}
                  sx={{
                    py: 1.5,
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(201, 169, 97, 0.08)',
                      color: 'secondary.main',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive(item.path) ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            {/* <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/booking"
                onClick={handleDrawerToggle}
                sx={{ py: 1.5 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                >
                  Book a Visit
                </Button>
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
