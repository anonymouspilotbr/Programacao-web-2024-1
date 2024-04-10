const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/', function(req, res){
    res.send('Página inicial\n Calculadora');
});

app.get('/somar/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let soma = calc.somar(a, b);
    res.send(soma.toString());
});

app.get('/subtrair/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let subtracao = calc.sub(a, b);
    res.send(subtracao.toString());
});

app.get('/multiplicar/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let mult = calc.mult(a, b);
    res.send(mult.toString());
});

app.get('/dividir/:a/:b', function(req, res){
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let divisao = calc.dividir(a, b);
    res.send(divisao.toString());
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})