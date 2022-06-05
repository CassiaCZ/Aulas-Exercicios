let frutas = ["manga", "morango", "maça", "banana", "melão"]

const listaFRutas = (fruta, novaFruta, indice)=>{
    console.log("Quantidade de elementos do array", fruta.length)
    console.log(`Você escolheu o indice ${indice} que é o elemento ${fruta[indice]}`)
    console.log(`A fruta ${novaFruta} foi inserido no array`)
    fruta.push(novaFruta)
    console.log('A quantidade de elementos atual do array é de ..: ', fruta.length)
}

listaFRutas(frutas, "abacaxi", 4)
listaFRutas(frutas, "acerola", 2)