class Pessoa{
    constructor(pNome, pEndereco){
        this.nome = pNome;
        this.endereco = pEndereco;
        }

    get Nome() { return this.nome};
    set Nome(pNome){ this.nome = pNome};

    get Endereco() { return this.endereco};
    set Endereco(pEndereco){ this.endereco = pEndereco};
        
    toString(){
        return `Nome: ${this.nome} \nEndereco: ${this.endereco}`;
    }
}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pDtNascimento){
        super(pNome. pEndereco);
        this.cpf = pCpf;
        this.dtnascimento = pDtNascimento;
        }

    get Cpf() { return this.cpf};
    set Cpf(pCpf){ this.cpf = pCpf};

    get DtNascimento() { return this.dtnascimento};
    set DtNascimento(pEndereco){ this.dtnascimento = pDtNascimento};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCpf: ${this.cpf} \nNascimento: ${this.dtnascimento}`;
        return retorno; 
    }
}

class Juridica extends Pessoa{
     constructor(pNome, pEndereco, pCnpj, pRazaoSocial){
        super(pNome. pEndereco);
        this.cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial;
        }
    
    get Cnpj() { return this.cnpj};
    set Cnpj(pCnpj){ this.cnpj = pCnpj};
    
    get RazaoSocial() { return this.razaoSocial};
    set RazaoSocial(pRazaoSocial){ this.razaoSocial = pRazaoSocial};
    
    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCnpj: ${this.cnpj} \nRazao Social: ${this.razaoSocial}`;
        return retorno; 
    }
}

var pessoa = new Pessoa("Luiz Carlos Blomer", "Graça Aranha");
console.log(pessoa.toString());

var fisica = new Fisica("Luizete Maria Blomer", "Humberto de Campos", "012345678910", "26/06/1964");
console.log(fisica.toString());

var juridica = new Juridica("Blomer Variedades", "Primeiro de Maio", "10987654321", "Comercial Blomer");
console.log(juridica.toString());