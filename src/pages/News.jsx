import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import newsData from '../data/news.json';

function News() {
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Helmet>
        <title>News & Updates - Skylark Textiles</title>
        <meta
          name="description"
          content="Stay updated with the latest news, announcements, and developments from Skylark Textiles."
        />
      </Helmet>

      <PageHero
        title="News & Updates"
        subtitle="Stay informed about our latest developments, achievements, and announcements"
        breadcrumbs={[{ label: 'News', path: '/news' }]}
      />

      <Section py={10}>
        <Grid container spacing={4}>
          {sortedNews.map((article) => (
            <Grid item xs={12} md={6} key={article.id}>
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
                {article.image && (
                  <CardMedia
                    component="div"
                    sx={{
                      paddingTop: '56.25%',
                      backgroundColor: 'grey.200',
                    }}
                    image={article.image}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                  <Chip
                    label={new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    size="small"
                    sx={{
                      mb: 2,
                      backgroundColor: 'secondary.main',
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  />
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                    {article.excerpt}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/news/${article.slug}`}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {sortedNews.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              No news articles available at the moment.
            </Typography>
          </Box>
        )}
      </Section>
    </>
  );
}

export default News;
