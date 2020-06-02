'use strict';

const supergoose = require('@code-fellows/supergoose');
const serverModule = require('../lib/server');
const server = serverModule.server;
// const {server} = require('../lib/server') --> its the 2 above lines combined together
const mockRequest = supergoose(server);

describe('Categories & Products API', ()=> {

  // Testing products routes
  it('it can create() products ', ()=> {
    let obj ={
      category: 'electronics',
      name: 'iPhone',
      display_name: 'iPhone 11',
      description: 'An Apple phone.',
    };
    return mockRequest
      .post('/products')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('it can read() products ', ()=> {
    let obj ={
      category: 'electronics',
      name: 'iPhone',
      display_name: 'iPhone 11',
      description: 'An Apple phone.',
    };
    return mockRequest
      .post('/products')
      .send(obj)
      .then(result => {
        return mockRequest.get('/products')
          .then(result => {
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('it can update() products ', ()=> {
    let obj ={
      category: 'electronics updated',
      name: 'iPhone',
      display_name: 'iPhone 11',
      description: 'An Apple phone.',
    };
    return mockRequest
      .get('/products')
      .then(result => {
        let _id = result.body[0]._id;
        return mockRequest.put(`/products/${_id}`)
          .send(obj)
          .then(result => {
            Object.keys(obj).forEach(key=> {
              expect(result.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

  //Testing Categories routes
  it('it can create() Category ', ()=> {
    let obj = {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'A category for Electronics',
    };
    return mockRequest
      .post('/categories')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('it can read() Category ', ()=> {
    let obj = {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'A category for Electronics',
    };
    return mockRequest
      .post('/categories')
      .send(obj)
      .then(result => {
        return mockRequest.get('/categories')
          .then(result => {
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('it can update() Category ', ()=> {
    let obj = {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'A category for Electronics',
    };
    return mockRequest
      .get('/categories')
      .then(result => {
        let _id = result.body[0]._id;
        return mockRequest.put(`/categories/${_id}`)
          .send(obj)
          .then(result => {
            Object.keys(obj).forEach(key=> {
              expect(result.body[key]).toEqual(obj[key]);
            });
          });
      });
  });
});