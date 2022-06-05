
// for (let x=0; x <=10; x++)
//    console.log(`O valor da interaçao é ${x}`)

//for in

// let Pessoas = {
//     nome:"Steven Roger",
//     idade: 90,
//     heroi: "capitao america"
// }
// // for (let propriedades in Pessoas){
//     //console.log(propriedades) //somentes propriedades
//     // console.log(Pessoas.nome)
//     // console.log(Pessoas.idade)
//     // console.log(Pessoas.heroi)
// }


//array assossiativo - ["nome"=>"marcelo"]


//for of

// let frutas = ["melancia", "manga", "banana"]
// for (let nomeFrutas of frutas){
//     // console.log(nomeFrutas)
// }
// for (let x=0; x < frutas.length; x++)
//    console.log(`O nome da fruta é ${frutas[x]}`)

let Herois = [
    {
        nome: "Steven Roger",
        heroi: "Capitão América",
    },
    {
        nome: "Tony Stark",
        heroi: "Homem de Ferro",
    }
]
Herois.push({nome:"Diana", heroi:"Mulher Maravilha"})

// let marvel = Herois [1].nome
// console.log(marvel)

for(let marvel of Herois) {
   //console.log(marvel)
   for(let m in marvel) {
//    console.log(marvel[m])}
      console.log( `${m} -> ${marvel[m]}` )} //completo

} // for in para ler objetos