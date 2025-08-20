import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/PasswordRecoverySuccess.css';
import mascot from '../../assets/mascot-smile.png';

const PasswordRecoverySuccess = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="recovery-success-page">
      <div className="recovery-success-container">    
        <div className="recovery-success-card">
          <div className="recovery-success-header">
            <h2>Khôi Phục Mật Khẩu Thành Công</h2>
          </div>
          <div className="recovery-success-hello">
            <p> VEGIE XIN CHÀO</p>
          </div>
          
          <div className="mascot-container">
            <img src={mascot} alt="Veggie Mascot" className="mascot-image" />
          </div>
          
          
          <div className="button-container">
            <button onClick={handleBackToLogin} className="recovery-success-button">
              Quay lại đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoverySuccess;