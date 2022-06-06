import { NavLink, Routes, Route } from "react-router-dom";
import { Signup } from "../src/components/Signup";
import { Login } from "../src/components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="signup">Signup</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="dashboard">Dashboard</NavLink>
        </nav>
        <h2>Manage your app</h2>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
