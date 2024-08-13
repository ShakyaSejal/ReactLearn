import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
        husername : username,
        email : email,
        password : password,
    };
    console.log("user",user);
    localStorage.setItem("user",JSON.stringify(user))
  };
  return (
    <>
      <div>
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input 
          type="username" 
          className=" bg-gray-400" 
          value={username} 
          onChange={(e)=>{
                setUsername(e.target.value)
          }}
          />

          <label htmlFor="email">email</label>
          <input 
          type="email" 
          className=" bg-gray-400" 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />

          <label htmlFor="password">password</label>
          <input 
          type="password" 
          className=" bg-gray-400"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)

          }} 
          
          />

          <label htmlFor="confirm_password">confirm password</label>
          <input 
          type="confirm_password" 
          className=" bg-gray-400 mb-6"
          value={confirm_password}
          onChange={(e)=>{
            setConfirmPassword(e.target.value)

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

export default Register;
