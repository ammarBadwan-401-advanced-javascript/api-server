'use strict';



function getModel(req,res,next){
  let model = req.params.model;
  let collection;
  try {
    collection = require(`../lib/models/${model}/${model}.collection`);
  } catch (err) {err;}
  switch(model){
  case 'categories':
    req.model = collection;
    next();
    return;
  case 'products':
    req.model = collection;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

module.exports = getModel;