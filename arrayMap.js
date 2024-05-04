var articulos = [
    { nombre: "Bici", costo: 200},
    { nombre: "Tv", costo: 230},
    { nombre: "Libro", costo: 509},
    { nombre: "celular", costo: 243},
    { nombre: "laptop", costo: 232},
    { nombre: "teclado", costo: 532},
    { nombre: "audifonos", costo: 246},
];

var nombreArticulos = articulos.map(function(articulo){
    console.log(articulo.nombre);
   
});


// find 


var articulos = [
    { nombre: "Bici", costo: 200},
    { nombre: "Tv", costo: 230},
    { nombre: "Libro", costo: 509},
    { nombre: "celular", costo: 243},
    { nombre: "laptop", costo: 232},
    { nombre: "teclado", costo: 532},
    { nombre: "audifonos", costo: 246},
];

var encuentraArticulo = articulos.find(function(articulo){
    // return articulo.nombre
    console.log(articulo.nombre);
});

//  forEach

var articulos = [
    { nombre: "Bici", costo: 200},
    { nombre: "Tv", costo: 230},
    { nombre: "Libro", costo: 509},
    { nombre: "celular", costo: 243},
    { nombre: "laptop", costo: 232},
    { nombre: "teclado", costo: 532},
    { nombre: "audifonos", costo: 246},
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Some verdadero o falso

var articulos = [
    { nombre: "Bici", costo: 200},
    { nombre: "Tv", costo: 230},
    { nombre: "Libro", costo: 509},
    { nombre: "celular", costo: 243},
    { nombre: "laptop", costo: 232},
    { nombre: "teclado", costo: 532},
    { nombre: "audifonos", costo: 246},
];

var articulosBaratos = articulos.some(function(articulo){
    // return articulo.costo <= 500;
    console.log(articulo.costo <= 500);
});