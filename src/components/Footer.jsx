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
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
        >
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
        <Typography variant="body2" color="inherit">
            Whatsapp: <MuiLink href="https://wa.me/56976322314" color="inherit" underline="hover">+56 9 7632 2314</MuiLink>
        </Typography>
        </Stack>
        <Typography variant="body2" color="inherit">
        Despacho Santiago | Regiones Vía Starken, Chilexpress
        </Typography>
        <Typography variant="body2" color="inherit">
        Lanas naturales · Vellón · Algodón de alta transición · Mezclimam
        </Typography>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        © 2025 Tejelanas Vivi. Todos los derechos reservados.
        </Typography>
    </Box>
    );
};

export default Footer;
