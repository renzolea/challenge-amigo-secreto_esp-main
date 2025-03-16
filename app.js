const inputNombre = document.getElementById("nombre-amigo");
const listaAmigos = document.getElementById("lista-amigos");
const botonAgregar = document.getElementById("boton-adicionar");
const botonSortear = document.getElementById("boton-sortear");
const resultadoSorteo = document.getElementById("resultado-sorteo");

let amigos = []; // Lista de nombres

// Agregar amigo
botonAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar nombre a la lista
    amigos.push(nombre);

    // Mostrar en la lista de la página
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    inputNombre.value = "";
});

// Sortear amigo
botonSortear.addEventListener("click", () => {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Elegir un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultadoSorteo.textContent = `🎉 El amigo secreto es: ${amigos[indiceAleatorio]} 🎉`;
});
