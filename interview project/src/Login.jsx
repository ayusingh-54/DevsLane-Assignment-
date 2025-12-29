import React from 'react';

function Login() {
  return (
    <div style={{ maxWidth: '300px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Gmail Login</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">EMAL</label><br />
          <input
            type="email"
            id="email"
            placeholder="Email or phone"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">PASSWORD</label><br />
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Next</button>
      </form>
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        <a href="#">Forgot password?</a>
      </div>
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        <a href="#">New user? Sign Up</a>
      </div>
    </div>
  );
}

export default Login;