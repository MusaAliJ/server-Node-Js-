console.log("Starting Server");

var express = require("express");
var hbs = require("hbs");
var app = express();
app.set('view engine', 'hbs');




app.use(express.static(__dirname + "/temp"));

app.get('/', (req, res)=>{
    res.send("<h1> Homepage</h1>");
});

app.get('/about', (req,res)=>{
    res.render('about.hbs',{
        web:"Node Practice",
        heading:"Practice"

    });
});




app.listen(3000);