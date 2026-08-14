// Clasificador de edad
/**
 *  "Bebé" si es menor de 2
    "Niño" si es menor de 12
    "Adolescente" si es menor de 18
    "Adulto" en cualquier otro caso
 */


// creacion de la funcion
function clasificarEdad(edad){
    if (edad < 3){
        console.log("Bebé");
    } else if (edad < 13){
        console.log("Niño");
    }else if(edad < 18){
        console.log("Adolescente");
    }else{
        console.log("Adulto");
    }
}

console.log("===============================================");
console.log("Bienvenido al programa clasificador de edad");
console.log("===============================================");
console.log(`Su edad pertenece a la categoria clasificarEdad()`);

clasificarEdad(18);
clasificarEdad(17);
clasificarEdad(12);
clasificarEdad(2);