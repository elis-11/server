import { NavLink, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="signup">Signup</NavLink>
          <NavLink to="login">Login</NavLink>
          {/* <NavLink to="logout">Logout</NavLink> */}
          <NavLink to="dashboard">Dashboard</NavLink>
        </nav>
        <h2>Manage your app</h2>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
