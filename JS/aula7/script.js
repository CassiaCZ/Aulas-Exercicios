// alert("estou funcionando")

//funcao literal
// function teste(){
//     let nome = "marcelo";
//     return nome;
// }
// console.log(teste ());


// let msg = (nome)=> { return nome}; //arrow

// console.log(msg("cassia"));

//funcao autoexecutaveis
// (function(){
//     alert("esta funcão me chamou sozinha")
// })()

//com parametros
// (function(produto, preco){
//     alert("o produto é "+produto+ " e o preço é R$ "+preco)
// })("biscoito",2.35)

//parseint - inteiro, parsefloat - decimais, number -inteiros e decimais
let v1 = prompt("digite o valor 1");
let v2 = prompt("digite o valor 2");

const soma = (valor1, valor2)=>{
    let resultado = parseInt(valor1) + parseInt(valor2);
    console.log(resultado);
}
soma(v1, v2);
