// ==========================================
// TABLAS TRIBUTARIAS ECUADOR
// TUCONTA360EC
// ==========================================


// RIMPE NEGOCIO POPULAR

const tablaNegocioPopular = [

    {
        desde: 0,
        hasta: 2500,
        impuesto: 0
    },

    {
        desde: 2500.01,
        hasta: 5000,
        impuesto: 5
    },

    {
        desde: 5000.01,
        hasta: 10000,
        impuesto: 15
    },

    {
        desde: 10000.01,
        hasta: 15000,
        impuesto: 35
    },

    {
        desde: 15000.01,
        hasta: 20000,
        impuesto: 60
    }

];



// RIMPE EMPRENDEDOR

const tablaRimpeEmprendedor = [

    {
        desde: 20000,
        hasta: 50000,
        impuestoBasico: 60,
        porcentaje: 1
    },

    {
        desde: 50000,
        hasta: 75000,
        impuestoBasico: 360,
        porcentaje: 1.25
    },

    {
        desde: 75000,
        hasta: 100000,
        impuestoBasico: 672.50,
        porcentaje: 1.50
    },

    {
        desde: 100000,
        hasta: 200000,
        impuestoBasico: 1047.50,
        porcentaje: 1.75
    },

    {
        desde: 200000,
        hasta: 300000,
        impuestoBasico: 2797.52,
        porcentaje: 2
    }

];



// IMPUESTO A LA RENTA PERSONAS NATURALES

const tablaRentaGeneral = [

    {
        desde: 0,
        hasta: 12208,
        impuestoBasico: 0,
        porcentaje: 0
    },

    {
        desde: 12208,
        hasta: 15549,
        impuestoBasico: 0,
        porcentaje: 5
    },

    {
        desde: 15549,
        hasta: 20188,
        impuestoBasico: 167,
        porcentaje: 10
    },

    {
        desde: 20188,
        hasta: 26700,
        impuestoBasico: 631,
        porcentaje: 12
    },

    {
        desde: 26700,
        hasta: 35136,
        impuestoBasico: 1412,
        porcentaje: 15
    },

    {
        desde: 35136,
        hasta: 46575,
        impuestoBasico: 2678,
        porcentaje: 20
    },

    {
        desde: 46575,
        hasta: 62005,
        impuestoBasico: 4965,
        porcentaje: 25
    },

    {
        desde: 62005,
        hasta: 82679,
        impuestoBasico: 8823,
        porcentaje: 30
    },

    {
        desde: 82679,
        hasta: 109956,
        impuestoBasico: 15025,
        porcentaje: 35
    },

    {
        desde: 109956,
        hasta: 999999999,
        impuestoBasico: 24572,
        porcentaje: 37
    }

];
console.log("TuConta360EC funcionando");


function calcularImpuesto(){

    let ingresos = Number(document.getElementById("ingresos").value);

    let gastos = Number(document.getElementById("gastos").value);

    let regimen = document.getElementById("regimen").value;

    let resultado = document.getElementById("resultado");


    if(isNaN(ingresos) || ingresos <= 0){

        resultado.innerHTML = "Ingrese un valor válido de ingresos.";
        return;

    }


    let baseImponible = ingresos - gastos;


    if(baseImponible < 0){

        baseImponible = 0;

    }


    let impuesto = 0;

    let nombreRegimen = "";


    if(regimen == "popular"){

        nombreRegimen = "RIMPE Negocio Popular";

        impuesto = 0;

    }


    else if(regimen == "emprendedor"){

        nombreRegimen = "RIMPE Emprendedor";

        impuesto = baseImponible * 0.02;

    }


    else{

        nombreRegimen = "Régimen General";

        impuesto = baseImponible * 0.25;

    }



    resultado.innerHTML = `

    <div class="resultado-box">

    <h3>Resultado Tributario</h3>

    <p>
    Régimen:
    <strong>${nombreRegimen}</strong>
    </p>


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


    </div>

    `;


}
