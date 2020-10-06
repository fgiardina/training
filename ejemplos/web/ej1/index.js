// Declaro una variable de tipo Array para ir acumulando los nombres ingresados
let lista_de_nombres = []



// Hago referencia al boton
const btn_enviar = document.getElementById("btn_enviar")
  // Hago referencia al input text
const text_name = document.getElementById("name")


text_name.addEventListener("input", () => {
  if (text_name.value.length < 3) {
    btn_enviar.setAttribute("disabled", true)  
  }

  if (text_name.value.length > 2) {
    btn_enviar.removeAttribute("disabled")
  }

})

// Metodo para escuchar cuando el usuario le da click al boton
btn_enviar.addEventListener("click", () => {

  // Por cada nombre ingresado proceso los resultados para mostrarlos en pantalla
  procesarNombre(text_name.value)

  // Limpio el contenido del input text para dejarlo vacio
  text_name.value = ""
  btn_enviar.setAttribute("disabled", true)  
});



// Funcion que procesa los datos
function procesarNombre(nombre) {

  nombre = nombre.toLowerCase()
  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)


  if (!lista_de_nombres.includes(nombre)) { // includes es una funcion que viene en javascript para saber si un valor esta ya incluido dentro de un array
    lista_de_nombres.push(nombre) // push es una funcion que viene en javascript para agregar un valor al array
  }

  // Ordeno los nombres por orden alfabético
  lista_de_nombres.sort() // Sort es una funcion que viene en javascript que ordena el contenido del array

  // Hago referencia al DIV donde voy a mostrar los resultados para agregarles
  // por javascript la lista de nombres
  const div_resultados = document.getElementById("resultados")

  // Limpio el contenido html para volver a cargarlo con los nuevos resultados
  div_resultados.innerHTML = ''


  // Recorro todos los nombres ordenados y los agrego al div 
  for (let i = 0; i < lista_de_nombres.length; i++) {
      const name = lista_de_nombres[i];
      div_resultados.innerHTML += `<p>${name}</p>`;
  }


  console.log(lista_de_nombres);
}
