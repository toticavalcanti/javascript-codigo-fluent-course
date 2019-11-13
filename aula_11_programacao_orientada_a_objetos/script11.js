//-------------------------------------------------------------------
//Primeira forma de criar objetos em javascript
//###################################################################
//Declaração de objeto como dicionário (object literal)
const car = {name:"Beetle", type:"Sedan", weight: 840, color:"Pink"};

//Ou assim
const car = {
    name:"Beetle", 
    type:"Sedan", 
    weight: 840, 
    color:"Pink"
};

//Para acessar as propriedades do objeto
car.name;

//Ou assim:
car["name"];

//-------------------------------------------------------------------------
//Criando um carro Onix, ou seja, instanciando um Onix e atribuindo a car_02
const car_02 = {
    name:"Onix", 
    type:"Sedan", 
    weight: 850, 
    color:"Green",
    start: function() {
        return "Engine started";
    },
    drive: function() {
        return "Car being driven now";
    },
    brake: function() {
        return "Brake actioned";
    },
    stop: function() {
        return "Engine switched off";
    },
    toString: function(){
        return "Nome: " + this.name + ", " + "Modelo: " + this.type + ", " + "Cor: " + this.color;
    }
};

//----------------------------------------------------------------------------------
//Criando um carro Fusca (Beetle), ou seja, instanciando um Fusca e atribuindo a car_01
const car_01 = {
    name:"Beetle", 
    type:"Sedan", 
    weight: 840, 
    color:"Pink",
    start: function() {
        return "Engine started";
    },
    drive: function() {
        return "Car being driven now";
    },
    brake: function() {
        return "Brake actioned";
    },
    stop: function() {
        return "Engine switched off";
    },
    toString: function(){
        return "Nome: " + this.name + ", " + "Modelo: " + this.type + ", " + "Cor: " + this.color;
    }
};

//----------------------------------------------------------------------------
//Segunda forma
//############################################################################
//Instanciando um objeto carro com new
const car = new Object();

//Adicionando as propriedades ao objeto
car.name = 'Fusca';
car.weight = 840;


//Objeto pessoa
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
} 

//Instanciando duas pessoas
const person01 = new Person('Fulano', ' de Tal');
const person02 = new Person('Sicrano', ' da Silva');

//----------------------------------------------------------------------------
//Terceira forma
//############################################################################
//Cria a empresa XYZ e atribui a companyObject
let companyObject = { company: 'Empresa XYZ' }
//Cria um empregado através do protótipo companyObject
let employee = Object.create(companyObject ,  {    name:{      value: 'Funcionario_01'    }  });
console.log(employee.name);    //Output: Funcionario_01
console.log(employee.company); //Output: Empresa XY

//----------------------------------------------------------------------------
//Quarta forma
//############################################################################
//Cria a Empresa XYZ e o carro Ford
let companyObject = {company: 'Empresa XYZ'} 
let carObject = {carName: 'Ford'}
//Cria empregado a partir de companyObject e carObject
let employee = Object.assign( {}, companyObject, carObject );
//Acessando
console.log(employee.company) //Output: ABC Corp 
console.log(employee.carName) //Output: Ford

//----------------------------------------------------------------------------
//Quinta forma
//############################################################################
//Cria a classe pessoa com class
class Person {
    constructor(fname, lname)
    {
        this.firstName = fname;
        this.lastName = lname;
    }
}

//Instancia uma pessoa passando um primeiro nome e um segundo
let person = new Person('testFirstName', 'testLastName');
console.log(person.firstName);    //Output: testFirstName
console.log(person.lastName);    //Output: testLastName