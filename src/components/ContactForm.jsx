import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  isNotEmpty,
  isValidName,
  isEmail,
  isValidMessage,
  isCaptchaValid
} from '../utils/Validations';

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [recaptcha, setRecaptcha] = useState(null);

  // Validación de campos usando funciones externas
  const validate = () => {
    let err = {};
    if (!isNotEmpty(form.nombre)) err.nombre = "El nombre es obligatorio";
    else if (!isValidName(form.nombre)) err.nombre = "El nombre solo debe contener letras y espacios";
    if (!isNotEmpty(form.correo)) err.correo = "El correo es obligatorio";
    else if (!isEmail(form.correo)) err.correo = "Correo inválido";
    if (!isNotEmpty(form.mensaje)) err.mensaje = "El mensaje es obligatorio";
    else if (!isValidMessage(form.mensaje, 10)) err.mensaje = "El mensaje debe tener al menos 10 caracteres";
    if (!isCaptchaValid(recaptcha)) err.recaptcha = "Por favor, verifica el reCAPTCHA";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      alert('Mensaje enviado correctamente (simulado)');
      setForm({ nombre: '', correo: '', mensaje: '' });
      setErrors({});
      setRecaptcha(null);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 420,
        mx: 'auto',
        my: 4,
        p: { xs: 2, sm: 4 },
        background: '#fff',
        borderRadius: 2,
      }}
      aria-labelledby="contact-form-title"
    >
      <Typography id="contact-form-title" variant="h5" component="h2" mb={2} align="center">
        Contacto
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          margin="normal"
          error={!!errors.nombre}
          helperText={errors.nombre}
          autoComplete="name"
        />
        <TextField
          fullWidth
          label="Correo"
          name="correo"
          type="email"
          value={form.correo}
          onChange={handleChange}
          margin="normal"
          error={!!errors.correo}
          helperText={errors.correo}
          autoComplete="email"
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          error={!!errors.mensaje}
          helperText={errors.mensaje}
        />
        <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
          <ReCAPTCHA
            sitekey="6LdSfFIrAAAAAOv17NvJ5dBC86knRKRD5ZX46ocb"
            onChange={value => {
              setRecaptcha(value);
              setErrors({ ...errors, recaptcha: undefined });
            }}
          />
        </Box>
        {errors.recaptcha && <Typography color="error" variant="body2" align="center">{errors.recaptcha}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
}
//lalal
export default ContactForm;
