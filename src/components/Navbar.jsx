import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {AppBar,Toolbar,IconButton,Typography,Menu,MenuItem,Box,Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Quiénes Somos', path: '/about' },
    { label: 'Productos', path: '/products' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contacto', path: '/contact' },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Tejelanas Vivi
        </Typography>

        {/* Menú nomral*/}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {navItems.map(({ label, path }) => (
            <Button
              key={path}
              component={Link}
              to={path}
              sx={{
                color: isActive(path) ? '#007bff' : '#000',
                fontWeight: isActive(path) ? 'bold' : 'normal',
                borderBottom: isActive(path) ? '2px solid #007bff' : 'none',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(0, 123, 255, 0.1)',
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Menú hamburguesas */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {navItems.map(({ label, path }) => (
              <MenuItem
                key={path}
                component={Link}
                to={path}
                onClick={handleMenuClose}
                selected={isActive(path)}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
