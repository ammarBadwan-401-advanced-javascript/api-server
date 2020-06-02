'use strict';

const express = require('express');
const router = express.Router();






// ***************--- Categories routes ---***************

let categories = [];
let categoriesId = 0;

router.get('/categories', (req,res)=>{
  res.status(200).json(categories);
});

router.get('/categories/:id', (req,res)=>{
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

router.post('/categories',(req,res)=>{
  let {name,display_name,description} = req.body;
  categoriesId++;
  let record = {
    id: categoriesId.toString(),
    name: name,
    display_name: display_name,
    description: description,
  };
  categories.push(record);
  res.status(200).json(record);
});

router.delete('/categories/:id',(req,res)=>{
  categories.forEach((value,number)=>{
    if(value.id === req.params.id){
      categories.splice(number,1);
    }
  });
  res.status(200).json(categories);
});

router.put('/categories/:id',(req,res)=>{
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

module.exports = router;