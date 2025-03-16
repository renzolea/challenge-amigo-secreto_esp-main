document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");  // Corregido
    const listaAmigos = document.getElementById("listaAmigos");  // Corregido
    const botonAgregar = document.querySelector(".button-add");  // Corregido
    const botonSortear = document.querySelector(".button-draw");  // Corregido
    const resultadoSorteo = document.getElementById("resultado");  // Corregido

    let amigos = []; // Lista de nombres

    // Función para agregar amigo
    function agregarAmigo() {
        const nombre = inputNombre.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
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
    }

    // Función para sortear amigo
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Agrega al menos un amigo antes de sortear.");
            return;
        }

        // Elegir un nombre aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultadoSorteo.textContent = `🎉 El amigo secreto es: ${amigos[indiceAleatorio]} 🎉`;
    }

    // Agregar eventos a los botones
    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);
});
