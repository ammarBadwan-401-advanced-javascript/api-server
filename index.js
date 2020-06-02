'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server');

const MONGODB_URI = 'mongodb://localhost:27017/ammar-api';
mongoose.connect(MONGODB_URI,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

server.start();