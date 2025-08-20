import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css';
import mascotImage from '../../assets/mascot-normal-mouth.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-left-section">
        <div className="login-left-card">
          <div className="veggie-logo">
            <h1>Vegie</h1>
            <div className="mascot-container">
              <p className="mascot-text">Bạn Chưa Có Tài Khoản?</p>
              <Link to="/dang-ky" className="register-link-btn">Đăng ký</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="login-right-section">
        <div className="login-right-card">
          <div className="login-header">
            <h2>Đăng nhập</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email / Số điện thoại"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                required
              />
            </div>
            
            <div className= "form-actions">

              <button type="submit" className="login-button">
                Đăng nhập
              </button>
              <Link to="/khoi-phuc-mat-khau" className="forgot-password-link">
              Quên mật khẩu?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;