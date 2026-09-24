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

 




// EJERCICIO DE CREACION DE OBJETOS PARA NODE.JS
// EJS es el modulo = Embedded javascript temples, partial

const macbook = {
    marca: "Apple",
    modelo: "MACBOOK PRO",
    procesador:"M4 pro",
    ram: "24GB",
    almacenamiento:"1TB SSD",
  
    mostrarInformacion: function() {
        console.log("\n INFORMACION ACERCA DE MACBOOK")

        console.log("marca:", this.marca)
        console.log("modelo:", this.modelo)
        console.log("procesador:", this.procesador)
        console.log("ram:", this.ram)
        console.log("almacenamiento:", this.almacenamiento)
    }
}
macbook.mostrarInformacion()


// Crear un objeto automovil con:• marca• modelo• año• color• motor
// • kilometraje Reto:Crear dos métodos: encender() → mostrar 
// "El automóvil está encendido".mostrarInformacion() → mostrar sus características.


const automovil = {
    marca: "toyota",
    modelo: "corolla",
    ano: "2024",
    color: "Azul",
    motor: "2.0L",
    kilometraje:"15000",


encender: function(){
    console.log("\n el automovil esta encendido")
},


mostrarInformacion: function() {
        console.log("\n*** INFORMACION DEL AUTOMOVIL ***");

        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Ano:", this.ano);
         console.log("color:", this.color);
          console.log("motor:", this.motor);
          console.log("kilometraje:", this.kilometraje, "km");

    }
}

// EJECUTAR LOS METODOS

automovil.encender();
automovil.mostrarInformacion();


// Crear un objeto llamado celular con características como:• marca • modelo • color
//• almacenamiento • memoriaRAM • precio • disponible.
//  Reto: Crear un método mostrarInformacion () que imprima todas las características en consola.

const celular = {
   marca: "Samsung",
   modelo: "Galaxy S26 Ultra",
   color: "White Silver Shadow",
   almacenamiento: "1 TB",
   memoriaRAM: "16 GB",
   precio: "$1,300 USD",
   disponible: true,

    mostrarInformacion: function() {
        console.log("\n***INFORMACION ACERCA DEL CELULAR***")

        console.log("marca:", this.marca);
        console.log("modelo:", this.modelo);
        console.log("color:", this.color);
        console.log("almacenamiento:", this.almacenamiento);
        console.log("memoriaRAM:", this.memoriaRAM);
        console.log("precio:", this.precio);
        console.log("disponible:", this.disponible);
}
}

// se muetran las caracteristicas de el celular.
celular.mostrarInformacion()


// Crear un objeto estudiante con: • nombre • edad • programa • ficha • nota1 • nota2 • nota3
// Reto: Crear un método calcularPromedio() que calcule las tres notas y muestre el resultado

const estudiante = {
    nombre: "Luis Carlos Quintero Cardona",
    edad: "31",
    programa: "Analisis y Desarrollo de Software",
    ficha: "3186687",
    nota1: 4.5,
    nota2: 4.0,
    nota3: 4.8,


    mostrarInformacion: function() {
        console.log("\n*** INFORMACION Y NOTAS DEL ESTUDIANTE")

        console.log("nombre:", this.nombre);
        console.log("edad:", this.edad);
        console.log("programa:", this.programa);
        console.log("ficha:", this.ficha);
        console.log("nota1:", this.nota1);
        console.log("nota2:", this.nota2);
        console.log("nota3:", this.nota3);
    },

       calcularPromedio: function() {
        const promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
        console.log("promedio:", promedio.toFixed(2));
        return promedio;
    }
} 

    // SE MUETRA LA INFORMACION Y CALCULA EL PROMEDIO DEL ESTUDIAMTE.

    estudiante.mostrarInformacion()
    estudiante.calcularPromedio()


// Crear un objeto cuenta con: • titular • numeroCuenta • saldo • tipoCuenta
// Reto: Crear tres métodos: depositar() retirar() mostrarSaldo()
//Resultado: Titular: Juan Saldo inicial: $500.000 Depósito: $200.000 Nuevo saldo: $700.000 Retiro: $100.000 Nuevo saldo: $600.000.

const cuenta = {
    titular: "Juan",
    numeroCuenta: "123456789",
    saldo: 500000,
    tipoCuenta: "cuenta de ahorros",
    

    // A CONTINUACION SE CREAN LOS TRES METODOS, MOSTRAR SALDO, DEPOSITO Y RETIRAR.

mostrarSaldo: function() {
     console.log("\n*** CUENTA DE AHORROS DE JUAN ***")
    console.log("Titular:", this.titular);
    console.log("Saldo actual: $" + this.saldo);
},

depositar: function(monto) {
        this.saldo = this.saldo + monto;
        console.log("Depósito: $" + monto);
        console.log("Nuevo saldo: $" + this.saldo);
    },

    retirar: function(monto) {
        if (monto > this.saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        this.saldo = this.saldo - monto;
        console.log("Retiro: $" + monto);
        console.log("Nuevo saldo: $" + this.saldo);
    }

}

cuenta.mostrarSaldo()
cuenta.depositar(200000)
cuenta.retirar(100000)


//5. Creear un objeto de su propia elección: una consola de videojuegos, una mascota, unapelícula, una computadora, una bicicleta, etc.
//Con la condición que tenga mínimo 5 propiedades y 2 métodos, y que toda la informaciónsea mostrada mediante console.log() en Node.js

const camion = {
    placa: "muv542",
    tipo: "camion mediano",
    capacidadToneladas: 5,
    kilometraje: 42000,
    disponible: true,

    mostrarInformacion: function() {
        console.log("\n*** INFORMACION DEL VEHICULO - MUDANZAS GL***")
        console.log("placa:", this.placa);
        console.log("tipo:", this.tipo);
        console.log("capacidadToneladas:", this.capacidadToneladas);
        console.log("kilometraje:", this.kilometraje);
        console.log("disponible:", this.disponible);
    },

    iniciarViaje: function(origen , destino) {
        if (!this.disponible){
            console.log("El camion" , this.placa, "no esta disponible en este momento");
            return;
        }

        console.log("\n*** INICIANDO VIAJE DE", origen, "a", destino, "con el camion", this.placa);
        this.disponible = false;
        console.log("Estado Actualizado. disponible:", this.disponible);
    }
}

camion.mostrarInformacion()
camion.iniciarViaje("pereira", "bogota")


const hermana = {
    nombre: "Yuliana",
    apellido:"Quintero",
    edad: "24",
    genio: "Del carajo",
    trabajo: "En la vagancia",
    servicial: "Cuando le da la gana",

    mostrarInformacion: function() {
        console.log("***\n SE MUETRA LA INFORMACION DE LA BRUJA ESA"),
        console.log("nombre:" , this.nombre),
        console.log("apellido:" , this.apellido),
        console.log("edad:" , this.edad),
        console.log("genio:" , this.genio),
        console.log("trabajo:" , this.trabajo),
        console.log("servicial:" , this.servicial)
    },

    DiaDeBano: function() {
        const hoy = new Date();
        const dia = hoy.getDay();

        if (dia === 6) {
            console.log("\n¡Hoy es sábado! " + this.nombre + " se está bañando ahora mismo.");
        } else {
            console.log("\nHoy no es sábado, así que " + this.nombre + " sigue demasiado apestosa.");
        }
    }
}


hermana.mostrarInformacion()
hermana.DiaDeBano()







