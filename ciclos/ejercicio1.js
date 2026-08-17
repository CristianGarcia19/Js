// encontrar el numero mayor
const numeros = [20, 30, 7, 22, 65, 80, 81, 79];
let numeroMayor = numeros[0];


for(let i = 0; i < numeros.length; i++){ // recorre el array
    if(numeros[i] > numeroMayor){ // valida el valor en la posicion del array
        numeroMayor = numeros[i]; // asignamos el valor
    }
} 

// mostramos el numero mayor
console.log(`El numero mayor es: ${numeroMayor}`);
