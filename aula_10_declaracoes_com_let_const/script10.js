//Scripts da aula 10
//-------------------------------------
function imprimeNumero() {
  var num = 35;
  console.log("Número: ", num);
}
console.log("Número: ", num);

//-------------------------------------
function imprimeI() {
    for(var i = 0; i < 3; i++){
        console.log("i dentro do for: ", i);
    }
    console.log("i fora do for: ", i);
}

//-------------------------------------
function imprimeI() {
    for(let i = 0; i < 3; i++){
        console.log("i dentro do for: ", i);
    }
    console.log("i fora do for: ", i);
}

//-------------------------------------
function imprimeNome() {
    if(true){
        var nome = "Fulano de Tal";
        console.log("Nome dentro do if: ", nome);
    }
    console.log("Nome fora do if: ", nome);
}

//-------------------------------------
function imprimeNome() {
    if(true){
        let nome = "Fulano de Tal";
        console.log("Nome dentro do if: ", nome);
    }
    console.log("Nome fora do if: ", nome);
}

//-------------------------------------
var msg = "Um texto qualquer";
var msg = "Olá programador!"; //  reatribui um novo valor a msg

let message = 'Essa é uma mensagem!';
// A linha abaixo causa um erro fatal se você remover o comentário
// let message = 'Essa é outra mensagem!';

console.log(msg);
console.log(message);

//-------------------------------------
const message = 'Primeira mensagem.';
message = 'Segunda mensagem'; // ERROR!

//-------------------------------------
const user = {'firstname' : 'Fulano', 'lastname' : 'de Tal'};
user.firstname = 'Beltrano'; // aceitável, altera uma propriedade

// A próxima linha causa um erro fatal se você remover o comentário
// user = {'firstname' : 'Sicrano', 'lastname' : 'da Silva'};

console.log(user);