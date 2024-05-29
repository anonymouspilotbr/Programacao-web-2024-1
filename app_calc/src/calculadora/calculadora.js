function calcular(n1, n2, op) {
    let resultado;
    switch (op) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n1 / n2;
            break;
    }
    return resultado;
}

function nomeOperador(op) {
    let operacao;
    switch (op) {
        case '+':
            operacao = "soma";
            break;
        case '-':
            operacao = "subtração";
            break;
        case '*':
            operacao = "multiplicação";
            break;
        case '/':
            operacao = "divisão";
            break;
    }
    return operacao;
}

module.exports = {
    calcular,
    nomeOperador
}