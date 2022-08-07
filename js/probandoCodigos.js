/*--Ingreso de contraseña. Contraseño correcta/incorrecta.--*/

/*--Utilizando if--*/

// let savedPass = "1234"

// for (let i = 2; i >= 0; 1--) {
//     let inputPass = prompt('Ingresa tu contraseña');
//     if (inputPass == savedPass) {
//         alert('Bienvenido');
//         break;
//     } else if (i == 0) {
//         alert('Debido a los reiterados intentos fallidos de ingreso, tu cuenta fue bloqueada');
//     } else {
//         alert('Password incorrecto. Te quedan ' + i + 'intentos');
//     }
// }

/*--Juego de piedra, papel o tijeras--*/

/*Variables necesarias para el juego*/

// let playerName = prompt('Bienvenido, zoquete. \nAh, ¿no te llamás así?\nMildis.\nDecime cuál es tu nombre:');
// let playerScore = 0;
// let cpuScore = 0;
// let playerOption = '';
// let cpuOption = '';

// do {
//     playerOption = prompt(playerName + ', elegí una opción: \npiedra\npapel\ntijera\nESC para finalizar.');

//     /*Validación de la palabra ingresada*/

//     if (playerOption != 'piedra' && playerOption != 'papel' && playerOption != 'tijera' && playerOption != 'ESC') {
//         alert('Tocaste cualquier tecla...focus.');
//         continue;
//     }

    /*Esto ayuda a elegir una opción random*/

//     let randomNumber = Math.round(Math.random() * 2);

//     switch (randomNumber) {
//         case 0:
//             cpuOption = 'piedra';
//             break;

//         case 1:
//             cpuOption = 'papel';
//             break;

//         case 2:
//             cpuOption = 'tijera';
//             break;

//         default:
//             break;
//     }

//     if (cpuOption == playerOption) {
//         alert('Empate');
//     } else if ((cpuOption == 'piedra' && playerOption == 'tijera') || (cpuOption == 'papel' && playerOption == 'piedra') || (cpuOption == 'tijera' && playerOption == 'papel')) {
//         alert('Punto para CPU');
//         cpuScore++;
//     } else {
//         alert('Punto para ' + playerName);
//         playerScore++;
//     }

// } while (playerOption != 'ESC');

// alert('El puntaje final es\n' + playerScore + ' puntos para ' + playerName + '\n' + cpuScore + ' puntos para CPU. \nGracias por jugar')


// alert('¡Buenos días! \n Hoy vamos a ponernos a prueba. \n Comencemos conociéndonos. Mi nombre es Joana.');

// const saludar = () => {
//     let nombre = prompt('¿Cuál es tu nombre?');
//     alert("Hola " + nombre + ". Espero que tengas muchas ganas de aprender.")
// }

// saludar();

// alert('Ahora, necesito saber a qué grado vas: ');

// let grado = prompt('Ingresá A si asistís a 6° grado o B si asistís 7° grado. \n Recordá que la letra debe ser MAYÚSCULA. ');

// if (grado == 'A') {
//     alert('¡Genial! 6° grado es maravilloso. Estamos a un paso de la última etapa de la primaria.');
// } else if (grado == 'B') {
//     alert('¡Genial! 7° grado es la última etapa de la primaria.\nNos llenamos de conocimientos para empezar súper preparados la secundaria.');
// } else {
//     alert('Estamos distraídos. No te preocupes, más tarde te vuelvo a preguntar.');
// }

// alert('En apenas cinco segundos vamos a comenzar con una preguntita para saber cómo estamos con los conocimientos.');

// let cuentaRegresiva = 5
// while (cuentaRegresiva < 6) {
//     cuentaRegresiva--;
//     alert(cuentaRegresiva);
//     if (cuentaRegresiva == 0) {
//         alert('¡Empecemos!');
//         break;
//     }
// }

// let divisor = prompt("¿Cuál es mi nombre? ");

// switch (divisor) {

//     case "Joana":
//         alert("¡Perfecto! Tu atención es magnífica.");
//         break;

//     case "joana":
//         alert("¡Perfecto! Tu atención es magnífica. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
//         break;

//     case "Jhoana":
//         alert("Tu memoria es muy buena, pero mi nombre va sin H.");
//         break;

//     case "jhoana":
//         alert("Tu memoria es muy buena, pero mi nombre va sin H. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
//         break;

//     case "Joanna":
//         alert("Tu memoria es muy buena, pero mi nombre va con una sola N.");
//         break;

//     case "joanna":
//         alert("Tu memoria es muy buena, pero mi nombre va con una sola N. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
//         break;

//     case "Jhoanna":
//         alert("Tu memoria es muy buena, pero mi nombre va con una sola N y sin H");
//         break;

//     case "jhoanna":
//         alert("Tu memoria es muy buena, pero mi nombre va con una sola N y sin H. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
//         break;

//     default:
//         alert("¿No te acordás de mi nombre? No te hagás problema. Me llamo Joana.");
//         break;



//         const felicitar = (nombre) => {
//             console.log("¡Felicitaciones " + nombre + "!")
//         }

//         felicitar(nombre);
// }