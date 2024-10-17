import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 py-4 mt-8">
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          {t('footerText')} &copy; {new Date().getFullYear()}{' '}
          <Link color="inherit" href="https://example.com">
            {t('appName')}
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;