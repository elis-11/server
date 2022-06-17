import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "./helpers/apiCalls";

// console.log(process.env.REACT_APP_API_URL);
// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);

export const Login = () => {
  const [errors, setErrors] = useState("");

  const emailRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await loginApi(
      emailRef.current.value,
      pwRef.current.value
    );
    if (result.error) {
      return setErrors(result.error);
    }
    console.log(result);
    setErrors("");
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
      <div className="errors" style={{ color: "red", fontWeight: "bold" }}>
        {errors}
      </div>
    </form>
  );
};
