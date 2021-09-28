import {leerTeclado} from './util/entrada_teclado'
console.log(`Hola, Bienvenido`)
//creamos la variable función main que llamamos main
let main = async () => {
let edad: number
const valor = await leerTeclado(`¿Qué edad tienes?`)
edad = parseInt (valor)
if (edad < 18) 
    {
    console.log(`Eres menor de edad`)   
}else {
    console.log(`Eres mayor de edad`)
}
}
//invocamos a la función
main();