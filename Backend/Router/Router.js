const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const {modalsData} = require('../Modals/modals')
const app = express();

router.post('/',async(req,res)=>{
    
    const productdata = await modalsData.insertMany(req.body);
    console.log(productdata)
    return res.send(productdata);
})

router.get('/',async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const productdata = await modalsData.find({}).skip((page - 1) * pageSize).limit(pageSize);
    return res.send(productdata);
})

router.delete('/:id',async(req,res)=>{

    const productdata = await modalsData.deleteOne({_id:req.params.id});
    return res.send(productdata);
})
router.patch('/:id',async(req,res)=>{
     
    const productdata = await modalsData.updateOne({ _id: req.params.id}, { $set:req.body });
    console.log(productdata)
    return res.send(productdata);
})

module.exports = router