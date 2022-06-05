window.onload = function(){
    
frutas = [
    {fruta : 'Mamão Papaia', preco : 3.59},
    {fruta : 'Laranja', preco : 2.45},
    {fruta : 'MManga', preco : 4.49},
    {fruta : 'Melão', preco : 5.99},
    {fruta : 'Melancia', preco : 9.00}
]

const produtos = document.querySelectorAll("#produtos")
const frutaCesta = document.querySelectorAll("#cestaDoCliente")
    
produtos.forEach(function(lista){
lista.addEventListener('click', function(item){
        alert(item.target.dataset.preco)
        let listinha = document.createElement('li')
        lista.appendChild(listinha).setAttribute('class', 'frutas')})   
})
    
   
    function calcular(Produtos, soma){
        
        const preco = document.querySelectorAll(`#${Produtos} > li`)
        const total = document.querySelector(`#${soma}`)
        let valorTotal=0
            for(let p of preco){
             valorTotal += Number(p.dataset.preco)
           
            // console.log(p.dataset.preco)
            }
            total.value = totalzinho
            
            
         }
       
}
