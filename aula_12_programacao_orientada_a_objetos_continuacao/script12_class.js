class Car {
    ConstructorCar(n, p){
        this.name = n;
        this.plate = p;
    };

    start(){
    	return "O motor foi ligado";
    };

    drive(){
    	return "Carro sendo dirigido";
    };

    brake(){
    	return "O freio foi acionado";
    };

    stop(){
    	return "O motor foi desligado";
    }

    toString(){
    	return "Nome: " + this.name + ", " + "Placa: " + this.plate
    }
}

//Pega os dados do form do HTML
function getDataFromForm() {
    const name = document.getElementById("nomeCarroInput").value;
    const plate = document.getElementById("placaCarroInput").value;

    //chama o construtor do carro pra instanciar um objeto carro
    const car = new Car(name, plate);
}
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