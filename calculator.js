const express = require('express')
const bodyParser= require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
  //res.sendFile('calculator.html');
  res.sendFile(__dirname+"/calculator.html");
});

app.post('/', (req, res) => {

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result= num1+num2;

    res.send('The result is: '+result);
  });

app.get('/about', (req, res) => {
    res.send('Ujjal Das');
  });

  app.get('/contact', (req, res) => {
    res.send('0000000000');
  });
app.listen(3000, function()  {
  console.log("Server is running on port 3000");
});