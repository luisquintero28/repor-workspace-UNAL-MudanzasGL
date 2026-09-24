import { Router } from 'express'
const router = Router ()

const hora = new Date().toLocaleTimeString('es-CO')

router.get('/', (req, res) => res.render('index', { etiqueta: 'Mi primer Sitio Web with Node',  hora:hora }))
router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros.ejs', { etiqueta: 'Sobre Nosotros' }))
router.get('/menu', (req, res ) => res.render('menu.ejs', { etiqueta: 'Menu Empresarial' }))
router.get('/contactos', (req, res ) => res.render('contactos.ejs', { etiqueta: 'Pagina de Contactos' }))

// --- RUTA GET PARA EL LOGIN (Única y con mensaje incluido) ---
router.get('/login', (req, res) => {
    res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: null
    });
});

// --- RUTA POST PARA PROCESAR EL LOGIN ---

router.post('/login', (req, res) => 
    { const { usuario, contrasena } = req.body; 
if (usuario === 'admin' && contrasena === '1234') { 
    return res.redirect('/menu'); } 
    return res.render('login', {
         etiqueta: 'Vista de inicio de sesion', 
         mensaje: 'Usuario o contraseña incorrectos'
         }); });

//Mostrar formulario de registro
router.get('/registro', (req, res) => {
    res.render('registro', {
        etiqueta: 'Registro de Usuario',
        error: null
    });
});

// Recibir todos los datos consolidados del formulario de 3 pasos en el JSON
router.post('/registro', async (req, res) => {
    const { 
        tipoDocumento, 
        numeroDocumento, 
        segundoNombre, 
        otrosNombres, 
        primerApellido, 
        segundoApellido, 
        fechaNacimiento, 
        correo, 
        confirmarCorreo 
    } = req.body;

    // Validar que los correos coincidan en el backend por seguridad
    if (correo !== confirmarCorreo) {
        return res.render('registro', { error: 'Los correos electrónicos no coinciden.' });
    }
    
    // Validar que los correos coincidan en el backend por seguridad
    if (correo !== confirmarCorreo) {
        return res.render('registro', { error: 'Los correos electrónicos no coinciden.' });
    }

    try {
        // TODO: Aquí guardas el usuario en tu Base de Datos (MySQL, SQLite, etc.)
        console.log("Datos del usuario a guardar:", req.body);

        // Redirigir al login o a una página de éxito
        res.redirect('/login'); // O la ruta que maneje tu inicio de sesión
    } catch (error) {
        console.error(error);
        res.render('registro', { error: 'Hubo un error al registrar el usuario.' });
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

