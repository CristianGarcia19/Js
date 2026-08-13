// Adivinar si un numero es par o impar
let numero = 5;

// creacion de la funcion esPar, le pasamos un parametro que es la variable
function esPar (numero){
    // definimos la condicion
    if(numero % 2 === 0){
        console.log(`El numero ${numero} es par`);
    } else{
        console.log(`El numero ${numero} es impar`);
    }
}

// imprimimos la funcion
esPar(numero);