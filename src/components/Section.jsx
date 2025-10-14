import { Box, Container } from '@mui/material';

function Section({ children, backgroundColor = 'transparent', py = 8, ...props }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: py * 0.75, md: py },
        backgroundColor,
      }}
      {...props}
    >
      <Container>{children}</Container>
    </Box>
  );
}

export default Section;
