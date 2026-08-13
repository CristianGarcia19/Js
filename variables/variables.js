/**
 *  var
 * las variables con var se pueden volver a declarar y modificar, actualmente no es recomendable usar "var"
 */

var saludar = "Hola mundo";
var saludar = "Hola mundo 2"; // Se vuelve a declarar el valor de la variable

console.log(saludar);

// let: Es preferible para la declaracion de variables. Tienen un alcance de bloque
// permiten modificarse pero no re declararse

let saludar1 = "Hola";
saludar1 = "Hola modificado"; // modificarse
console.log(saludar1);

/**
 *  let saludar = "dice Hola";
    let saludar = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared
 */


// ******************
//  const

// las variables const mantienen valores constantes, no se permiten modificar ni volver a re declararse

