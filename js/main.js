const form = document.getElementById("formulario")

const boton = document.getElementById("botonModo")

boton.addEventListener("click", () => {
    form.classList.toggle("modo-oscuro")
})