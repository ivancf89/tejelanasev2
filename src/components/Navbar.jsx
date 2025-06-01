// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { label: 'INICIO', to: '/' },
  { label: 'PRODUCTOS', to: '/productos' },
  { label: 'SOBRE NOSOTROS', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'CONTACTO', to: '/contacto' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setOpen((prev) => !prev);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
                <List sx={{ width: 200 }}>
                  {navLinks.map((item) => (
                    <ListItem key={item.to} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.to}
                        onClick={handleDrawerToggle}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            navLinks.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={Link}
                to={item.to}
                sx={{ ml: 2 }}
              >
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

