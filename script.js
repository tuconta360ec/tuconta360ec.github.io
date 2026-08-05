document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const ingresos = parseFloat(document.getElementById("ingresos").value);
  const regimen = document.getElementById("regimen").value;
  let impuesto = 0;

  if (regimen === "popular") {
    impuesto = ingresos * 0.02; // ejemplo
  } else if (regimen === "emprendedor") {
    impuesto = ingresos * 0.05; // ejemplo
  } else if (regimen === "general") {
    if (ingresos <= 11722) {
      impuesto = 0;
    } else if (ingresos <= 14930) {
      impuesto = (ingresos - 11722) * 0.05;
    } else if (ingresos <= 19385) {
      impuesto = 160 + (ingresos - 14930) * 0.10;
    } else {
      impuesto = 600 + (ingresos - 19385) * 0.15; // ejemplo
    }
  }

  document.getElementById("resultado").innerHTML = 
    `<p>El impuesto calculado es: <strong>$${impuesto.toFixed(2)}</strong></p>`;
});

