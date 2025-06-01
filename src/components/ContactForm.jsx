// src/components/ContactForm.jsx
import { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  isNotEmpty,
  isValidName,
  isEmail,
  isValidMessage,
  isCaptchaValid
} from '../utils/validations';

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState(null);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!isNotEmpty(form.nombre)) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (!isValidName(form.nombre)) {
      newErrors.nombre = 'El nombre solo debe contener letras y espacios';
    }

    if (!isNotEmpty(form.correo)) {
      newErrors.correo = 'El correo es requerido';
    } else if (!isEmail(form.correo)) {
      newErrors.correo = 'Correo inválido';
    }

    if (!isNotEmpty(form.mensaje)) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (!isValidMessage(form.mensaje, 10)) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (!isCaptchaValid(captcha)) {
      newErrors.captcha = 'Por favor verifica que no eres un robot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Formulario enviado correctamente');
      setForm({ nombre: '', correo: '', mensaje: '' });
      setCaptcha(null);
      recaptchaRef.current.reset();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 350 }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        error={!!errors.nombre}
        helperText={errors.nombre}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
      <TextField
        label="Correo"
        name="correo"
        value={form.correo}
        onChange={handleChange}
        error={!!errors.correo}
        helperText={errors.correo}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
      <TextField
        label="Mensaje"
        name="mensaje"
        value={form.mensaje}
        onChange={handleChange}
        error={!!errors.mensaje}
        helperText={errors.mensaje}
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
        required
      />
      <Box sx={{ mb: 2 }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcllFErAAAAAIDH4xOwyxC1gWY1ZFEndRnl3H6l"
          onChange={value => setCaptcha(value)}
        />
        {errors.captcha && (
          <span style={{ color: 'red', fontSize: 12 }}>{errors.captcha}</span>
        )}
      </Box>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </Box>
  );
}

export default ContactForm;
