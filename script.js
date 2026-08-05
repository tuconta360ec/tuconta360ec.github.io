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
function calcularImpuesto(){

    let ingresos = Number(document.getElementById("ingresos").value);

    let regimen = document.getElementById("regimen").value;

    let impuesto = 0;

    if(regimen=="popular"){

        impuesto = 0;

    }

    else if(regimen=="emprendedor"){

        impuesto = ingresos*0.02;

    }

    else{

        impuesto = ingresos*0.25;

    }

    document.getElementById("resultado").innerHTML =
    "Impuesto estimado: $ " + impuesto.toFixed(2);

}
