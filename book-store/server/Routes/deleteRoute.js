const express= require('express')
const deleteBook =require('../Controller/deleteController')

let deleteRoute= express.Router()
deleteRoute.post('/remove', deleteBook)

module.exports=deleteRoute;