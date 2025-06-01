import ContactForm from '../components/ContactForm';
import Box from '@mui/material/Box';

function ContactPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '70vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ContactForm />
    </Box>
  );
}

export default ContactPage;
