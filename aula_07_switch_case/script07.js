/********************************
*Instrução Switch Case 
*/
var day;
switch (6) {
  case 0:
    day = "domingo";
    break;
  case 1:
    day = "segunda-feira";
    break;
  case 2:
    day = "terça-feira";
    break;
  case 3:
    day = "quarta-feira";
    break;
  case 4:
    day = "quinte-feira";
    break;
  case 5:
    day = "sexta-feira";
    break;
  default:
    day = "sábado";
}
document.getElementById("diaDaSemana").innerHTML = "Hoje é " + day;