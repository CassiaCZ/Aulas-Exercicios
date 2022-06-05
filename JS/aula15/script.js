//typeof

//let m = true
// console.log(typeof m )

// if ( typeof m  === 'number'){
//     console.log(`o dado informado eh um number: ${m}`)
// }else{
//     console.log(`o dado informado nao eh um number: ${m} : ${typeof m}`)
// }
  
//eventos de manipulação

window.onload=function (){
    // alert("estou funcionando")//confirmar se esta funcionando
    const botao = document.getElementById('btn')
    const txbox = document.querySelector('#txbox')
    const caixa = document.querySelector('#caixa')
    // console.log(botao)
    botao.addEventListener('click',function(){
        caixa.innerHTML += ' ' +txbox.value + ' '
    })

}