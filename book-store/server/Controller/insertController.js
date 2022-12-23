const pool=require('../database/database')

let newBook=(req, res)=>{
    const{author_name,published_year,book_Title}=req.body 
    let sqlAddToProducts= `INSERT INTO Books(author_name, book_Title,published_year) VALUES ('${author_name}', '${book_Title}','${published_year}')`;
    pool.query(sqlAddToProducts, function(err,result){
        if(err)throw err;
        console.log("1 record inserted");
    });
    res.end('new book added')
}

module.exports=newBook;