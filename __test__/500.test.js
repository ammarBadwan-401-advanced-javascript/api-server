'use strict';

const serverErrorHandler = require('../middleware/500');

describe('Check if the not found handler works fine',()=>{
  let req = {};
  let err;
  // I got stuck for a long time trying to figure out what to send in the res because there is no auto-sent response from the express server, so I had to ask Rowaid for help in this part and he told me that i needed a status function and the main idea to implement it, and a send function.
  let res = {status: function(status){
    this.status = status;
    return this;
  }, send: ()=>{}};
  let next;

  it('Testing if the server error handler returns a status code of 500',()=>{
    serverErrorHandler(err,req,res,next);
    expect(res.status).toBe(500);
  });

});
