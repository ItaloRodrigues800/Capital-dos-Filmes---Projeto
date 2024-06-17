import React, { useState } from 'react';
import './Login.css'; 

const Login = ({ onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    onForgotPassword(email);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="form-actions">
          <button type="submit">Entrar</button>
          <button type="button" onClick={handleForgotPassword}>
            Cadastrar
          </button>
        </div>
      </form>
      <div className="signup-link">
        <p>Não tem uma conta? <a href="/signup">Criar conta</a></p>
        <p><a href="/signup">Esqueceu a senha?</a></p>
      </div>
    </div>
  );
};

export default Login;
