// calculadora de descuento para tienda

// funcion
function calcularDescuento(totalCompra){
    // variables
    const descuentoVeintePorciento = totalCompra * 0.2; // calcular el descuento al total
    const descuentoDiezPorciento = totalCompra * 0.1;
    const descuentoCincoPorciento = totalCompra * 0.05; 
    let precioFinal;

    // validar
    if(totalCompra > 100000){
        precioFinal = totalCompra - descuentoVeintePorciento;
        console.log("Ganaste un 20% de descuento!");
    }else if(totalCompra > 50000){
        precioFinal = totalCompra - descuentoDiezPorciento;
        console.log("Ganaste un 10% de descuento!");
    }else if(totalCompra > 20000){
        precioFinal = totalCompra - descuentoCincoPorciento;
        console.log("Ganaste un 5% de descuento!");
    }else{
        precioFinal = totalCompra;
        console.log("Tu compra no tuvo descuento");
    }

    console.log(`Total: $${precioFinal}`);

}

calcularDescuento(230000); // 20%
calcularDescuento(70000); // 10%
calcularDescuento(15000); // nada
calcularDescuento(30000); // 5%

