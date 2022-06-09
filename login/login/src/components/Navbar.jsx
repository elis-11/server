import { NavLink } from "react-router-dom";
import { useDataContext } from "../context/Dataprovider";

export const Navbar = () => {
  const { user } = useDataContext();

  const handleLogout = (e) => {
    e.preventDefault();
  };
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="signup">Signup</NavLink>
      {!user && <NavLink to="login">Login</NavLink>}
      {user && (
        <NavLink onClick={handleLogout} to="#">
          Logout
        </NavLink>
      )}
      <NavLink to="dashboard">Dashboard</NavLink>
    </nav>
  );
};
