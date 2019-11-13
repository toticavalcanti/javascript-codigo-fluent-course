/********************************
* IF - ELSE - Instruções Condicionais
*/

var nome01 = "João";
var sobrenome01 = "da Silva";
var idade_joao = 50;
var estadoCivil_joao = false;

var nome02 = "Maria";
var sobrenome02 = "Carvalho";
var idade_maria = 55;
var estadoCivil_maria = true;

//essa comparação não é necessária: if (estadoCivil === true), já que estadoCivil já é um boolean
//por isso, no exemplo da aula02 colocamos apenas if(estadoCivil)
if (estadoCivil_joao) 
    console.log(nome01 + " " + sobrenome01 + " é casado");
else
    console.log(nome01 + " " + sobrenome01 + " é solteiro");

if (estadoCivil_maria) 
    console.log(nome02 + " " + sobrenome02 + " é casada");
else
    console.log(nome02 + " " + sobrenome02 + " é solteira");

if (idade_joao > idade_maria) 
    console.log(nome01 + " " + sobrenome01 + " é mais velho do que " +  nome02 + " " + sobrenome02);
else
    console.log(nome02 + " " + sobrenome02 + " é mais velha do que " +  nome01 + " " + sobrenome01);