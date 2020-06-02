'use strict';

class Model {

  constructor(schema){
    this.schema = schema;
  }

  read(_id){
    let idCheck = _id ? {_id} : {};
    return this.schema.find(idCheck);
  }

  create(object){
    let newObject = new this.schema(object);
    return newObject.save();
  }

  update(_id,object){
    return this.schema.findByIdAndUpdate(_id,object,{new:true});
  }

  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }


}



module.exports = Model;