import { useRef } from "react";

// console.log(process.env.REACT_APP_API_URL);
// const API_URL = "http://localhost:5000";
const API_URL = process.env.REACT_APP_API_URL

export const Login = () => {
  const emailRef = useRef();
  const pwRef = useRef();

  const onSignupSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitted");

    const userLogin = {
      email: emailRef.current.value,
      password: pwRef.current.value,
    };
    console.log(userLogin);
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const userNewApi = await response.json();
    console.log(userNewApi);
  };

  return (
    <form onSubmit={onSignupSubmit}>
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
