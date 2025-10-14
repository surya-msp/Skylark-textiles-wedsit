import { useParams, Link, Navigate } from 'react-router-dom';
import { Box, Typography, Container, Button, Divider } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import newsData from '../data/news.json';

function NewsArticle() {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Skylark Textiles</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Button
            component={Link}
            to="/news"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Back to News
          </Button>

          {article.image && (
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%',
                mb: 4,
                overflow: 'hidden',
                backgroundColor: 'grey.200',
              }}
            >
              <Box
                component="img"
                src={article.image}
                alt={article.title}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          )}

          <Typography
            variant="caption"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              display: 'block',
              mb: 2,
            }}
          >
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>

          <Typography variant="h1" sx={{ mb: 4 }}>
            {article.title}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.9,
              fontSize: '1.125rem',
              whiteSpace: 'pre-wrap',
            }}
          >
            {article.content}
          </Typography>

          <Divider sx={{ my: 6 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              component={Link}
              to="/news"
              startIcon={<ArrowBackIcon />}
              variant="outlined"
            >
              Back to News
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default NewsArticle;
