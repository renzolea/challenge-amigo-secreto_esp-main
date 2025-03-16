document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const botonAgregar = document.querySelector(".button-add");
    const botonSortear = document.querySelector(".button-draw");
    const botonReiniciar = document.querySelector(".button-reset");
    const resultadoSorteo = document.getElementById("resultado");
    
    let amigos = []; // Usamos un array para mantener el formato original
    let nombresNormalizados = new Set(); // Set para evitar duplicados ignorando mayúsculas/minúsculas

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        if (!nombre) {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        const nombreNormalizado = nombre.toLowerCase(); // Convertimos a minúsculas para comparación

        if (nombresNormalizados.has(nombreNormalizado)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        amigos.push(nombre); // Guardamos el nombre con su formato original
        nombresNormalizados.add(nombreNormalizado); // Guardamos la versión en minúsculas para evitar duplicados
        actualizarLista();
        inputNombre.value = "";
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Agrega al menos un amigo antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultadoSorteo.textContent = 🎉 El amigo secreto es: ${amigos[indiceAleatorio]} 🎉;
    }

    function reiniciarSorteo() {
        amigos = [];
        nombresNormalizados.clear();
        listaAmigos.innerHTML = "";
        resultadoSorteo.textContent = "";
    }

    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);
    botonReiniciar.addEventListener("click", reiniciarSorteo);

    inputNombre.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});
