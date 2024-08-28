// "use script"
// let edad = 18
// let plata = true
// let study = false 

// if (edad >= 18 && plata) {

//     //entro si se cumple 
// console.log("interesante papu")

// } else {
//     //entro no se cumple 
//     console.log ("pailas")
// }
// if (plata || study ) {
//       console.log("me sirve si tiene plata o futuro")

//     } else {
//         console.log("ni plata ni futuro, no va")
//     }
//     if (edad != 19){
//         console.log("si es diferenete ")
//     }
    
// let  estatura = null
// let plata = true 
//  console.log(estatura ?? plata ??  " 1.70cm")

//  //operadorternarion
//  console.log(si estatura es >= 1.70  ? "aguanta" : "chaparros no") 
 

// //bucles
// let estudiantes = 24

// while (estudiantes <= 24) {
//     estudiantes++
//     console.log("llamado a lista del alumno numero $(estudiantes )")
//}*/ 
// let estudiante = 24 

// let mercado = [
//     "manzanas ",
//     "bananos",
//     "peras",
//     "papa",
//     "sandia",
//     "papaya",
//     "piña",
// ] 
// mercados.forEach((mercado) => {
//     console.log(mercado)
// })

// let estudiantes = ["juancho","julio","mafe", "cam","luisi"]
// estudiantes.forEach((estudiante) => 
//     console.log(estudiante)
// )
// function clasificarNumero(numero) {
//     switch (numero) {
//       case 1:
//         console.log('El número es uno.');
//         break;
//       case 2:
//         console.log('El número es dos.');
//         break;
//       case 3:
//         console.log('El número es tres.');
//         break;
//       default:
//         console.log('Número no clasificado.');
//         break;
//     }
//   }
  
//   clasificarNumero(2);  // Imprime: "El número es dos."
//   clasificarNumero(5);  // Imprime: "Número no clasificado."
//   let dia = 'Lunes';

//   switch (dia) {
//     case 'Lunes':
//       console.log('Inicio de la semana.');
//       break;
//     case 'Miércoles':
//       console.log('Mitad de semana.');
//       break;
//     case 'Viernes':
//       console.log('¡Es casi fin de semana!');
//       break;
//     default:
//       console.log('Es un día desconocido.');
//   }
  
//   let calificacion = 85;
  
//   switch (true) {
//     case (calificacion < 60):
//       console.log('Insuficiente');
//     case (calificacion >= 60 && calificacion < 70):
//       console.log('Suficiente');
//     case (calificacion >= 70 && calificacion < 90):
//       console.log('Bien');
//     case (calificacion >= 90):
//       console.log('Excelente');
//     default:
//       console.log('Calificación desconocida');
//   }
  
//   // Definir una función para mostrar mensajes en función del valor ingresado
//   function mostrarMensaje(valor) {
//       if (valor === 1) {
//         alert('¡Exacto!');
//       } else if (valor === 2) {
//         alert('Muy grande');
//       } else {
//         alert('Desconozco estos valores');
//       }
//     }
    
//     // Llamar a la función con diferentes valores
//     mostrarMensaje(1);  // Muestra: ¡Exacto!
//     mostrarMensaje(2);  // Muestra: Muy grande
//     mostrarMensaje(3);  // Muestra: Desconozco estos valores
    
//     let diaStr = "3";  // El número del día en forma de cadena
//   let diaNum = 2;    // Número del día actual
  
//   switch (+diaStr) {
//     case diaNum + 1:  // Convertimos diaStr a número y lo comparamos con diaNum + 1
//       console.log("El día es uno más que el día actual.");
//       break;
  
//     case diaNum + 2:
//       console.log("El día es dos más que el día actual.");
//       break;
  
//     default:
//       console.log("El día no coincide.");
//   }
  
//   let puntuacion = 85;
  
//   switch (true) {
//     case (puntuacion >= 90):
//       alert('¡Excelente!');
//       break;
  
//     case (puntuacion >= 70):
//     case (puntuacion >= 60):
//       alert('Bien hecho');
//       alert('¡Sigue así!');
//       break;
  
//     default:
//       alert('Necesitas mejorar.');
//   }
  
//   let respuesta = prompt("¿Cuál es tu color favorito?");
  
//   switch (respuesta.toLowerCase()) {  // Convertir a minúsculas para hacer la comparación más flexible
//     case 'rojo':
//       alert('¡El rojo es un color vibrante!');
//       break;
  
//     case 'verde':
//       alert('¡El verde es un color refrescante!');
//       break;
  
//     case 'azul':
//       alert('¡El azul es un color calmante!');
//       break;
  
//     default:
//       alert('¡Interesante elección de color!');
//   }
  
//   let age = prompt("¿Cuál es tu edad?", 15);

// let welcome = (age = 15) ?
//   function() { alert("¡Hola!"); } :
//   function() { alert("¡Saludos!"); };

// welcome(); // ahora ok

// let sum = (a, b) => {  // la llave abre una función multilínea
//   let result = a + b;
//   return result; // si usamos llaves, entonces necesitamos un "return" explícito
// };

// alert( sum(3, 3) ); // 6

// consola.log(total);
// // las papu aventuras de los papus programadores en sala de programacion osea la papu cueva 
// constante rango = [...Array(10).keys()].map(x => x + 1).filter(x => x % 2 === 0);
// consola.log(rango); // [2, 4, 6, 8, 10]
// const assert = require('assert');

