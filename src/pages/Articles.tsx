import React from 'react';
import { Typography, Container, Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Article {
  id: number;
  title: string;
  excerpt: string;
}

const Articles: React.FC = () => {
  const { t } = useTranslation();

  const articles: Article[] = [
    {
      id: 1,
      title: t('article1Title'),
      excerpt: t('article1Excerpt'),
    },
    {
      id: 2,
      title: t('article2Title'),
      excerpt: t('article2Excerpt'),
    },
    {
      id: 3,
      title: t('article3Title'),
      excerpt: t('article3Excerpt'),
    },
  ];

  return (
    <Container className="py-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('articlesTitle')}
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  {t('readMore')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;