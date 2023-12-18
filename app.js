const readlineSync = require('readline-sync');

const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
return readlineSync.question('Ingresa un número: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');
    while (numeroAdivinado != numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();

/* Otra forma de hacerlo pero con Chance:
const Chance = require('chance');

let readlineSync = require('readline-sync');

const chance = new Chance();

const numero = chance.d100();

let user_num = readlineSync.questionInt("Diga un número del 1 al 100: ");

while (user_num != numero){
    if (user_num > numero){
        user_num = readlineSync.questionInt("El numero que ingresaste es mayor, intentalo de nuevo: ");
    }
    else{
        user_num = readlineSync.questionInt("El numero que ingresaste es menor, intentalo de nuevo: ");
    }
}

console.log("Felicidades! adivinaste el numero.");
*/