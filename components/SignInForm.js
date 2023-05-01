import useAuth from "../hooks/AuthContext"
import { useState } from 'react';



const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn(email, password);
    
  };

  return (
    <form onSubmit={handleSubmit}
      style={{ color: "#222" }}
      action="login"
      className="flex flex-col h-full w-full justify-center align-center"
    >
      <h1 className="text-center">Welcome Please Login :)</h1>
      <input
      style={{ border: "1px solid #222", margin: "20px auto" }}
      className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ border: "1px solid #222", margin: "20px auto" }}
        className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit" value="Login">
        Login
      </button>
    </form>
  );
};

export default SignInForm;
