'use strict';
require('@code-fellows/supergoose');

const category = require('../lib/models/categories/categories.collection');

let testObj = {
  name: 'electronics',
  display_name: 'Electronics',
  description: 'A category for Electronics',
};

describe('Category Collection', () =>{
  it('It can create() a category', ()=> {
    return category.create(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });

  it('It can read() category', ()=> {
    return category.read()
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
});