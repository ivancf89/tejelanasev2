# Tejelanas Vivi

Proyecto web para la tienda Tejelanas Vivi, desarrollada en React con Vite y Material UI. Permite mostrar productos, servicios, contacto y carrito de compras, con animaciones y responsividad.

## Características

- **Catálogo de productos y servicios** con imágenes y descripciones.
- **Formulario de contacto** validado y con reCAPTCHA.
- **Carrito de compras** funcional.
- **Animaciones de scroll** usando AOS.
- **Carga diferida (lazy loading)** de imágenes para mejor rendimiento.
- **Code splitting** con React.lazy y Suspense.
- **Diseño completamente responsivo** usando Material UI.
- **Footer con enlaces a redes sociales y datos de contacto.**

## Estructura de carpetas

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    ContactForm.jsx
    ServiceCard.jsx
    ScrollToTop.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    ProductsPage.jsx
    FaqPage.jsx
  routes/
    AppRoutes.jsx
  services/
    api.js
  utils/
    validations.js
  assets/
    images/
      (imágenes comprimidas)
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/tejelanasev2.git
   cd tejelanasev2
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Dependencias principales

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha)
- [react-router-dom](https://reactrouter.com/)

## Buenas prácticas

- Todas las imágenes en `assets/images` deben estar comprimidas antes de subirlas (usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)).
- Usa las funciones de validación de `src/utils/validations.js` para todos los formularios.
- Las rutas de las páginas usan **code splitting** para mejor rendimiento.
- Las imágenes usan `loading="lazy"` para carga diferida.
- El diseño es responsivo y se adapta a cualquier dispositivo.

## Animaciones

Las animaciones de scroll se implementan con AOS. Puedes agregar animaciones a cualquier elemento usando el atributo `data-aos`, por ejemplo:

```jsx
<div data-aos="fade-up">Contenido animado</div>
```

## Contacto

Para dudas o soporte, contacta a [teje_lanas.vivi](https://www.instagram.com/teje_lanas.vivi) o revisa el formulario de contacto en la web.

---

**© 2025 Tejelanas Vivi. Todos los derechos reservados.**