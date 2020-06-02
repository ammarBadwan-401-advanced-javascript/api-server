'use strict';

const Model = require('../model');
const schema = require('./products.schema');

class Products extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = new Products();