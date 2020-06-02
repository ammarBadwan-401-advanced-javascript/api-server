'use strict';

class Model {

  constructor(schema){
    this.schema = schema;
  }

  read(id){
    let idCheck = id ? {id} : {};
    return this.schema.find(idCheck);
  }

  create(object){
    let newObject = new this.schema(object);
    return newObject.save();
  }

  update(id,object){
    
  }


}



module.exports = Model;