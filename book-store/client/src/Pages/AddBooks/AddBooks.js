import React from 'react'
import './AddBooks.css'
function AddBook() {
  return (
    <div className="bgc" >
       <div className="wrapper" >
      <h1 className="title">Add New Book</h1>
       <form action="http://localhost:2023/user/insert" method="POST">
    <label htmlFor="authorName">Author Name</label>
    <br />
    <input type="text" name='author_name' id='authorName' />
    <br />
    <br />
    <br />
    <label htmlFor="BookTitle">Book Title</label>
    <br />
    <input type="text" id='BookTitle' name='book_Title'/>
    
    <br />
    <br />
    <br />
    <label htmlFor="publication">Year oF Publication</label>
    <br />
    <input type="text" id='publication' name='published_year' />
    <br />
    <br />
    <button type='submit'>submit</button>
    <br />
    <br />
    <br />
    <div className="back">
    <a href="/home">Back to Home Page</a>
    </div>
    
  </form>
    </div>

    </div>
   
   
  )
}

export default AddBook