const pizzas = require('../database/pizza.json')

const PizzasController = {
     
     listar: (req, res) => {
          res.render('../src/public/views/pizzas.ejs', { pizzas, busca:'' });
     },

     mostrar: (req, res) => {
         
          let idProxima = null;

          let idAnterior = null;
         
          var id = req.params.id;

          let posicao = pizzas.findIndex(p=>p.id == id);

          let pizza = pizzas.find(p => p.id == id);

          if (posicao == pizzas.length - 1) {
               idProxima = pizzas[0].id;
          } else {
               idProxima = pizzas[posicao +1].id;
          };

         if(posicao ==  0){ 
               idAnterior = pizzas[pizzas.length -1].id;
         }else{
              idAnterior = pizzas[posicao -1].id;
         };

          res.render('../src/public/views/pizza.ejs',{pizza, idAnterior, idProxima});
     },

     buscar: (req, res) => {

          let busca = req.query.q;

          if (busca) {
               let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));

               return res.render('../src/public/views/pizzas.ejs', { pizzas: result, busca });
          } else {
               return res.redirect('/');
          }
     }

};

module.exports = PizzasController;