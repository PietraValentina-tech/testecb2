import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Brightness4, Brightness7, Language } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, changeLanguage }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lng: string) => {
    changeLanguage(lng);
    handleLanguageMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="flex-grow">
          <Link to="/" className="text-white no-underline">
            {t('appName')}
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/">
          {t('home')}
        </Button>
        <Button color="inherit" component={Link} to="/about">
          {t('about')}
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          {t('contact')}
        </Button>
        <Button color="inherit" component={Link} to="/articles">
          {t('articles')}
        </Button>
        <Button color="inherit" component={Link} to="/calculator">
          {t('calculator')}
        </Button>
        <IconButton color="inherit" onClick={toggleDarkMode} aria-label={t('toggleDarkMode')}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <IconButton color="inherit" onClick={handleLanguageMenuOpen} aria-label={t('changeLanguage')}>
          <Language />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleLanguageMenuClose}
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('pt-BR')}>Português (BR)</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;