import './register.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();

    try {
      await axios.post('auth/register', { email, username, password });
      console.log({ username, email, password });
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <button className="loginButton" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart membership.</p>

        <form className="form">
          <div className="userInfo">
            <div className="input">
              <input
                type="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="registerButton" onClick={handleFinish}>
            {' '}
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
