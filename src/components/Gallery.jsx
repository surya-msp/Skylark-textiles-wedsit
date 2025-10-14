import { Box, Grid } from '@mui/material';

function Gallery({ images = [] }) {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              position: 'relative',
              paddingTop: '75%',
              overflow: 'hidden',
              backgroundColor: 'grey.200',
              cursor: 'pointer',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(26, 26, 46, 0)',
                transition: 'background-color 0.3s ease',
              },
              '&:hover::after': {
                backgroundColor: 'rgba(26, 26, 46, 0.2)',
              },
              '&:hover img': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;
