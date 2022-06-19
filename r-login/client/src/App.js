import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { useDataContext } from "./context/DataProvider";

function App() {
  const { errors } = useDataContext();

  return (
    <div className="App">
      <header>
        <h2>Manage your app</h2>
        <div className="errors">{errors}</div >
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<div>Dashboard</div>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
