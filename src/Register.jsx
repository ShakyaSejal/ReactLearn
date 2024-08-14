import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const navigate=useNavigate();
  const [error, setError] =useState("");

 const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : password,
    };
    localStorage.setItem("user",JSON.stringify(user))
    if (!firstname) {
      setError("firstname cannot be empty");
      return;
    }
    if (!lastname) {
      setError("lastname cannot be empty");
      return;
    }
    if (!email) {
      setError("email cannot be empty");
      return;
    }
    if (!password) {
      setError("password cannot be empty");
      return;
    }
    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    }
   

    navigate('/login')


  };
  return (
    <>
      <div>
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <label htmlFor="firstname">firstname</label>
          <input 
          type="username" 
          className=" bg-gray-400" 
          value={firstname} 
          onChange={(e)=>{
                setFirstname(e.target.value)
          }}
          />
          <label htmlFor="lastname">lastname</label>
          <input 
          type="lastname" 
          className=" bg-gray-400" 
          value={lastname} 
          onChange={(e)=>{
                setLastname(e.target.value)
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
        {error &&(
          <p className="text-red-500">{error}</p>
        )}

      </div>
    </>
  );
};

export default Register;
