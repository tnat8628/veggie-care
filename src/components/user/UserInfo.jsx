import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../css/UserInfo.css'

const UserInfo = () => {
  const navigate = useNavigate()

  return (
    <section className="user-info">
      <div className="user-info__container">
        <div className="user-layout">
          <aside className="user-sidebar">
            <div className="avatar-circle" />
            <h2 className="username">USER NAME</h2>
            <nav className="sidebar-menu">
              <button className="menu-btn is-active">Thông tin cá nhân</button>
              <button className="menu-btn">Đơn hàng</button>
              <button className="menu-btn">Gói dịch vụ</button>
              <button className="menu-btn">Đơn nhóm</button>
              <button className="menu-btn">Phiếu sức khỏe</button>
            </nav>
          </aside>

          <div className="user-content">
            <div className="user-panel">
              <h1 className="user-title">Thông tin cá nhân</h1>
              <div className="photo-block">
                <div className="photo-circle" />
                <button className="btn btn-upload">Tải ảnh lên</button>
              </div>

              <form className="info-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row two">
                  <div className="form-field">
                    <input type="text" placeholder="Họ" />
                  </div>
                  <div className="form-field">
                    <input type="text" placeholder="Tên" />
                  </div>
                </div>

                <div className="form-row two">
                  <div className="form-field">
                    <input type="tel" placeholder="Số điện thoại" />
                  </div>
                  <div className="form-field">
                    <input type="text" placeholder="Dd/mm/yy" />
                  </div>
                </div>

                <div className="form-row one">
                  <div className="form-field">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>

                <div className="form-row one">
                  <div className="form-field">
                    <input type="text" placeholder="Địa chỉ" />
                  </div>
                </div>

                <div className="form-actions">
                  <Link to="/doi-mat-khau" className="btn btn-ghost" style={{display:'inline-flex', alignItems:'center', justifyContent:'center'}}>Tạo mật khẩu mới</Link>
                  <div className="right-actions">
                    <button type="submit" className="btn btn-primary">Lưu</button>
                    <button type="button" className="btn btn-danger">Hủy</button>
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

export default UserInfo 