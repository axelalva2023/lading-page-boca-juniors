const form = document.getElementById("formulario")

const boton = document.getElementById("botonModo")

boton.addEventListener("click", () => {
    form.classList.toggle("modo-oscuro")
    if(form.classList.contains("modo-oscuro")){
        boton.value = "Modo claro"
    }else if (form.classList.contains("modo-claro")){
        boton.value = "Modo oscuro"
    }
})