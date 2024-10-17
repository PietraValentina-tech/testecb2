import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="py-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('aboutTitle')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('aboutDescription')}
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        {t('aiAlgorithmsTitle')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('aiAlgorithmsDescription')}
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        {t('enhancedAccuracyTitle')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('enhancedAccuracyDescription')}
      </Typography>
    </Container>
  );
};

export default About;