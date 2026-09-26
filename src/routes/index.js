import { Router } from 'express'
const router = Router()

const hora = new Date().toLocaleTimeString('es-CO')

// "Base de datos" temporal en memoria — se borra si el servidor se reinicia
const usuarios = []

router.get('/', (req, res) => res.render('index', { etiqueta: 'Mi primer Sitio Web with Node', hora: hora }))
router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros.ejs', { etiqueta: 'Sobre Nosotros' }))
router.get('/menu', (req, res) => res.render('menu.ejs', { etiqueta: 'Menu Empresarial' }))
router.get('/contactos', (req, res) => res.render('contactos.ejs', { etiqueta: 'Pagina de Contactos' }))

// --- RUTA GET PARA EL LOGIN ---
router.get('/login', (req, res) => {
    const mensaje = req.query.registrado ? '¡Usuario creado con éxito! Ahora puedes iniciar sesión.' : null;
    res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: mensaje
    });
});

// --- RUTA POST PARA PROCESAR EL LOGIN ---
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    // Usuario de prueba fijo (lo dejamos por si tu profe lo usa para revisar)
    if (usuario === 'admin' && contrasena === '1234') {
        return res.redirect('/menu');
    }

    // Busca entre los usuarios registrados (usuario = número de documento)
    const encontrado = usuarios.find(
        u => u.numeroDocumento === usuario && u.contrasena === contrasena
    );

    if (encontrado) {
        return res.redirect('/menu');
    }

    return res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: 'Usuario o contraseña incorrectos'
    });
});

// Mostrar formulario de registro
router.get('/registro', (req, res) => {
    res.render('registro', {
        etiqueta: 'Registro de Usuario',
        error: null
    });
});

// Recibir todos los datos del formulario de 3 pasos
router.post('/registro', async (req, res) => {
    const {
        tipoDocumento,
        numeroDocumento,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        fechaNacimiento,
        correo,
        confirmarCorreo,
        contrasena,
        confirmarContrasena
    } = req.body;

    if (correo !== confirmarCorreo) {
        return res.render('registro', { etiqueta: 'Registro de Usuario', error: 'Los correos electrónicos no coinciden.' });
    }

    if (contrasena !== confirmarContrasena) {
        return res.render('registro', { etiqueta: 'Registro de Usuario', error: 'Las contraseñas no coinciden.' });
    }

    const yaExiste = usuarios.find(
        u => u.correo === correo || u.numeroDocumento === numeroDocumento
    );
    if (yaExiste) {
        return res.render('registro', { etiqueta: 'Registro de Usuario', error: 'Ya existe un usuario registrado con ese correo o documento.' });
    }

    try {
        usuarios.push({
            tipoDocumento,
            numeroDocumento,
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            fechaNacimiento,
            correo,
            contrasena
        });

        console.log("Usuarios registrados hasta ahora:", usuarios);

        res.redirect('/login?registrado=1');
    } catch (error) {
        console.error(error);
        res.render('registro', { etiqueta: 'Registro de Usuario', error: 'Hubo un error al registrar el usuario.' });
    }
});

router.post('/cotizar', (req, res) => {
    const { nombre, telefono, correo, tipoMudanza, origen, destino, mensaje } = req.body;
    console.log("Nueva cotización recibida de:", nombre, "-", telefono);
    res.render('cotizacion-recibida', {
        etiqueta: 'Solicitud recibida',
        nombre: nombre
    });
});

export default router