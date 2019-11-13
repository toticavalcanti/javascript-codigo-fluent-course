//Pega os dados do form do HTML
function getDataFromForm() {
    const companyName = document.getElementById("nomeEmpresaInput").value;
    const cnpj = document.getElementById("CNPJEmpresaInput").value;
    const carName = document.getElementById("nomeCarroInput").value;
    const carPlate = document.getElementById("placaCarroInput").value;
    const driverName = document.getElementById("nomeMotoristaInput").value;
    const driverLicense = document.getElementById("carteiraMotoristaInput").value;
    //Preenche o objeto company
    companyObject.companyConstructor(companyName, cnpj);
    //Cria o objeto carro a partir do companyObject
    carObject = Object.create(companyObject , {});
    //Adiciona propriedades ao carro
    carObject.name = carName;
    carObject.plate = carPlate;
    //Adiciona métodos ao carro
    carObject.start = function() { return "O motor foi ligado"; };
    carObject.stop = function() { return "O motor foi desligado"; };
    carObject.toString = function(){return "Nome do carro: " + this.name + ", " + "Placa: " + this.plate;};

    driverObject = Object.assign({}, companyObject , carObject);
    driverObject.driverName = driverName;
    driverObject.driverLicense = driverLicense;
    driverObject.toString = function(){return "Nome do motorista: " + this.driverName + ", " + "Carteira de motorista: " + this.driverLicense;};
    //Chama a função showInfo()
    showInfo(carObject, companyObject, driverObject);
};

//mostra as informações nos campos de saída do HTML
function showInfo(carObject, companyObject) {
    document.getElementById("informacaoGeralEmpresa").value = companyObject.toString();   
    document.getElementById("informacaoGeralCarro").value = carObject.toString();  
    document.getElementById("metodoLigarMotor").value = carObject.start();  
    document.getElementById("informacaoGeralMotorista").value = driverObject.toString();    
};

//Constroi o objeto company (empresa)
const companyObject = {
    companyConstructor: function(name, cnpj) {
        this.companyName = name;    
        this.cnpj = cnpj;
    },
    //Retorna as informações da empresa
    toString: function(){
        return "Empresa: " + this.companyName + ", " + "CNPJ: " + this.cnpj;
    }
};