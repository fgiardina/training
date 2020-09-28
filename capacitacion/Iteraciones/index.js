// Iteraciones

// Tipo de dato llamado ARRAY
var lista_de_nombres = ["Mariano","Sofia","Andrea","Fernando","Mariano","Mariano","Sofia","Andrea","Mariano","bako","Mariano","Mariano","Andrea","Fernando","bako","Mariano","Mariano","Mariano","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako","Mariano","Sofia","Andrea","Fernando","bako"]


// Las listas / arrays / arreglos tienen indices que comienzan por cero
// console.log(lista_de_nombres[0])
// console.log(lista_de_nombres[1])

console.log(lista_de_nombres.length)
// Vamos a iterar : Ciclo FOR

var coincidencias = 0;
for(var i=0; i < lista_de_nombres.length; i++) {

    const nombre_a_buscar = "bako"

    if (lista_de_nombres[i] == nombre_a_buscar) {
        coincidencias++
    }
}

console.log(`La cantidad de coincidencias es ${coincidencias} corresponde al ${(lista_de_nombres.length * coincidencias) / 100} %`)


// for tiene 3 partes
// inicio del index
// condicional
// acumulador