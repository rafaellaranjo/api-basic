var express = require('express');
var apiRouterV1 = express.Router();

var produtos = [
  {"id": 1, "descricao": "camiseta", "marca": "nike", "preco": "49.99"},
  {"id": 2, "descricao": "Calça jeans", "marca": "Levi's", "preco": "89.99"},
  {"id": 3, "descricao": "Tênis", "marca": "Adidas", "preco": "99.99"},
  {"id": 4, "descricao": "Bermuda", "marca": "Vans", "preco": "39.99"},
  {"id": 5, "descricao": "Camisa", "marca": "Ralph Lauren", "preco": "109.99"},
];

apiRouterV1.get('/produtos', function(req, res, next) {
  res.json(produtos);
});

apiRouterV1.get('/produtos/:id', function(req, res, next) {
  let id = Number.parseInt(req.params.id);
  if (id) {
    let idx = produtos.findIndex(p => p.id === id);
    if (idx >=0 ) {
      res.json(produtos[idx]);
    } else {
      res.status(404).json({message: "Produto não encontrado"});
    }
  } else {
    res.status(404).json({message: "Produto não encontrado"});
  }
});

apiRouterV1.post('/produtos', function(req, res, next) {
  let produto = req.body;
  let newId = Math.max(...produtos.map(o => o.id)) + 1;
  produto.id = newId;
  produtos.push(produto);
  res.status(201).json({message: "Produto inserido com sucesso!", data: {id: newId}});
});

apiRouterV1.delete('/produtos/:id', function(req, res, next) {
  let id = Number.parseInt(req.params.id);
  if (id) {
    let idx = produtos.findIndex(p => p.id === id);
    if (idx >=0 ) {
      produtos.splice(idx, 1);
      res.status(204).json({message: "Produto excluído com sucesso!"});
    }
  } else {
    res.status(404).json({message: "Produto não encontrado"});
  }
});

apiRouterV1.put('/produtos/:id', function(req, res, next) {
  let id = Number.parseInt(req.params.id);
  let produto = req.body;
  if (id) {
    let idx = produtos.findIndex(p => p.id === id);
    if (idx >=0 ) {
      produtos[idx].descricao = produto.descricao;
      produtos[idx].marca = produto.marca;
      produtos[idx].preco = produto.preco;
      res.status(200).json({message: "Produto alterado com sucesso!", data: {produto: produtos[idx]}});
    }
  } else {
    res.status(404).json({message: "Produto não encontrado"});
  }
});

module.exports = apiRouterV1;
