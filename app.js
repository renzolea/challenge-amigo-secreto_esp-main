const inputNombre = document.getElementById("nombre-amigo");
const listaAmigos = document.getElementById("lista-amigos");
const botonAgregar = document.getElementById("boton-adicionar");

botonAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    inputNombre.value = ""; // Limpiar el campo después de agregar el nombre
});
