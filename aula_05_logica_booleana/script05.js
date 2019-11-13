/********************************
* Lógica booleana
*/
var nome = "Carlos";
var idade = 60;
//Primeiro exemplo, utilizando &&
//Criança
//Adolescente
if( idade < 20)
         console.log(nome + " é adolescente.");
else if( idade < 13 ) 
    console.log(nome + " é criança.");

//Adulto
else if( idade < 60 )
         console.log(nome + " é adulto.");
else
    console.log(nome + " é idoso.");

var temperatura = 3

//Segundo exemplo, utilizando ||
if (temperatura < -5 || temperatura > 2)
    console.log("Temperatura fora do intervalo de segurança");
else
    console.log("Temperatura OK");