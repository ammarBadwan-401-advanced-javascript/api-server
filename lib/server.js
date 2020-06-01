'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// Global Middleware
app.use(express.json());

let products = [];
let categories = [];

//Products routes

app.get('/products', (req,res)=>{
  res.status(200).json(products);
});

app.get('/products/:id', (req,res)=>{
  let result;
  products.forEach(value=>{
    if(value.id === req.params.id){
      result = value;
    }
  });
  if(!result){
    result = {error: 'No product was found'};
  }
  res.status(200).json(result);
});

app.post('/products',(req,res)=>{
  let {id,category,name,display_name,description} = req.body;
  console.log('post from products');
  let record = {
    id: id,
    category: category,
    name: name,
    display_name: display_name,
    description: description,
  };
  products.push(record);
  res.status(200).json(record);
});

app.delete('/products/:id',(req,res)=>{
  products.forEach((value,number)=>{
    if(value.id === req.params.id){
      products.splice(number,1);
    }
  });
  res.status(200).json(products);
});

app.put('/products/:id',(req,res)=>{
  let {category,name,display_name,description} = req.body;
  let index;
  products.forEach((value,number)=>{
    if(value.id === req.params.id){
      index = number;
      value.category = category;
      value.name = name;
      value.display_name = display_name;
      value.description = description;
    }
  });

  res.status(200).json(products[index]);
});

// Categories routes

app.get('/categories', (req,res)=>{
  res.status(200).json(categories);
});









module.exports = {
  server: app,
  start: (port)=>{
    const PORT = process.env.PORT || port || 3000;
    app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}`);});
  },
};