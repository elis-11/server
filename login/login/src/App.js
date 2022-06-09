import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useDataContext } from "./context/Dataprovider";
import { Signup } from "../src/components/Signup";
import { Login } from "../src/components/Login";
import { Dashboard } from "./components/Dashboard";
import "./App.scss";

function App() {

const {errors}= useDataContext()

  return (
    <div className="App">
      <header>
        <h2>Manage your app</h2>
        <div className="errors">{errors}</div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<div>Dashboard</div>} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
