import React from 'react'

const BookForm = () => {
  
    const [bookName, setBookName] = React.useState('');
    const [authorName, setAuthorName] = React.useState('');
    const [books, setBooks] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (bookName.trim() && authorName.trim()) {
            const newBook = {
                id: Date.now(),
                bookName,
                authorName
            };
            setBooks([...books, newBook]);
            setBookName('');
            setAuthorName('');
        }
    };

    const handleRemove = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <div style={{ padding: '20px' }}>
            <div>
                <h1>Book Form</h1>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Book Name:</label>
                        <input 
                            type="text" 
                            value={bookName} 
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>Author Name:</label>
                        <input 
                            type="text" 
                            value={authorName} 
                            onChange={(e) => setAuthorName(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit">Add Book</button>
                </form>
                
                {books.length > 0 && (
                    <div>
                        <h2>Book List</h2>
                        {books.map((book) => (
                            <div key={book.id} style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
                                <div>
                                    <p>Book: {book.bookName}</p> 
                                    <p>Author: {book.authorName}</p>
                                </div>
                                <button onClick={() => handleRemove(book.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
    
}

export default BookForm