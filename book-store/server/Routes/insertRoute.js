const express=require('express')
const newBook =require('../Controller/insertController')


let insertRoute= express.Router();
insertRoute.post('/insert', newBook)

module.exports=insertRoute;