// // Ejemplo depromesa que se ejecuta a los 10 segundos.
// const promesa = new Promise((resolve, reject) => {
//          setTimeout(resolve, 10000)
//      })
//      .then(() => console.log("Se resolvió la promesa correctamente!")) // Se ejecuta solo cuando la promesa se resuelve correctamente
//      .catch() // se ejecuta solo si la promesa se resuelve erroneamente
//      .finally(() => console.log("gracias por utilizar nuestros servicios")) // Se ejecuta luego de que la promesa se resuelva, independientemente del resultado 

// const caraCruz = new Promise((resolve, reject) => {
//         moneda = Math.floor(Math.random() * 2);
//         console.log(moneda)
//         moneda == 0 ? resolve("cara") : reject("cruz")
//     })
//     .then((msg) => console.log(msg))
//     .then(() => console.log("Gracias por jugar!"))
//     .then(() => console.log("Que tenga buen día!"))
//     .catch((msg) => console.log(msg))
//     .finally(() => console.log("Gracias por jugar!"))


// fetch("https://ghibliapi.herokuapp.com/people")
//     .then(response => {
//         console.log(response);
//     })


// https://docs.google.com/document/d/1HDvJOhwdVzb6zRbmbWr-gLtNHfto_h2Bcvq2QonupEA/edit

/* 1) Crear una promesa que después de 5 segundos, muestre un mensaje.
2) Crear una promesa que después de 1 segundo muestre un mensaje, y al resolverse, que en 2 segundos muestre otro mensaje y que finalmente a los 4 segundos muestre un ultimo mensaje.
3) Para reducir costos, en un boliche en lugar de patovas, tienen ahora un robot que lee el DNI. Si la persona es mayor de 18, puede pasar, sino no.
4) a) Crear una promesa que traiga información de un servidor y la muestre en el HTML. 
b) Agregarle un manejador de error que muestre el codigo de error. (Sugerencia: Para probar el manejador de errores, pueden simular, por ejemplo poniendo una dirección que no existe para forzar un 404 y ver si funciona). */

// 1) Crear una promesa que después de 5 segundos, muestre un mensaje.

const promesa = new Promise((resolve, reject) => {
        setTimeout(resolve, 5000)
    })
    .then(() => console.log("Se resolvió la promesa en 5 segundos"))
    .then(() => console.log("Gracias por su espera"))

// 2) Crear una promesa que después de 1 segundo muestre un mensaje, y al resolverse, que en 2 segundos muestre otro mensaje y que finalmente a los 4 segundos muestre un ultimo mensaje.