//Constroi o objeto carro
function CarObject(n, f, p, c) {
    this.name = n;
    this.carMaker = f;
    this.weight = p;
    this.color = c;
};

//Pega os dados do form do HTML
function getDataFromForm() {
    const name = document.getElementById("nomeCarroInput").value;
    const carMaker = document.getElementById("montadoraInput").value;
    const weight = document.getElementById("pesoInput").value;
    const color = document.getElementById("corInput").value;
    const car = new CarObject(name, carMaker, weight, color);
    showInfo(car);
};
    
//mostra as informações nos campos de saída do HTML
function showInfo(c) {
    document.getElementById("nomeCarro").value = c.name;
    document.getElementById("montadora").value = c.carMaker;
    document.getElementById("peso").value = c.weight;
    document.getElementById("cor").value = c.color;
    document.getElementById("motorLigado").value = start();
    document.getElementById("sendoDirigido").value = drive(); 
    document.getElementById("freiado").value = brake();   
    document.getElementById("motorDesligado").value = stop();   
    document.getElementById("informacaoGeral").value = info(c);     
}

//ligar motor
function start() {
    return "O motor foi ligado";
};
//Sendo dirigido
function drive() {
    return "O carro está sendo dirigido";
};
//Freiar    
function brake() {
    return "O freio foi acionado";
};
//Desligar motor
function stop() {
        return "O motor foi desligado";
};
//Retorna as informações do carro
function info(c){
    return "Nome: " + c.name + ", " + "Fabricante: " + c.carMaker + ", " + "Peso: " + c.weight + ", " + "Cor: " + c.color;
};
