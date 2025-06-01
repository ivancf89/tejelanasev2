import { Box, Typography, Link as MuiLink, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#222',
        color: '#fff',
        py: 4,
        px: 2,
        textAlign: 'center',
        mt: 4,
        width: '100%',
      }}
      role="contentinfo"
    >
      {/* Contenedor flexible para redes y contacto */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        {/* Instagram */}
        <MuiLink
          href="https://www.instagram.com/teje_lanas.vivi"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          aria-label="Instagram Teje Lanas Vivi"
        >
          <InstagramIcon fontSize="medium" />
          teje_lanas.vivi
        </MuiLink>

        {/* Facebook */}
        <MuiLink
          href="https://www.facebook.com/viviana.mendezorrego"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          aria-label="Facebook Viviana Mendez Orrego"
        >
          <FacebookIcon fontSize="medium" />
          Viviana Mendez Orrego
        </MuiLink>

        {/* Whatsapp */}
        <Typography variant="body2" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Whatsapp: 
          <MuiLink href="https://wa.me/56976322314" color="inherit" underline="hover" aria-label="Whatsapp +56 9 7632 2314">
            +56 9 7632 2314
          </MuiLink>
        </Typography>
      </Stack>

      {/* Información de despacho */}
      <Typography variant="body2" color="inherit" sx={{ mb: 0.5 }}>
        Despacho Santiago | Regiones Vía Starken, Chilexpress
      </Typography>

      {/* Productos */}
      <Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
        Lanas naturales · Vellón · Algodón de alta transición · Mezclimam
      </Typography>

      {/* Derechos reservados */}
      <Typography variant="body2" color="inherit" sx={{ fontWeight: 'medium' }}>
        © 2025 Tejelanas Vivi. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
