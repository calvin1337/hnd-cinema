
import React from 'react';
import { AuthContext } from '@/hooks/AuthContext';


const About = () => {
  
  const { user } = React.useContext(AuthContext);

  return (
    <div>
        {user ? `Hello, ${user.email}` : 'Hello, Guest'}

    <div>
      <h1>About</h1>
      <p>
        HNCD Cinema is a [brief description of the project]. It aims to [explain the purpose or goal of the project].
      </p>
      <p>
        This project is being developed by Calvin Donaldson
      </p>
    </div>
    </div>
  );
}

export default About
