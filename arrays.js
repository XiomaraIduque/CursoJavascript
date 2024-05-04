var frutas = ["Cerceza", "Fresa", "Platano", "Manzana" ];
console.log(frutas);


//para saber cuantos datos hay
console.log(frutas.length);


console.log(frutas[2]);

// para agregar a lo ultimo
var masfrutas = frutas.push("Uvas");
console.log(frutas);

//para eliminar
var ultimo = frutas.pop("Uvas");
console.log(frutas);

//agregar al principio
var nuevaLogitud = frutas.unshift("Melon");
console.log(frutas);

//borrar la primera position
var borrarLongitud = frutas.shift("Uvas");
console.log(frutas);

//Buscar posicion de array
var posicion = frutas.indexOf("Cereza");
posicion