var persona = "Persona";
var animal = "Perro ";
var sonido = "Guau";
var accion = "Correr";

animalHabla = animal.concat(sonido, true, 23, accion, " ", persona, "por tu vida");
document.getElementById("demo2").innerHTML = animalHabla;

const forma = "con este simbolo ${}";
const conclusion = 'La forma de concatenar ${forma}, para todo.';

//document.getElementById("demo2").innerHTML = conclusion;


// DEMO 3

pelicula = "Alien";
director = "Ridley Scott";
favorita = `Mi película preferida es ${pelicula} de ${director}.`;

document.getElementById("demo2").innerHTML = favorita;

//alert("Hello " + favorita + ", nice to see you!");

document.getElementById("demo3").innerHTML =
    typeof 0 + "<br>" +
    typeof NaN + "<br>" +
    typeof 232 + "<br>";

let value = 8;
console.log(`Number ${value} is the value.`);
document.getElementById("demo4").innerHTML = value;


let nombre = "Juan";
let apellido = "Perez";
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto); // Juan Perez


var cadena1 = "uno ";
var cadena2 = "dos";

var resultado = cadena1.concat(cadena2, " tres", " cuatro");

//alert(resultado);


// Array (arreglos)

const numerosPrimos = [2, 3, 5, 7, 11, 13, 17];
alert(numerosPrimos);
document.getElementById("demo5").innerHTML = numerosPrimos[3];

document.getElementById("demo6").innerHTML = numerosPrimos.length; //Cantidad de elementos de un array (arreglos)


var misMaterias = [];
const miVideo = new Array("Mario", "Zelda");
profesiones = ["Ingenieria", "Medicina"];
document.getElementById("demo7").innerHTML = profesiones;
document.getElementById("demo8").innerHTML = profesiones.pop(); // Elimina el ultimo array


// Let

let pc1 = { nombre: "Nombre", marca: "Lenovo" }
document.getElementById("demo9").innerHTML = pc1.marca;
fraseSalida = `Él ${pc1["nombre"]} tiene un PC marca ${pc1["marca"]}`;
document.getElementById("demo10").innerHTML = fraseSalida;


// Objetos con metodos
var carro = {
    tipo: "Ferrari", modelo: "2020", color: "rojo",
    //METODO
    nombreCompleto: function () { //Metodos
        return this.tipo = " " + this.modelo;
    },
    nombreColor: function () {
        return carro.tipo = " - " + this.color;
    }
};

document.getElementById("demo11").innerHTML = "El carro es " + carro.tipo;
document.getElementById("demo12").innerHTML = "El carro es " + carro["color"];

document.getElementById("demo13").innerHTML = carro.nombreCompleto(); //Llamando metodo
document.getElementById("demo14").innerHTML = carro.nombreColor(); //Llamando metodo


// Funciones
//let numero1 = "Pedro";
function resultadoSuma(numero1, numero2) {
    let suma = numero1 + numero2;
    return suma
};
document.getElementById("demo15").innerHTML = resultadoSuma(7, 2);
//document.getElementById("demo16").innerHTML = numero1;


// Segunda forma de crear función
let hacerResta = function (numero1, numero2) {
    let resta = numero1 + numero2;
    return resta
};
document.getElementById("demo15").innerHTML = hacerResta(7, 2);


// Tercera forma de crear función por expresión
HacerMultiplicacion = (numero1, numero2) => {
    let multiplicar = numero1 * numero2;
    return multiplicar;
};
document.getElementById("demo16").innerHTML = HacerMultiplicacion(7, 2);


// Funciones anonimas
/*
function () {
};

() => {
};
*/


// Eventos

function TimeDate() {
    document.getElementById("date").innerHTML = Date();
}

function SeeMore() {
    document.getElementById("see-more").hide();
}

// Eventos Decisión logica
function CompararNumero(a, b) {
    if (a > b) {
        document.getElementById("comparar").innerHTML = "A es mayor que B";
    } else {
        if (a < b) {
            document.getElementById("comparar").innerHTML = `${a} es menor que ${b}`;
        } else {
            document.getElementById("comparar").innerHTML = `${a} es igual que ${b}`;
        }
    }
};


// Switch Case
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Domingo"
        break;
    case 1:
        day = "lunes"
        break;
    case 2:
        day = "martes"
        break;
    case 3:
        day = "miercoles"
        break;
    case 4:
        day = "jueves"
        break;
    case 5:
        day = "viernes"
        break;
    case 6:
        day = "sabado"
        break;

    default:
        break;
}

document.getElementById("day").innerHTML = "Hoy es " . day;


// While

let numero = 1;
let cajaNumero = [];

while (numero <= 100) {
    cajaNumero.push(numero);
    numero = numero +10; // o numero++
};

console.log(cajaNumero)
document.getElementById("demo18").innerHTML = cajaNumero;


let contador = 1;
do {
    //document.write("Hola");
    contador++
} while (contador < 5) {

};

// For
let arregloPara = [];

for (let i = 0; i <= 20; i++) {
    arregloPara.push(i);
    if (i == 16) {
        break;
    }
};

document.getElementById("demo19").innerHTML = arregloPara;