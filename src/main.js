import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.getElementById("buscar").addEventListener("click", () => {
  const expresion = document.getElementById("regex").value.trim();
  const texto = document.getElementById("texto").value.trim();
  const resultado = document.getElementById("resultado");

  if (!expresion || !texto) {
    resultado.className = "resultado bad";
    resultado.textContent = "Debes llenar ambos campos.";
    return;
  }

  let regex;

  try {

    regex = new RegExp(expresion, "g");
  } catch (err) {
    resultado.className = "resultado bad";
    resultado.textContent = "La expresión regular no es válida.";
    return;
  }

  const coincidencias = texto.match(regex);

  if (coincidencias) {
    resultado.className = "resultado ok";
    resultado.innerHTML =
      `Se encontraron <strong>${coincidencias.length}</strong> coincidencia(s):<br><br>` +
      coincidencias.map(c => `• ${c}`).join("<br>");
  } else {
    resultado.className = "resultado bad";
    resultado.textContent = "No se encontraron coincidencias.";
  }
});
