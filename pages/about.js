
import React from 'react';
import { AuthContext } from '@/hooks/AuthContext';


const About = () => {
  
  const { user } = React.useContext(AuthContext);

  return (
    <div>
        {user ? `Hello, ${user.email}` : 'Hello, Guest'}
    </div>
  );
}

export default About
