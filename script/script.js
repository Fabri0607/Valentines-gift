const frasesContainer = document.getElementById("frases-container");
const modalFrase = document.getElementById("modal-frase");
const modalAgregar = document.getElementById("modal-agregar");
const fraseCompleta = document.getElementById("frase-completa");
const nuevaFraseInput = document.getElementById("nueva-frase");

// Carrusel de imágenes
let index = 0;
const images = document.querySelectorAll('.slider img');

function actualizarClases() {
    images.forEach(img => img.className = '');
    
    // Imagen activa
    images[index].classList.add('slide-active');
    
    // Imagen izquierda
    const leftIndex = (index - 1 + images.length) % images.length;
    images[leftIndex].classList.add('slide-left');
    
    // Imagen derecha
    const rightIndex = (index + 1) % images.length;
    images[rightIndex].classList.add('slide-right');
}

function cambiarImagen(n) {
    index = (index + n + images.length) % images.length;
    actualizarClases();
}

// Inicializar el carrusel
actualizarClases();

// Opcional: Cambio automático cada 5 segundos
setInterval(() => cambiarImagen(1), 5000);

// Cambiar frases románticas
// Abrir modal para agregar frase
document.getElementById("agregar-frase-btn").addEventListener("click", () => {
    modalAgregar.style.display = "flex";
});

// Guardar nueva frase
document.getElementById("guardar-frase").addEventListener("click", () => {
    let nuevaFrase = nuevaFraseInput.value.trim();
    if (nuevaFrase) {
        let frases = JSON.parse(localStorage.getItem("frases")) || [];
        frases.push(nuevaFrase);
        localStorage.setItem("frases", JSON.stringify(frases));
        nuevaFraseInput.value = "";
        mostrarFrases();
    }
    modalAgregar.style.display = "none";
});

// Mostrar frases en el contenedor
function mostrarFrases() {
    frasesContainer.innerHTML = "";
    let frases = JSON.parse(localStorage.getItem("frases")) || [];

    // Agregar frases predeterminadas si no hay ninguna
    if (frases.length === 0) {
        frases = [
            "Te amo con toda mi alma ❤️",
            "Juntos por siempre 💑",
            "Eres mi persona favorita 💖",
            "Eres mi mayor bendición 🙏",
            "Eres mi mayor amor 💕"
        ];
        localStorage.setItem("frases", JSON.stringify(frases)); // Guardar frases predeterminadas en localStorage
    }

    frases.forEach((frase, index) => {
        let div = document.createElement("div");
        div.classList.add("post-it");

        // Texto de la frase
        let p = document.createElement("p");
        p.textContent = frase.length > 30 ? frase.slice(0, 30) + "..." : frase;
        p.onclick = () => {
            fraseCompleta.textContent = frase;
            modalFrase.style.display = "flex";
        };

        // Botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("eliminar-btn");
        btnEliminar.onclick = () => eliminarFrase(index);

        // Agregar elementos al post-it
        div.appendChild(p);
        div.appendChild(btnEliminar);
        frasesContainer.appendChild(div);
    });
}

// Función para eliminar frase
function eliminarFrase(index) {
    let frases = JSON.parse(localStorage.getItem("frases")) || [];
    frases.splice(index, 1); // Eliminar frase
    localStorage.setItem("frases", JSON.stringify(frases)); // Actualizar almacenamiento
    mostrarFrases(); // Refrescar lista
}

// Cerrar modales
document.querySelectorAll(".close").forEach(btn => btn.onclick = () => {
    modalFrase.style.display = "none";
    modalAgregar.style.display = "none";
});

// Mostrar frases al cargar la página
mostrarFrases();

//Musica

