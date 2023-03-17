//Callback Function = Caixa de códigos que é executada depois de uma determinada ação

function exibir(num) {
    console.log(`A operação resultou em: ${num}`);
}

function soma(a, b, callback) {
    var op = a + b
    callback(op);
}

function multiplicacao(a, b, callback) {
    var op = a * b;
    console.log(op);
}

soma(2, 2, exibir)

multiplicacao(2, 4)