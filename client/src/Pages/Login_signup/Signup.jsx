import React, { useState } from "react";
import { Link } from "react-router-dom";
import sign from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:3000/user/signup`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const response = await sendSign.json();

      if (sendSign.ok) {
        alert("Registration successful");
        navigate("/");
        console.log(response);
      } else {
        alert("registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={sign.signcontainer}>
      <div className={sign.container}>
        <h1 className={sign.hello}>Signup</h1>

        <form action="">
          <div className={sign.inputs}>
            <input
              type="text"
              name=""
              id=""
              placeholder="UserName"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={onSubmit} type="submit">
              Submit
            </button>
            <div>
              <p>
                Already a member? <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
