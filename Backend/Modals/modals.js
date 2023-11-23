const express = require('express');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    product_name: {
        type:String,
        required: true
    },
    rate: {
        type:String,
        required: true
    },
    GST: {
        type:String,
        required: true
    },
    SKU: {
        type:String,
        required: true
    },
    UMO: {
        type:String,
        required: true
    }
})
 
const modalsData = mongoose.model('data',schema)

module.exports = { modalsData }



