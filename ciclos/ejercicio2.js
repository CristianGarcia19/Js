// encontrar el numero menor

const numeros = [10, 22, 35, 242, 4, 7, 2];
let numeroMenor = numeros[0];

// recorremos el array
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < numeroMenor){
        numeroMenor = numeros[i];
    }
}
console.log(`El numero menor es: ${numeroMenor}`);