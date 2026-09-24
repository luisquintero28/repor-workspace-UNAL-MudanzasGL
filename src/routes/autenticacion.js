import { Router } from 'express';
const router = Router();

// Ruta POST para procesar el login
router.post('/api/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    console.log("Usuario recibido:", usuario);
    console.log("Contraseña recibida:", contrasena);

    if (usuario === "admin" && contrasena === "12345") {
        res.redirect('/about'); 
    } else {
        res.send("Usuario o contraseña incorrectos");
    }
});

// 3. Botón "Crear Usuario"
router.get('/registro', (req, res) => {
    res.send("Aquí se mostrará el formulario para crear un nuevo usuario.");
});

// 4. Enlace "Restablecer contraseña"
router.get('/recuperar-password', (req, res) => {
    res.send("Vista o lógica para enviar el correo de recuperación de contraseña.");
});

// 5. Enlace "Recordar Usuario"
router.get('/recordar-usuario', (req, res) => {
    res.send("Vista o lógica para recordar el nombre de usuario.");
});

// Ruta de ejemplo para el éxito del login (si cambiaste el redirect a /dashboard)
router.get('/dashboard', (req, res) => {
    res.send("¡Bienvenido al sistema!");
});

export default router;
