import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../helpers/apiCalls";

// console.log(process.env.REACT_APP_API_URL);
// const API_URL = "http://localhost:5000";
// const API_URL = process.env.REACT_APP_API_URL;

export const Signup = () => {
  
  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const onSignupSubmit = async (e) => {
    e.preventDefault();

    const result = await signupApi(
      nameRef.current.value,
      emailRef.current.value,
      pwRef.current.value
    );
    if (result.error) {
      return console.log(result.error);
    }
    navigate("/");
  };

  return (
    <form onSubmit={onSignupSubmit}>
      <div>
        <input type="text" ref={nameRef} placeholder="Name..." />
      </div>
      <div>
        <input type="text" ref={emailRef} placeholder="Email..." />
      </div>
      <div>
        <input type="password" ref={pwRef} placeholder="Password..." />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};
