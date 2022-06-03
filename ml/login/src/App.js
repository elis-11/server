import { NavLink, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/signup" element={<div>SignupPage</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
