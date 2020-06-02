'use strict';

const express = require('express');
const router = express.Router();

//***************--- Products routes ---***************
let productsId = 0;
let products = [];

router.get('/products', (req,res)=>{
  res.status(200).json(products);
});
  
router.get('/products/:id', (req,res)=>{
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
  
router.post('/products',(req,res)=>{
  let {category,name,display_name,description} = req.body;
  productsId++;
  let record = {
    id: productsId.toString(),
    category: category,
    name: name,
    display_name: display_name,
    description: description,
  };
  products.push(record);
  res.status(200).json(record);
});
  
router.delete('/products/:id',(req,res)=>{
  products.forEach((value,number)=>{
    if(value.id === req.params.id){
      products.splice(number,1);
    }
  });
  res.status(200).json(products);
});
  
router.put('/products/:id',(req,res)=>{
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

module.exports = router;