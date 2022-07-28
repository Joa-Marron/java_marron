for (let a = 1; a < 11; a++) {
    console.log("el valor de la variable a es: " + a);
}

for (let b = 1; b < 2; b++) {
    console.log("el valor de la variable b es: " + b * 2);
}

for (let i = 1; i < 11; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

// //Estructura Switch con prompt.

let divisor = prompt("Escriba un divisor del número 10: ");

switch (divisor) {
    case "uno":
        alert("¡Perfecto! Uno es divisor de 10");
        break;
    case "1":
        alert("¡Perfecto! 1 es divisor de 10");
        break;
    case "dos":
        alert("¡Perfecto! Dos es divisor de 10");
        break;
    case "2":
        alert("¡Perfecto! 2 es divisor de 10");
        break;
    case "cinco":
        alert("¡Perfecto! Cinco es divisor de 10");
        break;
    case "5":
        alert("¡Perfecto! 5 es divisor de 10");
        break;
    case "diez":
        alert("¡Perfecto! Diez es divisor de 10");
        break;
    case "10":
        alert("¡Perfecto! 10 es divisor de 10");
        break;

    default:
        alert("Ese número no es divisor de 10. Volvamos a intentarlo.");
        break;
}