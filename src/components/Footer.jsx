import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
/*jhgjhgh*/

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 2,
        zIndex: 1201
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} TejeLanas Vivi. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
