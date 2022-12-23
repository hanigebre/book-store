const express =require('express');

const pool =require('../database/database')

let allData =(req,res,next)=>{
    let allData="SELECT * FROM Books"

    pool.query(allData, (err,data)=>{
        if(err){
            throw err
        }else{
            console.log(data)
            res.send(data)
        }
    })
}


module.exports=allData