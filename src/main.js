const express = require('express');

const app = express();

const porta = 8080; 

const PizzaRouter= require ('./router/PizzaRouter')

const path = require ('path');

app.set('view engrine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', PizzaRouter);

module.exports = app;