// import pool from "../server.js";
// import createBooks from"../Schema/schema.js";
const pool=require("../database/database")
const createBooks=require("../Schema/schema")

let createTable = (req,res)=>{
    pool.query(createBooks, (err,results, fields)=>{
      if(err) console.log(err);
  
    })
    res.end("Tables created")
  };
  
  module.exports = createTable;