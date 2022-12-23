const mysql=require("mysql")

const pool=mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10

});
pool.getConnection(function(err,connection){
    console.log("Database connectd")
})

// let createBooks =`CREATE TABLE if not exists Books(
//     book_Id int auto_increment,
//     author_name varchar(255) not null,
//     book_Title varchar(255) not null, 
//     published_year varchar(255) not null,
//     PRIMARY KEY (book_Id)
// )`;
//  pool.query(createBooks, (err,results)=>{
//       if(err) throw err;
//       console.log('createBooks table created');
  
//   });

  module.exports = pool;