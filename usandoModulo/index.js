import {Telefone, Cliente, Endereco, Empresa} from "criacao";

// Criando empresa
const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av. Andromeda", 1010);
const empresa = new Empresa("IA3D", "Infinity Academy 3D", "12345678000199",enderecoEmpresa);

// Criando  os clientes
const clientesDados = [
    {nome: "Mariana", rua: "Abóbora", numero: 987, ddd: ["99999999","99999999"]},
    {nome: "Maria Joaquina", rua: "Av Carrossel", numero: 412, ddd: ["88888888","88888888"]},
    {nome: "Barbara", rua: "Av São João", numero: 789, ddd: ["77777777","77777777"]},
    {nome: "Carl Johnson", rua: "Grove Street", numero: 452, ddd: ["66666666","66666666"]}
];

for (const dados of clientesDados) {
    const endereco = new Endereco("SP", "São José dos Campos", dados.rua, dados.numero);
    const cliente = new Cliente(dados.nome, "00000000000", endereco);

    for (const num of dados.ddd) {
        cliente.telefones.add(new Telefone(num.substring(0,2), num));
    }

    empresa.clientes.add(cliente);
}

console.log(empresa.detalhe());