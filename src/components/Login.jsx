import React, { useState } from 'react'
import './Login.css'

function Login() {
  // Create state variables for username and password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here, you can perform any login/authentication logic you need.
    // For now, we'll just show an alert with the username.
    alert(`Happy to connect with you, ${username}! Welcome to the Team By Claudio.`)
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_input">
          <input
            type="text"
            required
            name="uname"
            value={username} // Bind the input value to the state
            onChange={(e) => setUsername(e.target.value)} // Update the state when the input changes
          />
          <label htmlFor="uname">User Name</label>
        </div>
        <div className="form_input">
          <input type="password" required name="pwd" id="pwd" />
          <label htmlFor="pwd">Password</label>
        </div>
        <input type="submit" value="Login" name="login" className="btn-login" />
      </form>
    </div>
  )
}

export default Login