// describe('calcularAreadeuntriangulo', function() {
// it('debería devolver 20 para base 3 y altura 6', function() {
// afirmar.strictEqual(calcularAreatriangulo(3, 6, 9);
// });

// it('debería devolver un mensaje de error si la base es 0', function() {
// afirmar.strictEqual(calcularAreatriangulo(0, 5), "La base y la altura deben ser mayores que cero.");
// });
// });

// ///////////////////////////////////////////////// ////////////////////////////////////////////////// ////////////////////////////////////////// ////////////////////////////////////////////////// ////////////////////////////////////////////////// ////////////////////////////////////////>

// lo que se muestra del 4.0 e adelante hasta 5.1  es una muestra de acumulacion de informacion como si fuece un una cajita que puede guardar desde numeros hasta contraseñas e informacion de mas cosas como listas y demas en pdf como se muestra resumido a continuacion .
{ /* <object data="archivo.word" tipo="application/word" ancho="800" alto="500">
  Su navegador no soporta la visualización de objetos incrustados.
</objeto>
<object data="cancion.mp3" tipo=cancion/mp3" ancho="600" alto="400">
  Su navegador no soporta el vídeo incrustado. Aquí hay un enlace para <a href="video.mp4">descargar el vídeo</a>.
</objeto>
dejar usuario = {
  // ...
};

// primero, declara
función sayHi() {
  alerta("¡Hola!");
};

// entonces la agrega como un método
usuario.sayHi = sayHi;

usuario.sayHi(); // ¡Hola!
// salida
alerta(obj);
// utilizando un objeto como clave
otroObj[obj] = 123;
// `user` tiene una referencia al objeto
dejar usuario = {
  Nombre: "pablitoaliaspancho"
}
 */ }

////////////////////////////////////////////////// ////////////////////////////////////////////////// //////////////////////////////////////////>

// 5.1 Métodos y tipos primitivos


// sea numero = 123.456;
// let entero = numero.toFixed(2); // "123,456"
// let exponencial = numero.toExponential(3); // "1.23e+3"
// ```
// 5.2 Números

// sea num = 5.56789;
// consola.log(num.toFixed(2)); // "8.87"
// consola.log(Math.round(num)); // 9
// console.log(Math.random()); // número aleatorio entre 0 y 5
// ```

// 5.3 Cadenas o enlaces de entrada


// let saludo = "¡Hola, papuuus!";
// console.log(saludo.toLowerCase()); // "¡hola, papuuus!"
// console.log(saludo.indexOf("pauuus")); // 6
// console.log(saludo.replace("papuuus", "de JavaScript")); // "¡Hola,de JavaScript!"
// ```

// 5.4 Matrices yo le digo raizes

// let cosas para el gym = ["creatine", "straps", "proteina"];
//consola.log(gym.length); //3
// gym.push("Gh3"); // Añadir al final
// console.log(gym); // ["creatine", "straps", "proteina", "Gh3"]
// ```

// 5.5 Métodos de matrices

// let numeros = [1, 2, 3, 4];
// let dobles = numeros.map(n => n * 2); // [2, 4, 6, 8]
// let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
// let suma = numeros.reduce((acc, n) => acc + n, 0); // 10
// ```

// 5.6 Iterables

// deje que iterable = [20, 30, 60];
// para (deje que el valor del iterable) {
// consola.log(valor); // 20, luego 30, luego 60
// }
// ``

//5.6

// sea conjunto = new Set();
// conjunto.add(10);
// conjunto.add(20);
// conjunto.add(20); // Yo no lo descargo porque ya lo tengo (es decir , no se agrega porque ya existe)
// console.log(conjunto); // Conjunto { 10, 20 }
// ```

// 5.8 Mapa débil y conjunto débil


// let obj1 = { nombre: "pedritoaliaspancho" };
// deje que el conjuntoDebil = nuevo ConjuntoDebil(10);
// conjuntoDebil.add(obj10);
// obj10 = nulo; // El objeto puede ser recogido
// ```

// 5.9 Objeto.claves, valores, entradas

// let persona = { nombre: "La papu mafe", edad: 15 };
// console.log(Object.keys(persona)); // ["nombre", "edad"]
// console.log(Object.values(persona)); // ["La papu mafe", 15]
// console.log(Object.entries(persona)); // [["nombre", "La papu mafe"], ["edad", 15]]
// ```

// 5.10 Asignación Desestructurante

// let { nombre, edad } = { nombre: "Rondon", edad: 15 };
// console.log(nombre); // "Rondon"
// consola.log(edad); // 15
// ```

//5.11 Fecha y hora 
//let date = new Date(2024, 0, 27); // 27 Ago 2024

//date.setDate(1); // Fija '1' día del mes
//alert( date );

//date.setDate(0); // el día mínimo es 1, entonces asume el último día del mes anterior
//alert( date ); // 31 Dec 2023
//```
//este seria el codigo canonico
// sea ahora = nueva Fecha();
// console.log(ahora.toISOString()); // Fecha y hora en formato ISO
// console.log(ahora.getFullYear()); // Año actual
// ```

// 5.12 Métodos JSON, toJSON


// deja fecha = new Date();
// let jsonFecha = fecha.toJSON(); // Fecha en formato JSON
// console.log(jsonFecha); // Ejemplo: "2024-08-27T11:54:17.000Z"

// son ejemplos de cada uno aparte de los citados en java y los otros 

