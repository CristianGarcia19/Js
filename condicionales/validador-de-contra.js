// Programa para validar una contraseña que tenga al menos 8 caracteres, 1 numero y 1 mayuscula

// Declaracion de la funcion
function validarPassword(password){
    let tieneLongitud = password.length >= 8; //verificar la longitud de la pass
    let tieneNumero = /[0-9]/.test(password); // verificar numeros
    let tieneMayuscula = /[A-Z]/.test(password); // verificar mayusculas

    // validar
    if(!tieneLongitud){
        console.log("Muy corta");
        
    }else if(!tieneNumero){
        console.log("No tiene numero");
        
    }else if(!tieneMayuscula){
        console.log("No tiene mayuscula");
        
    }else{
        console.log("Contraseña valida");
    }
}

validarPassword("dasds6aasdGa");