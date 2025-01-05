import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ outline: 'none' }}  // Optional: Removes the outline on focus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ outline: 'none' }}  // Optional: Keeps styling consistent
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
