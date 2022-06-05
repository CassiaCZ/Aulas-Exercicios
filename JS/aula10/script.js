//match() procura uma palavra em uma string - traz mais info que search
//g/i/m - global /sem case-sensitive / retornar uma string - tabela aula 10
   let nome = "Cassia Cristina Zerbinatti"
//    console.log( nome.match("Cristina") )  // ou só um caracter

//search() procula pela ocorrancia e retorna a posição - quase igual match
    // console.log( nome.search(/R/i) )  //g/i/m 

//replace() substitui uma string por outra
    let a = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Tenetur temporibus totam nulla necessitatibus, repellendus excepturi 
    illo  commodi praesentium inventore ut in. 
    `
    // // let aOutra = a.replace("i", "y")
    // let aOutra = a.replace(/i/gi, "y") //usando g/i/m para trocar tds os i
    // console.log( aOutra )

//localeCopare() efetua a comparaçao entre duas string
    let gato ="gato"
    let otogato = "gato"
    // console.log(gato.localeCompare(otogato))

//toString() converte uma valor qlqr em uma string
    let num = Number('10')
    
    // console.log(num.toString())

//toLowerCase() converte uma string inteira para caracteres minusculos
    // console.log(a.toLowerCase())

//toUpperCase() converte uma string inteira para caracteres maiusculas
    // console.log(a.toUpperCase())

//trim() remove espaços antes e depois (nas extremidades) da string especificada
    
//NaN - não é um numero - verificar se o usuario envio realmente um numero
    let numero = Number("oio")
     // console.log(numero)
    // console.log(isNaN(numero)) //retorna verdadeiro(nao é numero) ou falso(numero)

//toFixed() analisa um valor flutuante e retorna uma string 
    let valor = 2.456
    // console.log( valor.toFixed(1) ) // qts casas decimal mostrar

//toLocalString() conversao de valores - lingua e moeda local
    // console.log(valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))