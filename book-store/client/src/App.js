

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddBook from './Pages/AddBooks/AddBooks';
import BookCollection from './Pages/BookCollection/BookCollection.js';
import DeleteBook from './Pages/DeleteBook/DeleteBook.js';
import Home from './Pages/Home/Home.js';
import UpdateBooks from './Pages/Update/UpdateBook.js';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/addBook' element={<AddBook />} />
          <Route exact path='/deleteBook' element={<DeleteBook />} />
          <Route exact path='/updateBook' element={<UpdateBooks />} />
          <Route exact path='/BookCollection' element={<BookCollection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
