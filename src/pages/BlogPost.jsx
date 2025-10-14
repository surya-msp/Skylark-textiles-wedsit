import { useParams, Link, Navigate } from 'react-router-dom';
import { Box, Typography, Container, Button, Divider, Chip } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import blogData from '../data/blog.json';

function BlogPost() {
  const { slug } = useParams();
  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Skylark Textiles Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Button
            component={Link}
            to="/blog"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Back to Blog
          </Button>

          {post.image && (
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
                src={post.image}
                alt={post.title}
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

          <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {post.tags?.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: 'rgba(201, 169, 97, 0.1)',
                  color: 'secondary.main',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          <Typography variant="h1" sx={{ mb: 3 }}>
            {post.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
            {post.author && (
              <>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  •
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  By {post.author}
                </Typography>
              </>
            )}
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.9,
              fontSize: '1.125rem',
              whiteSpace: 'pre-wrap',
            }}
          >
            {post.content}
          </Typography>

          <Divider sx={{ my: 6 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button
              component={Link}
              to="/blog"
              startIcon={<ArrowBackIcon />}
              variant="outlined"
            >
              Back to Blog
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BlogPost;
