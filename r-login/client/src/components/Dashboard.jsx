import { useEffect } from "react";
import { useDataContext } from "../context/DataProvider";
import { fetchBooksApi } from "./helpers/apiCalls";

export const Dashboard = () => {
  // const [books, setBooks] = useState([]);
  const { books, setBooks, setErrors, user } = useDataContext();

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
    } else {
      setErrors(`You are not logged in!`)
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="books">
      {books.map((book) => (
        <div className="book" key={book._id}>
          <div>{book.title}</div>
          <div>{book.author}</div>
        </div>
      ))}
      </div>
    </div>
  );
};
