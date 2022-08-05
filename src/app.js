const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.port || 8000;

const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', templatePath)


app.get("/" , (req,res)=>{
    res.render('index');
});

app.get("/about" , (req,res)=>{
    res.render('about');
});


app.get("/weather" , (req,res)=>{
    res.render('weather');
});


app.get("*" , (req,res)=>{
    res.render('404error');
});


app.listen(port, ()=>{
    console.log(` listening to port at ${port}`);
});