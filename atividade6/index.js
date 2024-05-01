const express           = require('express');
const mustacheExpress   = require('mustache-express');
const app               = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.use(express.static(__dirname + '/'));

app.get('/dados.html', (req, res) => {
    res.sendFile('dados.html', { root: __dirname + '/views' });
});

app.get('/index.html', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views' });
});

app.post('/dados', (req, res) => {
    const formData = {
        inputName: req.body.inputName,
        inputAddress: req.body.inputAddress,
        inputPhone: req.body.inputPhone,
        inputDate: req.body.inputDate
    }
    const queryString = Object.keys(formData).map(key => key + '=' + formData[key]).join('&');
    res.redirect(`/dados.html?${queryString}`);
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log("app rodando na porta " + PORT);
})
