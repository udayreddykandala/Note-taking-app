import React, { useState } from 'react';

function SignUp({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="login-container"> {/* Use the same container for stylistic consistency */}
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        onSignUp();
      }}>
        <h2>Sign Up</h2>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
