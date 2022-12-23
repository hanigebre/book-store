const express= require('express')
const updateBook =require('../Controller/updateController')

let updateRoute=express.Router();
updateRoute.post('/update', updateBook)

module.exports=updateRoute;