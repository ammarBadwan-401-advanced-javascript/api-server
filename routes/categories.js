'use strict';

const express = require('express');
const router = express.Router();
const category = require('../lib/models/categories/categories.collection');

// ***************--- Categories routes ---***************

router.get('/categories', getCategory);
router.get('/categories/:id',getCategory);
router.post('/categories', createCategory);
router.delete('/categories/:id',deleteCategory);
router.put('/categories/:id',updateCategory);

//Functions

function getCategory(req,res,next){
  let idCheck;
  if(req.params.id){
    idCheck = req.params.id;
  }
  category.read(idCheck)
    .then(result=>{
      res.status(200).json(result);
    })
    .catch(next);
}

function createCategory (req,res,next){
  category.create(req.body)
    .then(result =>{
      res.status(201).json(result);
    }).catch(next);
}

function deleteCategory(req,res,next){
  category.delete(req.params.id)
    .then(result=>{
      res.status(200).json(result);
    }).catch(next);
}

function updateCategory(req,res,next){
  category.update(req.params.id,req.body)
    .then(result =>{
      res.status(200).json(result);
    }).catch(next);
}

module.exports = router;