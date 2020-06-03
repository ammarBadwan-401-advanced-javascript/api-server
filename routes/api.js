'use strict';

const express = require('express');
const router = express.Router();
const getModel = require('../middleware/getModel');


router.param('model',getModel);

// ***************--- The Routes ---***************

router.get('/:model', getCollection);
router.get('/:model/:id',getCollection);
router.post('/:model', createCollection);
router.delete('/:model/:id',deleteCollection);
router.put('/:model/:id',updateCollection);

// ***************--- The Functions ---***************

function getCollection(req,res,next){
  let idCheck;
  if(req.params.id){
    idCheck = req.params.id;
  }
  req.model
    .read(idCheck)
    .then(result=>{
      res.status(200).json(result);
    })
    .catch(next);
}

function createCollection (req,res,next){
  req.model
    .create(req.body)
    .then(result =>{
      res.status(201).json(result);
    }).catch(next);
}

function deleteCollection(req,res,next){
  req.model
    .delete(req.params.id)
    .then(result=>{
      res.status(200).json(result);
    }).catch(next);
}

function updateCollection(req,res,next){
  req.model
    .update(req.params.id,req.body)
    .then(result =>{
      res.status(200).json(result);
    }).catch(next);
}

module.exports = router;