const calc = require('../calculadora/calculadora');

function index(req, res) {
    let err = req.query.erro_valor;
    res.render('index.html', {err});
}

function resultado(req, res) {
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let op = req.body.op;
    let n3;
    let operacao = calc.nomeOperador(op);
    if(isNaN(n1) || isNaN(n2)){
        res.redirect('/?erro_valor=true');
    }else{
        n3 = calc.calcular(n1, n2, op);
        res.render('resultado.html', {n1, n2, operacao, n3});
    }
}

module.exports = {
    index,
    resultado
}