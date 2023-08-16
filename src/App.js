import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type='text' value={username} 
            onChange={event => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          password:
          <input type='password' value={password} 
            onChange={event => setPassword(event.target.value)} />
        </label>
        <br />
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
}

export default App;
