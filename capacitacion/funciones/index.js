// Funciones
let nro1 = 5
let nro2 = 7
let nro3 = 7
let nro4 = 7
// const resultado = division(4,2)

// const resultado2 = suma(4,2)
const resultado3 = resta(22,4)
// const resultado4 = resta(nro1,nro2)
// const resultado5 = resta(nro3,nro4)

console.log(resultado3)




function suma(valor1, valor2)
{
    console.log(`voy a sumar ${valor1} y ${valor2}`)
    return valor1 + valor2
}

function resta(valor1, valor2)
{

    if (valor1 < valor2) {
        return 0
    }
        
    return valor1 - valor2
}

function multiplicacion(valor1, valor2)
{
    console.log(`voy a multiplicar ${valor1} y ${valor2}`)
    return valor1 * valor2
}

function division(valor1, valor2)
{
    console.log(`voy a dividir ${valor1} y ${valor2}`)
    return valor1 / valor2
}