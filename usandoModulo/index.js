import {Telefone, Cliente, Endereco, Empresa} from "criacao";

// Criar empresa
const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av. Andromeda", 1000);
const empresa = new Empresa("ABC LTDA", "Mercado Online", "12345678000199", enderecoEmpresa);

// Criar clientes
const clientesDados = [
    {nome: "João", rua: "Av Andromeda", numero: 987, ddd: ["99999999","99999999"]},
    {nome: "Gabriel", rua: "Av Andromeda", numero: 412, ddd: ["88888888","88888888"]},
    {nome: "Barbara", rua: "Av São João", numero: 789, ddd: ["77777777","77777777"]},
    {nome: "Márcia", rua: "Av Andromeda", numero: 452, ddd: ["66666666","66666666"]}
];

for (const dados of clientesDados) {
    const endereco = new Endereco("SP", "São José dos Campos", dados.rua, dados.numero);
    const cliente = new Cliente(dados.nome, "00000000000", endereco);

    for (const num of dados.ddd) {
        cliente.telefones.add(new Telefone(num.substring(0,2), num));
    }

    empresa.clientes.add(cliente);
}

// Mostrar detalhes
console.log(empresa.detalhe());