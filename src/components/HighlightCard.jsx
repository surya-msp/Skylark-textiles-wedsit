import { Card, CardContent, Typography, Box } from '@mui/material';

function HighlightCard({ icon, title, description, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: onClick ? 'translateY(-8px)' : 'none',
          boxShadow: onClick ? '0 12px 24px rgba(26, 26, 46, 0.12)' : 'none',
          borderColor: 'secondary.main',
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, md: 4 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {icon && (
          <Box
            sx={{
              mb: 3,
              color: 'secondary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
            }}
          >
            {icon}
          </Box>
        )}
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighlightCard;
