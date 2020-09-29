// Iteraciones 2 for anidados

// Tipo de dato llamado ARRAY
var lista_de_nombres1 = ["Mariano","arr1_1","arr1_2"]
var lista_de_nombres2 = ["arr2_0","arr2_1","Mariano","Mariano"]


// Las listas / arrays / arreglos tienen indices que comienzan por cero
// console.log(lista_de_nombres[0])
// console.log(lista_de_nombres[1])

// console.log(lista_de_nombres.length)
// Vamos a iterar : Ciclo FOR

var coincidencias = 0;
for(var i=0; i < lista_de_nombres1.length; i++) {
    console.log(lista_de_nombres1[i])

    for(var x=0; x < lista_de_nombres2.length; x++) {
        console.log(' - ' + lista_de_nombres2[x])

        if (lista_de_nombres1[i] == lista_de_nombres2[x]) {
            console.log(lista_de_nombres1[i] , i, x)
        }

    }
    
}
