import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/authSlice';
import styles from '../styles/RegisterPage.module.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleRegister = () => {
    // Dispatch registration action (you might want to replace this with API call logic)
    dispatch(registerUser(formData));
  };

  return (
    <div className={styles.registerContainer}>
      {/* Left Side */}
      <div className={styles.welcomeSection}>
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className={styles.signInButton}>SIGN IN</button>
      </div>

      {/* Right Side */}
      <div className={styles.formSection}>
        <h2>Create Account</h2>
        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>f</button>
          <button className={styles.socialButton}>G+</button>
          <button className={styles.socialButton}>in</button>
        </div>
        <p>or use your email for registration:</p>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className={styles.inputField}
        />
        <button className={styles.signUpButton} onClick={handleRegister}>SIGN UP</button>
      </div>
    </div>
  );
};

export default RegisterPage;
