const pool=require('../database/database');

let deleteBook=(req,res)=>{
    const{titleToDelete}=req.body 
    pool.query(`DELETE from Books where book_Title='${titleToDelete}'`, function(err,result){
        if(err){
            console.log(err)
        }
    });
    res.end('Deleted successfully')
}

module.exports = deleteBook;