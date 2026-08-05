// Mensaje de bienvenida
console.log("Bienvenido a TuConta360EC");

// Efecto al hacer clic en el menú
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(){

        enlaces.forEach(item => item.classList.remove("activo"));

        this.classList.add("activo");

    });

});
