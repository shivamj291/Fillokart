const express = require('express');
const mongoose = require('mongoose');
const {connectdb} = require('./Config/db');
const router = require('./Router/Router');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json())
app.use('/',router)
connectdb().then(()=>{
    app.listen(5000,()=>{
        console.log('running on 5000')
    })
})