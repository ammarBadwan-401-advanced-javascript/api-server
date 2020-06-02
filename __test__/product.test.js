'use strict';
require('@code-fellows/supergoose');

const products = require('../lib/models/products/products.collection');

let testObj = {
  category: 'electronics',
  name: 'iPhone',
  display_name: 'iPhone 11',
  description: 'An Apple phone.',
};

describe('Products Collection', () =>{
  it('It can create() a product', ()=> {
    return products.create(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });

  it('It can read() products', ()=> {
    return products.read()
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
});