/*
//Ejercicio 1
var aspecto = prompt("¿Eres bellísimo? (si/no)");

if (aspecto === "si") {
    alert("Ciertamente")
} else {
    alert("No te creo")
};
*/
/*
// Ejercicio 2
var número = prompt("Ingrese un número:");

if (número % 2 === 0) {
    alert(`${número} es divisible entre 2`);
} else {
    alert(`${número} no es divisible entre 2`);
}
*/

//Ejercicio 3
/*
var divisible = prompt("Ingrese un número");

if (divisible % 2 === 0) {
    alert(`${divisible} es un número par`);
} else {
    alert(`${divisible} no es un número par`);
}
*/

// Ejercicio 4
/*
let cliente = prompt("Ingresa tu número de cliente");

if (cliente == "1000") {
    alert("Ganaste un premio");
} else {
    alert("Lo sentimos, sigue participando");
}
*/
/*
//Ejercicio 5
let númeroUno = prompt("Ingresa primer número");
let númeroDos = prompt("Ingresa segundo número");

let valorUno = parseInt(númeroUno);
let valorDos = parseInt(númeroDos);

if (valorUno < valorDos) {
    alert("El primer número es menor");
} else if (valorUno > valorDos) {
    alert("El segundo número es menor");
} else {
    alert("Por favor, ambos números no deben ser iguales.")
}
*/

