// SUPER GAME: Adivina el nro

// Llamo a la libreria de node para que los jugadores puedan ingresar texto por pantalla
const readline = require("readline");

// creo el objeto rl de tipo in out segun la documentacion de la libreria de node
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Declaro dos variables
// 1. `numero` donde voy a guardar el numero a adivinar
// 2. `intentos`: variable donde voy a ir acumulando la cantidad de intentos.
var numero;
var intentos = 1;
const noob = 10;

// Hago la pregunta inicial.
rl.question("Ingrese un Número entre 1 y 50 para adivinar? ", (answer) => {
  // guardo lo que el jugador1 ingreso en la variable numero.
  numero = answer;

  // borro la pantalla para que el jugador2 no vea el numero que ingresamos
  process.stdout.write("\u001b[H\u001b[2J\u001b[3J");

  // Cambio el texto de prompt para que el jugador2 lea y comience a adivinar el nrol.
  rl.setPrompt("Adivina el número, que nro es? ");
  // vuelvo a dejar el prompt activo
  rl.prompt();

  // rl.on line se queda escuchando los diferentes ingresos por teclado del jugador2
  rl.on("line", (input) => {
    // si la respuesta es correcta le digo a rf que se cierre porque no hay mas nada que preguntar
    if (input === numero) {
      rl.close();
    } else {
      // Si la respuesta no es correcta le doy una ayuda preguntado si lo que ingreso es mayor o menor al valor a buscar
      var ayuda = "";
      if (numero > input) {
        ayuda = "mayor";
      } else {
        ayuda = "menor";
      }

      var mensaje = `Tu respuesta ${input} es incorrecta. el número es ${ayuda}, intenta nuevamente: `;
      if (intentos == noob) {
        mensaje = mensaje + " sos un principiante  ";
      }

      // Muestro la ayuda en pantalla y lo invito a volver a responder
      rl.setPrompt(mensaje);
      // vuelvo a dejar el prompt activo para que el jugador2 ingrese su respuesta
      rl.prompt();

      // Incremento el valor de la variable intentos en 1 para ir sumando intentos.
      intentos = intentos + 1;
    }
  });
});

rl.on("close", () => {
  // Si rl fue cerrado quiere decir que la respuesta fue correcta y se lo informo al jugador2 junto a la cantidad de intentos que realizo
  console.log(
    "\nCorrecto !!!",
    `el nro es ${numero}. Lo resolviste en ${intentos} intento/s.`
  );
});

// Conceptos de programacion que vimos en este juego

// 1. Variables
// 2. Condicionales
// extras: Sso de librerias adicionales. https://nodejs.org/api/readline.html


// Pendiente de enseńar
// 3. Iteraciones
// 4. Funciones