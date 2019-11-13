var x = "1";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "Nenhum valor encontrado";
}

document.getElementById("onOff").innerHTML = text;