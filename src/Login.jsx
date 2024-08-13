import React, { useState } from "react";
import { useNavigation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [username , setUsername]=useState("");
  // const [username , setUsername]=useState("");
  // const navigate = useNavigation()


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    if(userData.husername === username && userData.password === password){
    }
  };

  return (
    <>
      <div className=" flex flex-col justify-center border border-pink-600 rounded">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">username</label>
          <input
            type="username"
            className="bg-gray-200 border border-gray-400 p-2 m-2"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="bg-gray-200 border border-gray-400 p-2 m-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button 
          type="submit"
          className="flex justify-center mt-2 bg-red-800">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
