'use strict';

const Model = require('../model');
const schema = require('./categories.schema');

class Category extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = new Category();