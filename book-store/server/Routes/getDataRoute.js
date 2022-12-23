const express=require('express')
const allData =require('../Controller/getData')

let AllData= express.Router()

AllData.get('/getData',allData)

module.exports=AllData;