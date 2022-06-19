import { NavLink } from "react-router-dom";

export const Navbar = () => {

const handleLogout=(e) => {
e.preventDefault();
}

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="signup">Signup</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink onClick={handleLogout} to="#">Logout</NavLink>
      <NavLink to="dashboard">Dashboard</NavLink>
    </nav>
  );
};
