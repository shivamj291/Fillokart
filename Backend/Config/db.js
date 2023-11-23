const express = require('express');
const mongoose = require('mongoose')

async function connectdb(){
   const mongodata = mongoose.connect('mongodb://localhost:27017/productData')
   return mongodata;
}
module.exports = {connectdb}
  