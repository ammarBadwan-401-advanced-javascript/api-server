'use strict';

const express = require('express');
const router = express.Router();
const product = require('../lib/models/products/products.collection');

// ***************--- products routes ---***************

router.get('/products', getProduct);
router.get('/products/:id',getProduct);
router.post('/products', createProduct);
router.delete('/products/:id',deleteProduct);
router.put('/products/:id',updateProduct);

//Functions

function getProduct(req,res,next){
  let idCheck;
  if(req.params.id){
    idCheck = req.params.id;
  }
  product.read(idCheck)
    .then(result=>{
      res.status(200).json(result);
    })
    .catch(next);
}

function createProduct (req,res,next){
  product.create(req.body)
    .then(result =>{
      res.status(201).json(result);
    }).catch(next);
}

function deleteProduct(req,res,next){
  product.delete(req.params.id)
    .then(result=>{
      res.status(200).json(result);
    }).catch(next);
}

function updateProduct(req,res,next){
  product.update(req.params.id,req.body)
    .then(result =>{
      res.status(200).json(result);
    }).catch(next);
}

module.exports = router;