const canciones = [
    { codigoSpotify: "spotify:track:2GJyBJWPmnM7pK961cB6iV" },
    { codigoSpotify: "spotify:track:3U4isOIWM3VvDubwSI3y7a" },
    { codigoSpotify: "spotify:track:5QSYWruQQ7kBCHScI4xJ9g" },
    { codigoSpotify: "spotify:track:6lanRgr6wXibZr8KgzXxBl" },
    { codigoSpotify: "spotify:track:6rC8nvEUVh3HVUtsR93fG8" },
    { codigoSpotify: "spotify:track:44AyOl4qVkzS48vBsbNXaC" },
    { codigoSpotify: "spotify:track:0HFxZvViHzxYpavybvKVq9" },
    { codigoSpotify: "spotify:track:4ZLzoOkj0MPWrTLvooIuaa" },
    { codigoSpotify: "spotify:track:7npLlaPu9Mfno8hjk5OagD" },
    { codigoSpotify: "spotify:track:56sxN1yKg1dgOZXBcAHkJG" },
    { codigoSpotify: "spotify:track:1nbaJy4hbGV8r3DRqeeXF1" },
    { codigoSpotify: "spotify:track:07q0QVgO56EorrSGHC48y3" },
    { codigoSpotify: "spotify:track:1SOClUWhOi8vHZYMz3GluK" },
    { codigoSpotify: "spotify:track:5cwCW4r6ybpSiHWMpMKHoJ" },
    { codigoSpotify: "spotify:track:0LBFzaPGnoZsQ5o7PMPCQ7" },
    { codigoSpotify: "spotify:track:6rG1DdPCTzGibgHliYJ4ws" },
    { codigoSpotify: "spotify:track:1dGr1c8CrMLDpV6mPbImSI" },
    { codigoSpotify: "spotify:track:5FgPwJ7Nh2FVmIXviKl2VF" },
    { codigoSpotify: "spotify:track:1gJA27xiMdENwoAVN7kMlo" },
    { codigoSpotify: "spotify:track:7gZXCjAy6nxKCQWLEeX4LZ" },
    { codigoSpotify: "spotify:track:0tgVpDi06FyKpA1z0VMD4v" },
    { codigoSpotify: "spotify:track:630sXRhIcfwr2e4RdNtjKN" },
    { codigoSpotify: "spotify:track:5uCax9HTNlzGybIStD3vDh" },
    { codigoSpotify: "spotify:track:4kbj5MwxO1bq9wjT5g9HaA" },
    { codigoSpotify: "spotify:track:0EA40dd5ghMqemzoqWvo3E" },
    { codigoSpotify: "spotify:track:7uoFMmxln0GPXQ0AcCBXRq" },
    { codigoSpotify: "spotify:track:14BH4qO7pgCmIe6mgLKOK3" },
    { codigoSpotify: "spotify:track:7snQQk1zcKl8gZ92AnueZW" },
    { codigoSpotify: "spotify:track:161DnLWsx1i3u1JT05lzqU" },
    { codigoSpotify: "spotify:track:50x1Ic8CaXkYNvjmxe3WXy" },
    { codigoSpotify: "spotify:track:4OyzSXRSadNQt5EMwASdap" },
    { codigoSpotify: "spotify:track:06vNG6CiV4k8oNA0wUUAO7" }
];

let indexActual = 0;
const musicaContainer = document.getElementById("musica-container");

function mostrarCancion() {
    let cancion = canciones[indexActual];
    musicaContainer.innerHTML = `
        <div class="cancion">
            <iframe src="https://open.spotify.com/embed/track/${cancion.codigoSpotify.split(':')[2]}" width="100%" height="80" frameborder="0" style="max-width: 500px;"></iframe>
        </div>
    `;
}

document.getElementById("prev-song").onclick = () => {
    indexActual = (indexActual - 1 + canciones.length) % canciones.length;
    mostrarCancion();
};

document.getElementById("next-song").onclick = () => {
    indexActual = (indexActual + 1) % canciones.length;
    mostrarCancion();
};

// Cambio automático de canciones cada 5 segundos
setInterval(() => {
    indexActual = (indexActual + 1) % canciones.length;
    mostrarCancion();
}, 5000);

mostrarCancion();

// Contador de tiempo juntos
function actualizarContador() {
    const fechaInicio = new Date(2022, 10, 13); // Mes 10 porque en JS los meses van de 0 a 11
    const fechaActual = new Date();

    // Obtener diferencia en años, meses y días correctamente
    let años = fechaActual.getFullYear() - fechaInicio.getFullYear();
    let meses = fechaActual.getMonth() - fechaInicio.getMonth();
    let dias = fechaActual.getDate() - fechaInicio.getDate();

    // Ajustar si los días son negativos (es decir, el día actual es menor que el día de inicio)
    if (dias < 0) {
        meses--; // Restar un mes
        let ultimoMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0);
        dias += ultimoMes.getDate(); // Ajustar sumando los días del mes anterior
    }

    // Ajustar si los meses son negativos (es decir, aún no se ha cumplido un mes en este año)
    if (meses < 0) {
        años--;
        meses += 12;
    }

    // Obtener horas, minutos y segundos restantes
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    // Actualizar el HTML
    document.getElementById("años").textContent = años;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// Iniciar con una frase aleatoria
cambiarFrase();
