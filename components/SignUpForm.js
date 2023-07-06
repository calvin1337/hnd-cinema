import useAuth from "../hooks/AuthContext"
import { useState, useEffect } from 'react';

const SignUpForm = (props) => {
  const [displayName, setDisplayName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const signUpError = await signUp(email, password, displayName);
    if (signUpError) {
      if (signUpError.code === 'auth/email-already-in-use') {
        setError('The email address is already in use. Please choose a different email.');
      } else if (signUpError.code === 'auth/weak-password') {
        setError('The password is too weak. Please choose a stronger password.');
      } else {
        setError('An error occurred during sign-up. Please try again.');
      }
      
    } else {
      setEmail('');
      setPassword('');
      setDisplayName('');
      setError(null);
      props.toggle(false);
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" value="Sign Up">
        Sign Up
      </button>
      
    </form>
  );
};

export default SignUpForm;