import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'
import authRoutes from './routes/autenticacion.js'

const app = express()

// Ruta absoluta
const __dirname = dirname(fileURLToPath (import.meta.url))
console.log(join(__dirname, '/views'))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 1. PRIMERO: Middlewares para leer datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 2. SEGUNDO: Carpeta pública para archivos estáticos (CSS, imágenes)
app.use(express.static(join(__dirname, 'public')))

// 3. TERCERO: Usar las rutas de la aplicación
app.use(indexRoutes)
app.use(authRoutes)

// 4. CUARTO: Iniciar el servidor
app.listen(3000)
console.log('Hola Mundo')
console.log('El servidor esta escuchando el puerto ', 3000);

 










