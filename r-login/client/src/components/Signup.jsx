import { useRef } from "react";

// console.log(process.env.REACT_APP_API_URL);
const API_URL= process.env.REACT_APP_API_URL
console.log(API_URL);

export const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();

  const onSignupSubmit = async (e) => {
    e.preventDefault();
    const userSignup = { 
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: pwRef.current.value,
    };
    console.log(userSignup);

    const response= await fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(userSignup),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const userNewApi= await response.json();
    console.log(userNewApi);

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
