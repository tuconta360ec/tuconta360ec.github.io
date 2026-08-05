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
