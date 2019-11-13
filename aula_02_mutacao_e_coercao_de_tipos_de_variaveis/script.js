/********************************
* mutação e coerção de tipos de variáveis
*/

/*

var nome, sobrenome, idade, estadoCivil, temFilhos;
nome = "Fulano";
sobrenome = "de Tal";
idade = 39;

//Coerção de tipo
console.log(nome + " " + sobrenome + " tem " + idade + " anos.");
alert(nome + " " + 
	  sobrenome + " tem " + 
	  idade + " anos.");
/*
estadoCivil = true;
temFilhos = false;

console.log(nome + " " + sobrenome + " é casado? " + estadoCivil);
console.log("Tem filho? " + temFilhos);

//mutação de variável;
idade = "Trinta e nove";

*/

var nome = prompt("Qual seu nome?");
var sobrenome = prompt("Qual seu sobrenome?");
console.log("Olá " + nome + " " +
            sobrenome + ", tudo bem?");