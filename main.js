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
    var txt = document.getElementById("text-see-more");
    var btn = document.getElementById("btn-see-more"); 
    // etiqueta selector: document.getElementsByTagName("p"); | selector clase: document.getElementsByClassName("intro"); | document.querySelectorAll("p.intro");
    // agregar class a elemento: element.classList.add("mystyle"); | remover: element.classList.remove("mystyle");
    if (txt.style.display === "none") {
      txt.style.display = "block";
      btn.innerText = "Hide";
    } else {
      txt.style.display = "none";
      btn.innerText = "See more";
    }
  };


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
        day = "Invalid day";
        break;
}

document.getElementById("day").innerHTML = "Hoy es " + day;


// While

let numero = 1;
let cajaNumero = [];

while (numero <= 100) {
    cajaNumero.push(numero);
    numero = numero + 10; // o numero++
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
    if (i == 16) {
        //break;
        continue;
    }
    arregloPara.push(i);
};

document.getElementById("demo19").innerHTML = arregloPara;


// For in For of

let animales = ["gato", "perro", "elefante", "dodo"];
let textIn = "";

for (let animal in animales) { // IN captura posición o atributo | OF - for (let animal of animales)
    textIn = textIn + animales[animal] + "<br>";
    textIn += animal + "<br>";
}

document.getElementById("demo20").innerHTML = textIn;


const usuarioCliente = {
    name: "federico",
    lastName: "rueda",
    age: 42
};

let textObj = "";

for (let key in usuarioCliente) {
    //textObj = textObj + key + "<br>"; // muestra nombre de variables
    textObj = textObj + usuarioCliente[key] + "<br>"; // muestra valor de variables
}

document.getElementById("demo21").innerHTML = textObj;


// ForEach

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
    text += index + ": " + item + "<br>";
}

document.getElementById("demo22").innerHTML = text;


// MAP con new

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
    return num * 1;
}

document.getElementById("demo23").innerHTML = newArr;
//document.getElementById("demo23").innerHTML = numbers.get(44);


// MAP con set

const taladros = new Map();

taladros.set("Bauker", 150);
taladros.set("Uberman", 250);
taladros.set("Blackandeker", 350);
taladros.set("DeWalt", 450);

document.getElementById("demo24").innerHTML = taladros.get("Bauker");
document.getElementById("demo25").innerHTML = taladros.delete("DeWalt");
document.getElementById("demo26").innerHTML = taladros.size;

for (let [key, value] of taladros) {
    console.log(key + " = " + value);
};


// Js errors [try - catch - finally - throw]

function Test() {
    //const message = "Has fallado";
    try {
        document.getElementById("demo27").innerHTML = "Éxito";
    } catch (error) {
        document.getElementById("demo28").innerHTML = "Error";
    }
};

Test();


// Callback

function Modificar(array, callback) {
    array.push('Helena');

    //Realizar esto despues de algunos segundos
    setTimeout(() => {
        callback(array);
    }, 3000);
};

const names = ["Uno", "Dos", "Tres"]

Modificar(names, function (array) {
    document.getElementById("demo29").innerHTML = `He modificado el arreglo y ahora es de ${array}`;
});


// Scope
function comer() {
    var fruta = "Manzana";
    document.getElementById("demo30").innerHTML = "comiendo " + fruta;
}

function lavar() {
    var fruta = "banana";
    document.getElementById("demo31").innerHTML = "lavando " + fruta;
};

comer();
lavar();

var frutaGlobal = "piña";
function picar() {
    var otraFruta = "pera";
    document.getElementById("demo32").innerHTML = "picar " + frutaGlobal;
};

picar();


function cultivar() {
    var frutaSembrada = "Papaya";
    if (true) {
        var frutaCosechada = "Lulo";
    }
    document.getElementById("demo33").innerHTML = "Sembrado " + frutaSembrada;
    document.getElementById("demo34").innerHTML = "Cosechar " + frutaCosechada;
};

cultivar();


// Encontrar variable

var frutaTraida = "Kiwi";

function almacenar(){
    var frutaGruardada = "Mango";
    function sacarFruta() {
        document.getElementById("demo35").innerHTML = "Sacando " + frutaTraida;      
    }
    sacarFruta();

    document.getElementById("demo36").innerHTML = "Guardando " + frutaGruardada; 
};

almacenar();



// Hoisting

let nameSurname = 'NombresApellidos';
console.log(nameSurname);


// Promise
const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ 
        myResolve("I love You !!"); 
    }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo37").innerHTML = value;
  });
