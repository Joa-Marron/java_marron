alert('¡Buenos días! \n Hoy vamos a ponernos a prueba. \n Vamos a comenzar conociéndonos. Mi nombre es Joana.');

const nombre = prompt('¿Cuál es tu nombre?');

let saludar = () => {
    alert("Hola " + nombre + ". Espero que tengas muchas ganas de aprender.")
}

saludar();

alert('Ahora, necesito saber a qué grado vas: ');

let grado = prompt('Ingresá A si asistís a primer ciclo, B si asistís a segundo ciclo o C si asistís 7° grado. \n Recordá que la letra debe ser MAYÚSCULA. ');

if (grado == 'A') {
    alert('¡Genial Los primeros grados son un mundo maravilloso en donde descubrimos todo el tiempo cosas nuevas.');
} else if (grado == 'B') {
    alert('¡Genial! El segundo ciclo no coloca a mitad del camino y es en donde nos vamos haciendo más independientes.');
} else if (grado == 'C') {
    alert('¡Genial! Somos los más grandes de la escuela, los que les enseñamos con el ejemplo a los más pequeños y nos estamos preparando para arrancar la secundaria.');
} else {
    alert('Estamos distraídos. No te preocupes, más tarde te vuelvo a preguntar.');
}

alert('En apenas cinco segundos vamos a comenzar con una preguntita para saber cómo estamos con los conocimientos.');

let cuentaRegresiva = 5
while (cuentaRegresiva < 6) {
    cuentaRegresiva--;
    alert(cuentaRegresiva);
    if (cuentaRegresiva == 0) {
        alert('¡Empecemos!');
        break;
    }
}

let divisor = prompt("¿Cuál es mi nombre? ");

switch (divisor) {

    case "Joana":
        alert("¡Perfecto! Tu atención es magnífica.");
        break;

    case "joana":
        alert("¡Perfecto! Tu atención es magnífica. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
        break;

    case "Jhoana":
        alert("Tu memoria es muy buena, pero mi nombre va sin H.");
        break;

    case "jhoana":
        alert("Tu memoria es muy buena, pero mi nombre va sin H. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
        break;

    case "Joanna":
        alert("Tu memoria es muy buena, pero mi nombre va con una sola N.");
        break;

    case "joanna":
        alert("Tu memoria es muy buena, pero mi nombre va con una sola N. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
        break;

    case "Jhoanna":
        alert("Tu memoria es muy buena, pero mi nombre va con una sola N y sin H");
        break;

    case "jhoanna":
        alert("Tu memoria es muy buena, pero mi nombre va con una sola N y sin H. Recordá que los sustantivos propios comienzan con mayúscula. ;)");
        break;

    default:
        alert("¿No te acordás de mi nombre? No te hagás problema. Me llamo Joana.");
        break;



        const felicitar = (nombre) => {
            console.log("¡Felicitaciones " + nombre + "!")
        }

        felicitar(nombre);
}