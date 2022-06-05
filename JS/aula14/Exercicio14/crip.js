let frutas = [
   {fruta: "maça", preço: 2.29},
   {fruta: "melao", preço: 5.49}
]


function listaFrutas (f){
    for (let produto of frutas){
        for(let p in produto)
        console.log(` ${p} -> ${produto[p]}`)}
}
listaFrutas(frutas)