
function gerarCobrinha(tam, matriz){
    let meioMatriz = tam / 2;
    meioMatriz = meioMatriz.toFixed();
    meioMatriz--
    matriz[meioMatriz][meioMatriz] = 1;
    return matriz
}

function gerarMatriz(tam){
    if(tam % 2 == 0){
        console.log('Só é possível criar matrizes impares!');
        return
    }
    let matriz = [];
    let linha = [];

    for(let i = 0; i < tam; i++){
        for(let a = 0; a < tam; a++){
            linha.push(0);
        }
        matriz.push(linha);
        linha = [];
    }

    gerarCobrinha(tam, matriz);

    return matriz
}

console.log(gerarMatriz(5))