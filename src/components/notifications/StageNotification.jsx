import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/StageNotification.css';
import mascot from '../../assets/mascot-smile.png';

const StageNotification = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/dang-nhap');
  };

  return (
    <div className="stage-notification-page">
      <div className="stage-notification-container">    
        <div className="stage-notification-card">
          <div className="stage-notification-header">
            <h2>Khôi Phục Mật Khẩu Thành Công</h2>
          </div>
          <div className="stage-notification-title">
            <p> VEGIE XIN CHÀO</p>
          </div>
          
          <div className="mascot-container">
            <img src={mascot} alt="Veggie Mascot" className="mascot-image" />
          </div>
          
          <div className="button-container">
            <button onClick={handleBackToLogin} className="stage-notification-button">
              Quay lại đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageNotification;