//while
// let loop=0

// while(loop < 10){
//     console.log(loop)
//     loop++
// }

//do while
let teste=0

do{
   teste = Number(prompt("Digite 0 para sair"))
       switch(teste){
           case 0: alert("Saindo do sistema")
           break;
           case 1: alert ("Cadastrando")
           break;
           case 2: alert ("Consultando")
           break;
           default: alert("opção invalida")
           break;
       }
}while(teste != 0)