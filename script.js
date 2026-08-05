// ===============================
// TUCONTA360EC
// Calculadora Tributaria Ecuador
// ===============================


console.log("TuConta360EC cargado correctamente");
// ==================================
// BASE DE DATOS TRIBUTARIA ECUADOR
// ==================================


// Tabla Impuesto a la Renta
// Estructura preparada para actualización anual

const tablaRentaGeneral = [

    {
        desde: 0,
        hasta: 11902,
        impuestoBasico: 0,
        porcentaje: 0
    },

    {
        desde: 11902,
        hasta: 15159,
        impuestoBasico: 0,
        porcentaje: 5
    },

    {
        desde: 15159,
        hasta: 19682,
        impuestoBasico: 162.85,
        porcentaje: 10
    },

    {
        desde: 19682,
        hasta: 26031,
        impuestoBasico: 615.15,
        porcentaje: 12
    }

];



// Tabla RIMPE Emprendedor
// Preparada para rangos oficiales

const tablaRimpeEmprendedor = [

    {
        desde:0,
        hasta:20000,
        impuesto:60
    },

    {
        desde:20000,
        hasta:50000,
        impuesto:0
    },

    {
        desde:50000,
        hasta:100000,
        impuesto:0
    }

];



// Negocio Popular

const negocioPopular = {

    tarifaAnual:0,

    observacion:
    "Pendiente cargar tarifa oficial según normativa vigente"

};


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


// ==================================
// FUNCIÓN CALCULO TRIBUTARIO
// ==================================

function calcularImpuesto(){


    let ingresos = Number(
        document.getElementById("ingresos").value
    );


    let gastos = Number(
        document.getElementById("gastos").value
    );


    let regimen = document.getElementById("regimen").value;
    let nombreRegimen = "";

if(regimen === "popular"){

    nombreRegimen = "RIMPE Negocio Popular";

}
else if(regimen === "emprendedor"){

    nombreRegimen = "RIMPE Emprendedor";

}
else{

    nombreRegimen = "Régimen General";

}


    let resultado = document.getElementById("resultado");



    if(isNaN(ingresos) || ingresos <= 0){


        resultado.innerHTML =
        "Ingrese un valor válido de ingresos.";

        return;

    }



    let baseImponible = ingresos - gastos;


    if(baseImponible < 0){

        baseImponible = 0;

    }



    let impuesto = 0;

    let detalle = "";



    // ==============================
    // NEGOCIO POPULAR
    // ==============================


    if(regimen === "popular"){


        impuesto = negocioPopular.tarifaAnual;


        detalle =
        negocioPopular.observacion;


    }



    // ==============================
    // RIMPE EMPRENDEDOR
    // ==============================


    else if(regimen === "emprendedor"){


        let rango = tablaRimpeEmprendedor.find(

            item =>
            baseImponible >= item.desde &&
            baseImponible <= item.hasta

        );


        if(rango){

            impuesto = rango.impuesto;

        }


        detalle =
        "Aplicación de tabla RIMPE Emprendedor.";

    }



    // ==============================
    // REGIMEN GENERAL
    // ==============================


    else{


        let rango = tablaRentaGeneral.find(

            item =>
            baseImponible >= item.desde &&
            baseImponible <= item.hasta

        );


        if(rango){


            let excedente =
            baseImponible - rango.desde;


            impuesto =
            rango.impuestoBasico +
            (excedente * rango.porcentaje / 100);


        }



        detalle =
        "Aplicación de tabla progresiva de Impuesto a la Renta.";

    }



    resultado.innerHTML = `

    <div class="resultado-box">

    <h3>Resultado Tributario</h3>

    <p>
    Régimen:
    <strong>${regimen}</strong>
    </p>


    <p>
    Ingresos:
    <strong>
    $${ingresos.toFixed(2)}
    </strong>
    </p>


    <p>
    Gastos:
    <strong>
    $${gastos.toFixed(2)}
    </strong>
    </p>


    <p>
    Base imponible:
    <strong>
    $${baseImponible.toFixed(2)}
    </strong>
    </p>


    <p>
    Impuesto estimado:
    <strong>
    $${impuesto.toFixed(2)}
    </strong>
    </p>


    <small>
    ${detalle}
    </small>


    </div>

    `;


}



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
