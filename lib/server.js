'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const timeStamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const errorHandler = require('../middleware/500');
const notFoundHandler = require('../middleware/404');

// Global Middleware
app.use(express.json());
app.use(timeStamp);
app.use(logger);

let products = [];
let categories = [];

//***************--- Products routes ---***************

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

// ***************--- Categories routes ---***************

app.get('/categories', (req,res)=>{
  res.status(200).json(categories);
});

app.get('/categories/:id', (req,res)=>{
  let result;
  categories.forEach(value=>{
    if(value.id === req.params.id){
      result = value;
    }
  });
  if(!result){
    result = {error: 'No category was found'};
  }
  res.status(200).json(result);
});

app.post('/categories',(req,res)=>{
  let {id,name,display_name,description} = req.body;
  let record = {
    id: id,
    name: name,
    display_name: display_name,
    description: description,
  };
  categories.push(record);
  res.status(200).json(record);
});

app.delete('/categories/:id',(req,res)=>{
  categories.forEach((value,number)=>{
    if(value.id === req.params.id){
      categories.splice(number,1);
    }
  });
  res.status(200).json(categories);
});

app.put('/categories/:id',(req,res)=>{
  let {name,display_name,description} = req.body;
  let index;
  categories.forEach((value,number)=>{
    if(value.id === req.params.id){
      index = number;
      value.name = name;
      value.display_name = display_name;
      value.description = description;
    }
  });
  res.status(200).json(categories[index]);
});



// Not found handler
app.use('*',notFoundHandler);

//Error handler
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port)=>{
    const PORT = process.env.PORT || port || 3000;
    app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}`);});
  },
};