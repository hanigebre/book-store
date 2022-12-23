const express= require('express')
 const createTable =require('../Controller/createController')

 let createRoute= express.Router();
 createRoute.get('/create',createTable)
 
 module.exports=createRoute;