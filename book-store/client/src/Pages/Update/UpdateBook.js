import React from 'react'
import './UpdateBook.css'

function UpdateBooks() {
  return (
    <div className="bgc">
      <div className="wrapper">
      <h1 className="title">Update Book</h1>
      <form action="http://localhost:2023/user/update" method="POST">
       <h3>Choose what to edit</h3>
      <select name="editOptions" id="editOptionsId">
        <option value="author_name">Author Name</option>
        <option value="book_Title">Book Title</option>
        <option value="published_year">Year oF Publication</option>
      </select><br/>
      <h3>Insert the previous value</h3>
          <input type="text" name="toBeUpdate" />
      <h3>Insert the value for updating</h3>
          <input type="text" name="updatedInput" />
      <button type="submit">Update</button>
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

export default UpdateBooks