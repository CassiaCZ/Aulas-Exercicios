let palavra = "Cristina";

(function(){

    document.write(`Esta palavra tem ${palavra.length} caracteres <br>`)
    document.write(`A palavra ${palavra} ficou  ${palavra.toUpperCase()} <br>`)
    document.write(`A letra '${palavra[2]}' é o 3º caracter <br>`)
    document.write(`${palavra} ficou ${palavra.replace(palavra[2], "X")}`)


})(palavra)
