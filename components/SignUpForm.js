import useAuth from "../hooks/AuthContext"
import { useState } from 'react';

const SignUpForm = (props) => {
  const [displayName, setDisplayName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signUp(email, password, displayName);
      props.toggle();
      setEmail("");
      setPassword("");
      setDisplayName("");
    } catch (error) {
      // Handle sign-up error
      console.log(error); // Log the error for debugging
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ color: '#222' }}
      action="signup"
      className="flex flex-col h-full w-full justify-center align-center"
    >
      <h1 className="text-center">Create a new account</h1>
      <input
        style={{ border: '1px solid #222', margin: '20px auto' }}
        className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
      />
      <input
        style={{ border: '1px solid #222', margin: '20px auto' }}
        className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        style={{ border: '1px solid #222', margin: '20px auto' }}
        className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      ></input>
      <button type="submit" value="Sign Up">
        Sign Up
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default SignUpForm;