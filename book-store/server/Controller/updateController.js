const pool= require('../database/database')

let updateBook = (req, res)=>{
    const {editOptions, toBeUpdate, updatedInput}=req.body

    let ForUpdate= `update Books set ${editOptions}='${updatedInput}' where ${editOptions}='${toBeUpdate}'`;
    pool.query(ForUpdate, function(err,result){
        if(err){
            console.log(err)
        }else{
            res.send(`you have successfully updated ${editOptions} from ${toBeUpdate} to${updatedInput}`)
        }
    })
}

module.exports= updateBook;