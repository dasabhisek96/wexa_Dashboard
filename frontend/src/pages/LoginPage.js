import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authSlice';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false });
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch login action (you might want to replace this with API call logic)
    dispatch(loginUser(formData));
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left Side - Login Form */}
      <div className={styles.loginFormSection}>
        <h2>Sign In</h2>
        <div className={styles.socialIcons}>
          <button className={styles.socialButton}>f</button>
          <button className={styles.socialButton}>t</button>
        </div>
        
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className={styles.inputField}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className={styles.inputField}
        />

        <button className={styles.signInButton} onClick={handleLogin}>Sign In</button>

        <div className={styles.options}>
          <label>
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
            />
            Remember Me
          </label>
          <a href="#" className={styles.forgotPassword}>Forgot Password</a>
        </div>
      </div>

      {/* Right Side - Welcome Section */}
      <div className={styles.welcomeSection}>
        <h2>Welcome to login</h2>
        <p>Don’t have an account?</p>
        <button className={styles.signUpButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
