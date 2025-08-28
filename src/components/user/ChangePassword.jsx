import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/UserInfo.css'

const ChangePassword = () => {
  const navigate = useNavigate()

  return (
    <section className="user-info">
      <div className="user-info__container">
        <div className="user-layout">
          <aside className="user-sidebar">
            <div className="avatar-circle" />
            <h2 className="username">USER NAME</h2>
            <nav className="sidebar-menu">
              <button className="menu-btn is-active" onClick={() => navigate('/tai-khoan')}>Thông tin cá nhân</button>
              <button className="menu-btn">Đơn hàng</button>
              <button className="menu-btn">Gói dịch vụ</button>
              <button className="menu-btn">Đơn nhóm</button>
              <button className="menu-btn">Phiếu sức khỏe</button>
            </nav>
          </aside>

          <div className="user-content">
            <div className="user-panel user-panel--single">
              <h1 className="user-title">Thông tin cá nhân</h1>

              <form className="info-form info-form--wide" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row one">
                  <div className="form-field">
                    <input type="password" placeholder="Nhập mật khẩu cũ" />
                  </div>
                </div>
                <div className="form-row one">
                  <div className="form-field">
                    <input type="password" placeholder="Nhập mật khẩu mới" />
                  </div>
                </div>
                <div className="form-row one">
                  <div className="form-field">
                    <input type="password" placeholder="Nhập lại mật khẩu mới" />
                  </div>
                </div>

                <div className="form-actions align-right">
                  <div className="right-actions">
                    <button type="submit" className="btn btn-primary">Lưu</button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate('/tai-khoan')}>Hủy</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword 