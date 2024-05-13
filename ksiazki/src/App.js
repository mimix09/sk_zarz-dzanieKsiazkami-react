import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

// ************************************
// pola: [books, setBooks] - przyjmuje tablice, przechowuje wszystkie dane o ksiazce
//      [title, setTitle] - przyjmuje ciag znakow, przechowuje tytul ksiazki z input
//      [author, setAuthor] - przyjmuje ciag znakow, przechowuje autora ksiazki z input
//      [genre, setGenre] - przyjmuje ciag znakow, przechowuje kategorie ksiazki z input
//      [image, setImage] - przyjmuje ciag znakow, przechowuje link do zdjecia ksiazki z input
//      [editIndex, setEditIndex] - przyjmue wartosc liczbowa, przechowuje index z tablicy
// ************************************

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addBook = () => {
    if (title && author && genre && image) {
      if (editIndex === -1) {
        setBooks([...books, { title, author, genre, image }]);
      } else {
        const updatedBooks = [...books];
        updatedBooks[editIndex] = { title, author, genre, image };
        setBooks(updatedBooks);
        setEditIndex(-1);
      }
      setTitle('');
      setAuthor('');
      setGenre('');
      setImage('');
    }
  };

  const editBook = (index) => {
    const bookToEdit = books[index];
    setTitle(bookToEdit.title);
    setAuthor(bookToEdit.author);
    setGenre(bookToEdit.genre);
    setImage(bookToEdit.image);
    setEditIndex(index);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Book Manager</h1>
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tytul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="kategoria"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="zdj"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <div className="row my-4">
        <div className='col-5'></div>
        <div className="col-2">
          <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
              <button className="btn btn-warning px-5" onClick={addBook}>{editIndex === -1 ? 'Add' : 'Edit'}</button>
            </div>
            <div className='col-3'></div>
          </div>
        </div>
        <div className='col-5'></div>
      </div>

      <div className="row mb-1">
        {books.map((book, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.genre}</p>
                <div className="d-flex justify-content-between">
                  <FaEdit className="text-primary" onClick={() => editBook(index)} />
                  <FaTrash className="text-danger" onClick={() => deleteBook(index)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
