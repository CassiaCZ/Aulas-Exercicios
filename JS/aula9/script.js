//concat () junta dois ou mais arrays
// let nomes = ["Marcelo", "Suelem", "Raphael", "Você", "Nós todos"];
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];

// let todosOsNomes = nomes.concat(nomes2)

// console.log(todosOsNomes)

// let qtArraynome = `o array nomes possui ${nomes.length} elementos` //verificar qt elementos
// console.log(qtArraynome)


//indexOf() procura determinado elemento e retorna uma posição
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];
// // console.log(nomes2.indexOf("Maria"));
// let buscaNome="José";
// if(nomes2.indexOf(buscaNome) != (-1)){
//     alert(`Eu encontrei o nome ${buscaNome} e esta na posição 
//     ${nomes2.indexOf(buscaNome)}`);
// }else{
//     alert(`nao encontrei o ${buscaNome}`);
// }

//join() transforma elementos de uma array em uma string
let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];
// console.log(nomes2)
// console.log(nomes2.join())

//push() insere elementos no fim do array
// let frutas = ["uva", "pera","jaca",]
// frutas.push("maça","laranja")
// console.log(frutas)

//pop() remove o ultimo elemento
// let frutas = ["uva", "pera","jaca",]
// frutas.pop();
// console.log(frutas)

//reverse() inverte a ordem dos elementos de uma array
// let frutas = ["uva", "pera","jaca",]
// frutas.reverse()
// console.log(frutas)

//shift() remove o primeiro elemento de um array
// let frutas = ["uva", "pera","jaca",]
// frutas.shift()
// console.log(frutas)

//sort ordena elementos de um array em ordem crescente
// let frutas = ["uva", "pera","jaca",]
// frutas.sort()
// console.log(frutas)

//toString() converte um array em uma string e retorna esta string
let frutas = ["uva", "pera","jaca",]
// console.log(frutas.toString())

//unshift() insere um elemento no inicio do array

//splice() corta ou remove um elemento do array em um ponto indicado
let nomes = ["Pedro", "Paulo", "Maria", "Samanta"];
let novalista = nomes.splice(3)
console.log(nomes) //pra ver quem ficou
console.log(novalista)  //pra ver quem foi removido
