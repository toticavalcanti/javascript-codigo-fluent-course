/* Quando o campo de input recebe uma entrada, converta o valor de fahrenheit para celsius */
function toCelsius() {
    var f = document.getElementById("tempinput").value;
    temperature = (f - 32) * 5 / 9;
    document.getElementById("result").value = temperature;
}