// function Pessoa(nome){

//     this.nome = nome

// }

// Pessoa.prototype.mgs = function(){
//     alert("Olá");
// } //tds propriedade pessoa ira herdar esta função

// let NovaPessoa = new Pessoa("jose")
// let OutraPessoa = new Pessoa("maria")

// NovaPessoa.mgs()
// OutraPessoa.mgs()
// // console.log(NovaPessoa.nome)
// console.log(NovaPessoa);

// let Pessoa2 = {
//     'nome' : '',
//     'idade' : ''
// }
// // console.log(Pessoa2)
// Pessoa2.__proto__.msg = function(){
//     alert("ola " + Pessoa2.nome);
// }
// let P = Pessoa2
// P.nome = "Cassia"
// P.msg()
// console.log(P)

let Pessoa3 =[
    {
        'nome': 'Cassia',
        'idade': 31,
        'sexo': 'F' 
    },
    {
        'nome': 'Felipe',
        'idade': 23,
        'sexo': 'M' 
    },
    {
        'nome': 'Leila',
        'idade': 51,
        'sexo': 'F' 
    },
    {
        'nome': 'Regi',
        'idade': 51,
        'sexo': 'M' 
    },
]
let Npessoa = Pessoa3
console.log(`Existem ${Npessoa.length} cadastradas`)
// console.log(Npessoa[1].nome)