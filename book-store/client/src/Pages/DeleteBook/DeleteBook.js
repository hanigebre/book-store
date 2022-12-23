import React from 'react'
import './DeleteBook.css'
function DeleteBook() {
  return (
    <div className="bgc">
      <div className="wrapper">
      <h1 className="title">Delete Book</h1>
    <form action="http://localhost:2023/user/remove" method='POST'>
    <h3>please insert the book title to be deleted</h3>
    <input type="text" name="titleToDelete" id="" />
    <button type="submit">Delete</button>
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

export default DeleteBook