import React from 'react'
import './Home.css'

function Home() {
    return (
        <section>
            <div className="overlay">
                <div className="links">
                    <nav className="navigation">
                        
                            <a href="/BookCollection">Show Book Collection</a>
                            <a href="/addBook">Add Books</a>
                            <a href="/updateBook">Update Book</a>
                            <a href="/deleteBook">Delete Book</a>
                        

                        <br />
                    </nav>
                </div>
            </div>
        </section>


    )
}

export default Home