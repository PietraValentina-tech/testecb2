import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="py-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('homeTitle')}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {t('homeSubtitle')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('homeDescription')}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/calculator"
        size="large"
      >
        {t('startCalculating')}
      </Button>
    </Container>
  );
};

export default Home;