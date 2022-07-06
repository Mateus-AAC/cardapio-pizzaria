const express = require('express');

const app = express();

const PizzaRouter= require ('./router/PizzaRouter')

const path = require ('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', PizzaRouter);

module.exports = app;
