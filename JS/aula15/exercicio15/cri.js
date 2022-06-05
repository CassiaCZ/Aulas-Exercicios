//exercicio 15
// function tabuada(numero){

//     let tabuada = 0
//     if(typeof numero !== 'number'){
//         alert('digite um numero')
//     }else{
//     if(numero <1 || numero >10 ){
//         alert('digite um numero entre 1 e 10')
//     }else{
//     while(tabuada <=10){
//         console.log(`tabuada do ${numero}`)
//         console.log(`${numero} x ${tabuada} = ${numero*tabuada}`)
//         tabuada ++
//     }}
// }}
// tabuada(3)

//exercicio 15 parte2

window.onload = function(){

const tab = document.querySelector('#tabuada')
const btn = document.querySelector('#calcular')
const resp = document.querySelector('#resposta')

btn.addEventListener('click', function(){
  let numero = Number(tab.value)
  let tabuada = 0

    if( isNaN(numero) ){
        resp.innerHTML = 'Digite um numero'
    }else{
    if(numero <1 || numero >10){
        resp.innerHTML='Digite um numero de 0 a 10'
    }else{
        console.log(`tabuada do ${numero}`)
        // resp.innerHTML = `Tabuada do ${tan.value}`
    while(tabuada <=10){
        
        resp.innerHTML += ` <br> ${numero} x ${tabuada} = ${numero*tabuada}`
        tabuada ++
        
    }}}
})

}