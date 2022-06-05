window.onload = function(){

const cxProduto = document.querySelector('#produto')
const btnCad = document.querySelector('#cadastrar')
const lista = document.querySelector('#listaproduto')

btnCad.addEventListener('click', function(){

    let lis = document.createElement('li')
       lista.appendChild(lis).setAttribute('class', 'listafrutas')
       lista.appendChild(lis).textContent = cxProduto.value


})


}