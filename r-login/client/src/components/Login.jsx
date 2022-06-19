import { useRef  } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";
import { loginApi } from "./helpers/apiCalls";

// console.log(process.env.REACT_APP_API_URL);
// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);

export const Login = () => {
  const { setUser, setErrors } = useDataContext();

  const emailRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await loginApi(emailRef.current.value, pwRef.current.value);
    if (result.error) { // nicht gekllappt- setze Error
      return setErrors(result.error);
    }
    console.log(result);
    setErrors("");  // wenn gekllappt- cleare Error ->
    setUser(result)
    navigate("/dashboard", { replace: true }); // und navigiere danach zu Dashboard
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <div>
        <input type="text" ref={emailRef} placeholder="Email..." />
      </div>
      <div>
        <input type="password" ref={pwRef} placeholder="Password..." />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
