class Car {
    constructor(n, p){
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
};

//Pega os dados do form do HTML
function getDataFromForm() {
    const name = document.getElementById("nomeCarroInput").value;
    const plate = document.getElementById("placaCarroInput").value;
    //chama o construtor do carro pra instanciar um objeto carro
    const car = new Car(name, plate);
    show_info(car);
};

//mostra as informações nos campos de saída do HTML
function show_info(c) {
    document.getElementById("nomeCarro").value = c.name;
    document.getElementById("placaCarro").value = c.plate;
    document.getElementById("motorLigado").value = c.start();    
}