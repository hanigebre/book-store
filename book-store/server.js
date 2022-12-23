// import dependencies
require('dotenv').config();
// const mysql=require('mysql')

const express=require('express');
const cors=require('cors');
const pool=require("./server/database/database");
// const createTable =require("./server/Controller/createController")

// import routes

const createRoute =require("./server/Routes/createRoute");
const insertRoute =require("./server/Routes/insertRoute");
const AllData =require("./server/Routes/getDataRoute");
const updateRoute =require("./server/Routes/updateRoute");
const deleteRoute =require("./server/Routes/deleteRoute");
// initiate express
const app =express();


// support middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//middleware
app.use('/user',AllData)
app.use('/user',createRoute)
app.use('/user',insertRoute)
app.use('/user',updateRoute)
app.use('/user',deleteRoute)
//Creating a connection to the database


// server listner

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})


module.export = pool;