//függőségek kezelése
var express = require('express')
	, path = require('path')
	, mysql = require('mysql')
	, bodyParser = require('body-parser')
	, route = require('./routes/route')
var app = express()
//adatbázis kapcsolat
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'root',
              database : 'radio'
            });
 
connection.connect();

//konfiguráció
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

//elérési útvonalak
app.get('/', function (req, res) {
  res.send('hello world')
})
app.get('/admin', route.admin);
//szerver elérési portja
app.listen(3000, function(err){
	if (err) throw err
	console.log("A szerver működik, a 3000-es porton figyel!");
});