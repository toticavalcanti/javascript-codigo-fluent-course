//Constroi o objeto carro
const car_object =  {
    car_constructor: function(n, f, p, c) {
        car_object.name = n;
        car_object.carMaker = f;
        car_object.weight = p;
        car_object.color = c;
        //chama a função show_info() do objeto carro
        //pra mostrar as informações
        car_object.show_info();
    },
    //Pega os dados do form do HTML
    get_data_from_form: function() {
        const name = document.getElementById("nomeCarroInput").value;
        const carMaker = document.getElementById("montadoraInput").value;
        const weight = document.getElementById("pesoInput").value;
        const color = document.getElementById("corInput").value;
        this.car_constructor(name, carMaker, weight, color);
    },
    //mostra as informações nos campos de saída do HTML
    show_info: function() {
        document.getElementById("nomeCarro").value = this.name;
        document.getElementById("montadora").value = this.carMaker;
        document.getElementById("peso").value = this.weight;
        document.getElementById("cor").value = this.color;
        document.getElementById("motorLigado").value = this.start();
        document.getElementById("sendoDirigido").value = this.drive(); 
        document.getElementById("freiado").value = this.brake();   
        document.getElementById("motorDesligado").value = this.stop();   
        document.getElementById("informacaoGeral").value = this.toString();     
    },
    //ligar motor
    start: function() {
        return "O motor foi ligado";
    },
    //Sendo dirigido
    drive: function() {
        return "Carro sendo dirigido";
    },
    //Freiar
    brake: function() {
        return "O freio foi acionado";
    },
    //Desligar motor
    stop: function() {
        return "O motor foi desligado";
    },
    //Retorna as informações do carro
    toString: function(){
        return "Nome: " + this.name + ", " + "Modelo: " + this.carMaker + ", " + "Peso: " + this.weight + ", " + "Cor: " + this.color;
    }
};