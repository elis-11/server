import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";
import { loginApi } from "../helpers/apiCalls";

// const API_URL = "http://localhost:5000";
const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL);


export const Login = () => {
  // const [errors, setErrors] = useState("");
  const {setUser, setErrors} = useDataContext()

  const emailRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await loginApi(emailRef.current.value, pwRef.current.value);

    if (result.error) {
      return setErrors(result.error);
    }
    console.log(result);
    setErrors("");
    setUser(result)
    navigate("/dashboard", { replace: true });
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
