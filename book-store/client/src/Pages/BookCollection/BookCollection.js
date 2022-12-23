import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  './BookCollection.css'

function BookCollection() {
    const [query, setQuery] = useState([])
    let url = "http://localhost:2023/user/getData";
    const dataFromDatabase = async ()=>{
       try{
         const response = await axios.get(url)
         let converted = JSON.parse(JSON.stringify(response.data))
        setQuery(converted)
       }catch(err){
          console.log(err)
       }
    }
    useEffect(() => {
     dataFromDatabase()   
    }, [])

  return (
    <div className="bgc">
       <div className="wrapper">
        <h1 className="title">Book Collection</h1>
        <br/>

        <table className="twrap">
          <thead>
          <tr>
            <th>ID</th><br/>
            <th>Author Name</th><br/>
            <th>Book Title</th><br/>
            <th>Published Year</th><br/>
          </tr>
          </thead>
          
          <tbody>
          {query.map((data,i)=>{
              let display = (
            <tr>
              <td>{data.book_Id}</td><br/><br/>
              <td>{data.author_name}</td><br/><br/>
              <td>{data.book_Title}</td><br/><br/>
              <td>{data.published_year}</td><br/><br/>
            </tr>
              )
              return display

            })}
          </tbody>
          
        </table>
        <br/>
        
        <div className="back">
            <a href="/home">Back to Home Page</a>
        </div>
         
    </div>

    </div>

   
 )
}

export default BookCollection