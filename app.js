document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const botonAgregar = document.querySelector(".button-add");
    const botonSortear = document.querySelector(".button-draw");
    const resultadoSorteo = document.getElementById("resultado");

    let amigos = new Set(); // Usamos Set para evitar duplicados

    // Actualizar la lista en la interfaz
    function actualizarLista() {
        listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    // Agregar amigo a la lista
    function agregarAmigo() {
        const nombre = inputNombre.value.trim();

        if (!nombre) {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (amigos.has(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        amigos.add(nombre);  // Agregar al conjunto
        actualizarLista();  // Refrescar la lista visual
        inputNombre.value = ""; // Limpiar el input
    }

    // Sortear un amigo
    function sortearAmigo() {
        if (amigos.size === 0) {
            alert("Agrega al menos un amigo antes de sortear.");
            return;
        }

        const nombresArray = Array.from(amigos);
        const indiceAleatorio = Math.floor(Math.random() * nombresArray.length);
        resultadoSorteo.textContent = `🎉 El amigo secreto es: ${nombresArray[indiceAleatorio]} 🎉`;
    }

    // Eventos de botones
    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);

    // Permitir agregar con la tecla "Enter"
    inputNombre.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});
