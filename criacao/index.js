class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.#cpf = cpf
        this.telefones = new Set()
    }

    get cpf() {
    return this.#cpf;
    }

    getNomeMaiusculo() {return this.nome.toUpperCase();}
    getNomeMinusculo() {return this.nome.toLowerCase();}
    getEnderecoMaiusculo() {return this.endereco.toUpperCase();}
    getEnderecoMinusculo() {return this.endereco.toLowerCase();}
    getTelefonesMaiusculo() {return this.telefones.toUpperCase();}
    getTelefonesMinusculo() {return this.telefones.toLowerCase();}


}

class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoMaiusculo() {return this.estado.toUpperCase();}
    getEstadoMinusculo() {return this.estado.toLowerCase();}
    getCidadeMaiusculo() {return this.cidade.toUpperCase();}
    getCidadeMinusculo() {return this.cidade.toLowerCase();}
    getRuaMaiusculo() {return this.rua.toUpperCase();}
    getRuaMinusculo() {return this.rua.toLowerCase();}
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj() {return this.#cnpj;}

    
    getEnderecoMaiusculo() {return this.endereco.toUpperCase();}
    getEnderecoMinusculo() {return this.endereco.toLowerCase();}
    
    getNomeFantasiaMaiusculo() {return this.nomeFantasia.toUpperCase();}
    getNomeFantasiaMinusculo() {return this.nomeFantasia.toLowerCase();}
    
    getRazaoSocialMaiusculo() {return this.razaoSocial.toUpperCase();}
    getRazaoSocialMinusculo() {return this.razaoSocial.toLowerCase();}

    detalhe() {
        let resultado = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n--------------------\n`;

        for (const cliente of this.clientes) {
            const end = cliente.endereco;
            const telefones = [...cliente.telefones].map(t => `ddd: ${t.ddd} numero: ${t.numero}`).join("\n");
            
            resultado += `\nNome: ${cliente.nome}\n`;
            resultado += `Estado: ${end.estado} cidade: ${end.cidade} rua: ${end.rua} numero: ${end.numero}\n`;
            resultado += `${telefones}\n`;
        }

        return resultado.trim();
    }
}

export {Cliente, Telefone, Empresa, Endereco}