'use strict';

const serverModule = require('../lib/server');
const server = serverModule.server;
// const {server} = require('../lib/server') --> its the 2 above lines combined together
const supertest = require('supertest');

const mockRequest = supertest(server);

describe('Web API Tests',()=>{


  //Post tests
  it('Should post in /products',()=>{
    let productObject = {
      id: '3',
      category: 'electronics',
      name: 'iPhone',
      display_name: 'iPhone 11',
      description: 'An Apple phone.',
    };
    return mockRequest
      .post('/products')
      .send(productObject)
      .then(results=>{
        expect(results.status).toBe(200);
      });
  });

  it('Should post in /categories',()=>{
    let categoriesObject = {
      id: '9',
      name: 'Food',
      display_name: 'Food',
      description: 'This is the food category',
    };
    return mockRequest
      .post('/categories')
      .send(categoriesObject)
      .then(results=>{
        expect(results.status).toBe(200);
      });
  });

  //Get tests
  it('Should get properly @ /products', ()=> {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
  it('Should get properly @ /products:id (with id)', ()=> {
    return mockRequest
      .get('/products/3')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
    
  it('Should get properly @ /categories', ()=> {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
  it('Should get properly @ /categories/:id (with id)', ()=> {
    return mockRequest
      .get('/categories/9')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  // PUT tests (update)
  it('Should update in /products/:id ',()=>{
    let productObject = {
      id: '3',
      category: 'electronics',
      name: 'iPhone',
      display_name: 'iPhone 11',
      description: 'An Apple phone.',
    };
    return mockRequest
      .put('/products/3')
      .send(productObject)
      .then(results=>{
        expect(results.status).toBe(200);
      });
  });

  it('Should update in /categories/:id',()=>{
    let categoriesObject = {
      id: '9',
      name: 'Food',
      display_name: 'Food',
      description: 'This is the food category',
    };
    return mockRequest
      .put('/categories/9')
      .send(categoriesObject)
      .then(results=>{
        expect(results.status).toBe(200);
      });
  });

  // DELETE tests

  it('Should delete @ /products/:id', ()=> {
    return mockRequest
      .delete('/products/3')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  it('Should delete @ /categories/:id', ()=> {
    return mockRequest
      .delete('/categories/9')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

});