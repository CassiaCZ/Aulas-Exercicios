// let nome = prompt("Digite seu nome");
// let altura = prompt("Digite sua altura");
// let peso = 

//resposta

function valorImc(nome, altura, peso){
    a = Number(altura);
    p = Number (peso);

    let imc = p / (a*2);

    // document.write("Nome..: ", nome ,"<br>");
    // document.write("Altura..: ", altura , "<br>");
    // document.write("Peso..: ", peso, "<br>");
    // document.write("IMC..: ", imc, "<br>");

    console.log("Nome..: ", nome);
    console.log("Altura..: ", altura);
    console.log("Peso..: ", peso);
    console.log("IMC..: ", imc);

}

pesoPessoa = prompt("Digite seu peso");
alturaPessoa = prompt("Digite sua altura");
nomePessoa = prompt("Digite seu nome");

valorImc(nomePessoa, alturaPessoa, nomePessoa);