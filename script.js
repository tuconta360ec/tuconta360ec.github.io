// ===============================
// TUCONTA360EC
// Calculadora Tributaria Ecuador
// ===============================


console.log("TuConta360EC cargado correctamente");


// ===============================
// MENÚ ACTIVO
// ===============================

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(){

        enlaces.forEach(item => {

            item.classList.remove("activo");

        });

        this.classList.add("activo");

    });

});



// ===============================
// CALCULADORA TRIBUTARIA
// ===============================


function calcularImpuesto(){


    let ingresos = Number(
        document.getElementById("ingresos").value
    );


    let gastos = Number(
        document.getElementById("gastos").value
    );


    let regimen = document.getElementById("regimen").value;



    let resultado = document.getElementById("resultado");



    if(ingresos <= 0){


        resultado.innerHTML =
        "Ingrese un valor válido de ingresos.";


        return;

    }



    let baseImponible = ingresos - gastos;


    if(baseImponible < 0){

        baseImponible = 0;

    }



    let impuesto = 0;

    let mensaje = "";



    // ==========================
    // RIMPE NEGOCIO POPULAR
    // ==========================


    if(regimen === "popular"){


        impuesto = 0;


        mensaje =
        "El cálculo del Negocio Popular depende de la tabla y normativa vigente. " +
        "La herramienta está preparada para incorporar la tarifa oficial.";


    }



    // ==========================
    // RIMPE EMPRENDEDOR
    // ==========================


    else if(regimen === "emprendedor"){


        /*
        Valor provisional de estructura.
        Aquí incorporaremos la tabla oficial RIMPE.
        */


        impuesto = baseImponible * 0.02;


        mensaje =
        "Cálculo estimado RIMPE Emprendedor.";



    }



    // ==========================
    // REGIMEN GENERAL
    // ==========================


    else{


        /*
        Aquí incorporaremos
        la tabla progresiva oficial
        de Impuesto a la Renta.
        */


        impuesto = baseImponible * 0.25;


        mensaje =
        "Cálculo estimado Régimen General.";

    }



    resultado.innerHTML = `

    <div class="resultado-box">

    <h3>Resultado tributario</h3>

    <p>
    Ingresos:
    <strong>$ ${ingresos.toFixed(2)}</strong>
    </p>


    <p>
    Gastos:
    <strong>$ ${gastos.toFixed(2)}</strong>
    </p>


    <p>
    Base imponible:
    <strong>$ ${baseImponible.toFixed(2)}</strong>
    </p>


    <p>
    Impuesto estimado:
    <strong>$ ${impuesto.toFixed(2)}</strong>
    </p>


    <small>
    ${mensaje}
    </small>


    </div>

    `;


}
