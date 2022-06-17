import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="signup">Signup</NavLink>
      <NavLink to="login">Login</NavLink>
      {/* <NavLink to="logout">Logout</NavLink> */}
      <NavLink to="dashboard">Dashboard</NavLink>
    </nav>
  );
};
