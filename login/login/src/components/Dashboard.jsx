import { useEffect, useState } from "react";
import { useDataContext } from "../context/Dataprovider";
import { fetchBooksApi } from "../helpers/apiCalls";

export const Dashboard = () => {

const {user}= useDataContext()

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await fetchBooksApi();

      if (result.error) {
        return console.log("[OUCH]", result.error);
      }
      setBooks(result);
    };

    if(user){
      fetchBooks();
    }
  }, [user]);  

  return (
    <div className="dashboard">
      {books.map((book) => (
        <div className="books" key={book._id}>
          <div className="book">{book.title}</div>
          <div className="book">{book.author}</div>
        </div>
      ))}
    </div>
  );
};
