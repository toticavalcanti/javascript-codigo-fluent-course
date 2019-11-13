function car() {
	//pega os valores do form no html e atribui as propriedades do carro
    const name = document.getElementById("nomeCarroInput").value;
    const carMaker = document.getElementById("montadoraInput").value;
    const weight = document.getElementById("pesoInput").value;
    const color = document.getElementById("corInput").value;
    //Mostra nos campos de saída do form
    document.getElementById("nomeCarro").value = name;
    document.getElementById("montadora").value = carMaker;
    document.getElementById("peso").value = weight;
    document.getElementById("cor").value = color;
}