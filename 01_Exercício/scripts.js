// Seleção dos elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const convertButton = document.querySelector("#convert-btn");
const outputElement = document.querySelector("#output");
const messageElement = document.querySelector("#message");

// Função para conversão
function convert () {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Conversão de unidades de medida
  let meters
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  let result
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  // Mostra resutado da conversão
  outputElement.value = result;

  //Mostra mensagem da conversão
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  message = `${inputElement.value} ${fromLabel} é equivalente a: ${result} ${toLabel}`;

  messageElement.textContent = message;
  
}

// Chamada da função
convertButton.addEventListener("click", convert);