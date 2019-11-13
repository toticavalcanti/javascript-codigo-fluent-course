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

//Pega os dados do form do HTML
function getDataFromForm() {
    const companyName = "Loca car";
    const cnpj = "88.610.324/0001-92";
    const carName = "Onix";
    const carPlate = "KYH-7098";
    const driverName = "Walter";
    const driverLicense = "83645";
    //Preenche o objeto company
    companyObject.companyConstructor(companyName, cnpj);
    //Cria o objeto carro a partir do companyObject
    carObject = Object.create(companyObject , {});
    //Adiciona propriedades ao carro
    carObject.name = carName;
    carObject.plate = carPlate;
    //Adiciona métodos ao carro
    carObject.start = function() { return "Engine started"; };
    carObject.stop = function() { return "Engine switched off"; };
    carObject.toString = function(){return "Nome do carro: " + this.name + ", " + "Placa: " + this.plate;};
    //Cria o objeto motorista (driver)
    driverObject =  Object.assign( {}, companyObject, carObject );
    driverObject.driverName = driverName;
    driverObject.driverLicense = driverLicense;
    driverObject.toString = function(){return "Nome do motorista: " + this.driverName + ", " + "Placa: " + this.driverLicense;};
    //Chama a função showInfo()
    showInfo(carObject, companyObject, driverObject);
};

//mostra as informações nos campos de saída do HTML
function showInfo(carObject, companyObject, driverObject) {
    document.getElementById("nomeEmpresa").value = companyObject.companyName;
    document.getElementById("CNPJEmpresa").value = companyObject.cnpj;
    document.getElementById("informacaoGeralEmpresa").value = companyObject.toString();   
    document.getElementById("informacaoGeralCarro").value = carObject.toString();  
    document.getElementById("metodoLigarMotor").value = carObject.start();    
};

