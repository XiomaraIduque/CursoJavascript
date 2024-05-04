var pregunta = prompt("Ingresa tu opcion ¿Piedra papel o tijera");
var user = pregunta.toLowerCase();
var opcions = ["piedra", "papel", "tijera"];
options[Math.floor(Math.random()* 3)];

switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel' && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');
}