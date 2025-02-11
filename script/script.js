// Carrusel de imágenes
let index = 0;
const images = document.querySelectorAll('.slider img');

function cambiarImagen(n) {
    images[index].classList.remove('active');
    index = (index + n + images.length) % images.length;
    images[index].classList.add('active');
}

// Cambiar frases románticas
const frases = [
    "Eres mi persona favorita en el mundo 💖",
    "A tu lado, todos los días son mágicos ✨",
    "Te amo más de lo que las palabras pueden decir ❤️",
    "Nuestro amor es la historia más bonita jamás contada 📖💑",
    "Desde que te conocí, mi mundo es más brillante 🌟"
];

function cambiarFrase() {
    const frase = document.getElementById('frase');
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];
}

// Contador de tiempo juntos
function actualizarContador() {
    const fechaInicio = new Date('2022-11-19T00:00:00');
    const fechaActual = new Date();

    let diffTiempo = fechaActual - fechaInicio;

    let años = Math.floor(diffTiempo / (1000 * 60 * 60 * 24 * 365));
    diffTiempo -= años * (1000 * 60 * 60 * 24 * 365);

    let dias = Math.floor(diffTiempo / (1000 * 60 * 60 * 24));
    diffTiempo -= dias * (1000 * 60 * 60 * 24);

    let horas = Math.floor(diffTiempo / (1000 * 60 * 60));
    diffTiempo -= horas * (1000 * 60 * 60);

    let minutos = Math.floor(diffTiempo / (1000 * 60));
    diffTiempo -= minutos * (1000 * 60);

    let segundos = Math.floor(diffTiempo / 1000);

    document.getElementById("años").textContent = años;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();


// Actualizar contador cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// Iniciar con una frase aleatoria
cambiarFrase();
