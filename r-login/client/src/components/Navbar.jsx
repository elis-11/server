import { NavLink, useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";
import { logoutApi } from "./helpers/apiCalls";

export const Navbar = () => {
  const { user, setUser } = useDataContext();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(); // clear User from state
    logoutApi();
    navigate("/login");
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
      {user && <span>{user.email}</span>}
    </nav>
  );
};