/*
//Ejercicio 6
let valorUno = parseInt(prompt("Ingresa primer número"));
let valorDos = parseInt(prompt("Ingresa segundo número"));
let valorTres = parseInt(prompt("Ingresa tercer número"));
let mayor;

if (valorUno >= valorDos && valorUno >= valorTres) {
    if (valorUno === valorDos && valorUno === valorTres) {
        mayor = `Los tres números son iguales y son los mayores: ${valorUno}`;
    } else if (valorUno === valorDos) {
        mayor = `El ${valorUno} y el ${valorDos} son iguales y son los mayores`;
    } else if (valorUno === valorTres) {
        mayor = `El ${valorUno} y el ${valorTres} son iguales y son los mayores`;
    } else {
        mayor = `El ${valorUno} es el mayor`;
    }
} else if (valorDos >= valorUno && valorDos >= valorTres) {
    if (valorDos === valorTres) {
        mayor = `El ${valorDos} y el ${valorTres} son iguales y son los mayores`;
    } else {
        mayor = `El ${valorDos} es el mayor`;
    }
} else if (valorTres >= valorUno && valorTres >= valorDos) {
    mayor = `El ${valorTres} es el mayor`;
}

alert(`${mayor}`);
*/
/*
// Ejercicio 7
let dia = prompt("Ingresa el día de la semana en el que estás");

if (dia == "lunes") {
    alert("Hoy lunes hay que ir a trabajar")
} else if (dia == "viernes") {
    alert("Hoy viernes toca descansar")
} else if (dia == "sábado" || dia == "domingo") {
    alert("Hoy es fin de semana")
} else {
    alert("Hoy es un día normal")
}
*/
/*
// Ejercicio 8
let calificacion = parseInt(prompt("Ingresa un número entre el 1 y el 10"))

if (calificacion >= 1 && calificacion <= 10) {
    if (calificacion < 6)
        alert("Reprobado");
    else if (calificacion >= 6 && calificacion <= 8)
        alert("Regular");
    else if (calificacion === 9)
        alert("Bien");
    else
        alert("Excelente");
} else {
    alert("Error, número no se encuentra dentro del rango.")
}
*/
/*
// Ejercicio 9
let helado = prompt("Confirma si deseas un topping (si/no)");
let costoHelado;

if (helado === "si") {
    let sabor = prompt("¿Qué tipo de topping deseas? (oreo, kitkat, brownie)")
    if (sabor === "oreo") {
        alert("El costo de tu helado es 60 pesos");
    } else if (sabor === "kitkat") {
        alert("El costo de tu helado es 65 pesos");
    } else if (sabor === "brownie") {
        alert("El costo de tu helado es 70 pesos");
    } else {
        alert("No tenemos ese topping, lo siento")
        alert("El costo del helado sin topping es de 50 pesos")
    }

} else {
    alert("El helado cuesta 50 pesos");
}
*/
/*
//Ejercicio 10
let preguntaInicial = prompt(`¿En qué programa estás interesado(course/carrera/master)?`);

if (preguntaInicial == "course") {
    let beca = prompt(`¿Cuéntas con alguna beca? (facebook/google/jesua)?`);
    if (beca == "facebook") {
        let precio = parseInt(4999 * 0.8 * 2);
        alert(`El costo de tu programa es: $${precio}`);

    } else if (beca == "google") {
        let precio = parseInt(4999 * 0.85 * 2);
        alert(`El costo de tu programa es: $${precio}`);

    } else if (beca == "jesua") {
        let precio = parseInt(4999 * 0.50 * 2);
        alert(`El costo de tu programa es: $${precio}`);
    }
} else if (preguntaInicial == "carrera") {
    let beca = prompt(`¿Cuéntas con alguna beca? (facebook/google/jesua)?`);
    if (beca == "facebook") {
        let precio = parseInt(3999 * 0.8 * 6);
        alert(`El costo de tu programa es: $${precio}`);

    } else if (beca == "google") {
        let precio = parseInt(3999 * 0.85 * 6);
        alert(`El costo de tu programa es: $${precio}`);

    } else if (beca == "jesua") {
        let precio = parseInt(3999 * 0.50 * 6);
        alert(`El costo de tu programa es: $${precio}`);
    }
} else if (preguntaInicial == "master") {
    let beca = prompt(`¿Cuéntas con alguna beca? (facebook/google/jesua)?`);
    if (beca == "facebook") {
        let precio = parseInt(2999 * 0.8 * 12);
        alert(`El costo de tu programa es: $${precio}`);

    } else if (beca == "google") {
        let precio = parseInt(2999 * 0.85 * 12);
        alert(`El costo de tu programa es: $${precio}`);

    } else if (beca == "jesua") {
        let precio = parseInt(2999 * 0.50 * 12);
        alert(`El costo de tu programa es: $${precio}`);
    }
} else {
    alert(`Programa inválido.`)
}
*/
/*  
//Ejercicio 11
let tipoVehículo = prompt("¿Qué tipo de vehículo utilizaste (coche/moto/autobus)? ")
let precioXkM

if (tipoVehículo == "coche") {
    let litrosConsumidos = parseInt(prompt("¿Cuántos litros consumiste?"))
    if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
        let factura = 0.20 * litrosConsumidos + 5
        alert(`Tu cantidad a pagar es $${factura} pesos.`)
    } else if (litrosConsumidos > 100) {
        let factura = 0.20 * litrosConsumidos + 10
        alert(`Tu cantidad a pagar es $${factura} pesos.`)
    } else {
        alert(`Consumo no válido`)
    }

} else if (tipoVehículo == "moto") {
    let litrosConsumidos = parseInt(prompt("¿Cuántos litros consumiste?"))
    if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
        let factura = 0.10 * litrosConsumidos + 5
        alert(`Tu cantidad a pagar es $${factura} pesos.`)
    } else if (litrosConsumidos > 100) {
        let factura = 0.10 * litrosConsumidos + 10
        alert(`Tu cantidad a pagar es $${factura} pesos.`)
    } else {
        alert(`Consumo no válido`)
    }
} else if (tipoVehículo == "autobus") {
    let litrosConsumidos = parseInt(prompt("¿Cuántos litros consumiste?"))
    if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
        let factura = 0.5 * litrosConsumidos + 5
        alert(`Tu cantidad a pagar es $${factura} pesos.`)
    } else if (litrosConsumidos > 100) {
        let factura = 0.5 * litrosConsumidos + 10
        alert(`Tu cantidad a pagar es $${factura} pesos.`)
    } else {
        alert(`Consumo no válido`)
    }

} else {
    alert("Tipo de vehículo no válido")
}
*/
