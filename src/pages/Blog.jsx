import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import blogData from '../data/blog.json';

function Blog() {
  const sortedBlogs = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Helmet>
        <title>Blog - Skylark Textiles</title>
        <meta
          name="description"
          content="Insights, trends, and expert perspectives on textile manufacturing, quality control, sustainability, and industry innovations."
        />
      </Helmet>

      <PageHero
        title="Blog"
        subtitle="Insights and expertise from the world of textile manufacturing"
        breadcrumbs={[{ label: 'Blog', path: '/blog' }]}
      />

      <Section py={10}>
        <Grid container spacing={4}>
          {sortedBlogs.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(26, 26, 46, 0.12)',
                  },
                }}
              >
                {post.image && (
                  <CardMedia
                    component="div"
                    sx={{
                      paddingTop: '60%',
                      backgroundColor: 'grey.200',
                    }}
                    image={post.image}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {post.tags?.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.75rem',
                          height: 24,
                          backgroundColor: 'rgba(201, 169, 97, 0.1)',
                          color: 'secondary.main',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600, lineHeight: 1.3 }}>
                    {post.title}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                    {post.author && (
                      <>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          •
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {post.author}
                        </Typography>
                      </>
                    )}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7, flexGrow: 1 }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/blog/${post.slug}`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {sortedBlogs.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              No blog posts available at the moment.
            </Typography>
          </Box>
        )}
      </Section>
    </>
  );
}

export default Blog;
