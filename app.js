console.log("Starting Server");

var express = require("express");
var app = express();
app.use(express.static(__dirname + "/temp"));

app.get('/', (req,res)=>{
    res.send("<h1> Homepage</h1>");
});

app.get('/about',(req,res)=>{
    
    res.send({
        Name:"Musavir",
        Work:"Web Developer",
        OtherNames:["Musa", "Mushi"]
    })
});




app.listen(3000);