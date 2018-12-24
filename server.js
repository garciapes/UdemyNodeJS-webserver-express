const express = require('express');

const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use (express.static( __dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// app.get('/', function (req, res) {

//     res.render('home', {
//         nombre: 'Pedro',
//         anio: new Date().getFullYear()
//     });

// });

// app.get('/about', function (req, res) {

//     res.render('about', {
//         anio: new Date().getFullYear()
//     });

// });

app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'pedro'
    });

});

app.get('/about', function (req, res) {

    res.render('about');

});

// app.get('/', function (req, res) {
//     //res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Pedro',
//         edad: 49,
//         url: req.url
//     };
  
//     res.send(salida);

// });

// app.get('/data', function (req, res) {
//     res.send('Hola Data');
// });
 
// app.listen(3000, () => {
//     console.log('Escuchando peticiones en el puerto 3000');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

