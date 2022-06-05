function calcular (idProduto, resultado){
    const preco = document.querySelectorAll(`#${idProduto} > li`) // pai passando filho
    const valorResultado = document.querySelector(`#${resultado}`) // cx de textp
    let totalzinho=0 

    for( let i of preco){
        totalzinho += Number(i.dataset.preco)
        // console.log(i.dataset.preco)
    }
    valorResultado.value = totalzinho

}
function removerProdutos(id){
    const lista = document.querySelectorAll(`#${id} > li`)
    for(let produto of lista){
        produto.addEventListener('click', function(){
            produto.remove()
            calcular('produtos','somatotal');

        })
    }
}
removerProdutos('produtos');
calcular('produtos','somatotal');


export{calcular, removerProdutos}

