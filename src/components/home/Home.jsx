import React, { useState } from 'react';

import mascotImage from '../../assets/mascot.png';
import brandLogo from '../../assets/logo-brand.png';

import '../../css/Home.css';

// Dữ liệu vẫn giữ nguyên, rất tiện lợi
const tabsData = [
  {
    id: 'tam-nhin',
    title: 'TẦM NHÌN',
    content: 'Chúng tôi không chỉ là một nền tảng bán rau củ quả. Chúng tôi là người bạn đồng hành, là cánh tay phải giúp bạn có được những bữa ăn xanh, lành và đủ đầy, mà không cần mất quá nhiều thời gian hay suy nghĩ.'
  },
  {
    id: 'su-menh',
    title: 'SỨ MỆNH',
    content: (
      <>
        VEGGIE CARE project luôn hướng đến việc trở thành 
        <strong> "nhà buôn hiện đại" - người bạn đồng hành tin cậy</strong>
        , giúp thế hệ trẻ việt nam dễ dàng tiếp cận với nguồn thực phẩm chất lượng, đồng thời xây dựng một lối sống xanh, tiện lợi và thông minh hơn, mang rau củ sạch, tươi ngon đến từng hộ gia đình hiện đại, giúp mọi người ăn uống lành mạnh hơn, sống khỏe mạnh hơn - mà không phải đánh đổi sự tiện lợi, thời gian hay trải nghiệm.
      </>
    )
  },
  {
    id: 'gia-tri',
    title: 'GIÁ TRỊ CỐT LÕI',
    content: 'Tại vegie care, chúng tôi mong muốn mang lại từng giá trị hương vị trong từng loại rau củ quả. chính vì vậy, chúng tôi xây dựng dịch vụ dựa trên 5 giá trị cốt lõi: sự tiện lợi thông minh - cung cấp đầy đủ dưỡng chất - sự tươi mới kết hợp với yếu tố truyền thống - cá nhân hoá trải nghiệm - sự chân thành và minh bạch là yếu tố cốt lõi vegie tận tụy trong từng sản phẩm trước khi được giao tận tay bạn.'
  }
];

export default function Home() {

  const [isAiMenuOpen, setIsAiMenuOpen] = useState(false);

  // State ban đầu thành `null` để không có tab nào mở
  const [openTabId, setOpenTabId] = useState(null);

  // Tạo một hàm xử lý click để logic phức tạp hơn
  const handleToggleTab = (tabId) => {
    // Nếu click vào tab đang mở, hãy đóng nó lại (set về null)
    if (openTabId === tabId) {
      setOpenTabId(null);
    } else {
      // Nếu click vào tab khác, hãy mở nó ra
      setOpenTabId(tabId);
    }
  };

  return (
    <>
        <section className='mascot-section'>
            <img
            src={mascotImage}
            alt="Linh vật Veggie Care"
            className="mascot-image"
            />
        </section>
      
        <section className='intro-section'>
            <div className="intro-container">
                <div className="intro-brand">
                    <img src={brandLogo} alt="Vegie Care Brand" />
                </div>

                {/* Cột bên phải chỉ chứa một danh sách các mục có thể tương tác */}
                <div className="intro-actions">
                    {tabsData.map((tab) => (
                    // Với mỗi mục, chúng ta sẽ quyết định hiển thị BUTTON hay NỘI DUNG
                    <div key={tab.id} className="tab-item-container">
                        {openTabId === tab.id ? (
                        // ----- NẾU TAB NÀY ĐANG MỞ: HIỂN THỊ NỘI DUNG -----
                        <div
                            className="content-bubble"
                            onClick={() => handleToggleTab(tab.id)} // Click để đóng lại
                        >
                            {tab.content}
                        </div>
                        ) : (
                        // ----- NẾU TAB NÀY ĐANG ĐÓNG: HIỂN THỊ BUTTON -----
                        <button
                            className="action-button"
                            onClick={() => handleToggleTab(tab.id)} // Click để mở ra
                        >
                            {tab.title}
                        </button>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </section>
        <section className='ai-menu-section'>
            <div className="ai-menu-container">
                <div className={`ai-menu-wrapper ${isAiMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsAiMenuOpen(!isAiMenuOpen)}>
                  {/* Nội dung ban đầu (chữ AI Menu) */}
                  <div className="ai-menu-initial-content">
                      <span className="ai-menu-text-top">AI</span>
                      <span className="ai-menu-text-bottom">Menu</span>
                  </div>

                  {/* Nội dung khi mở rộng */}
                  <div className="ai-menu-expanded-content">
                      <h2 className="ai-menu-title">Khám Phá AI Menu</h2>
                      <p className="ai-menu-description">
                          Bạn là fan của món luộc thanh đạm, hay team mê món xào đậm đà? Chỉ cần vài bước khai báo nhanh (hoặc liên kết tài khoản với hành vi mua sắm), Vegie AI sẽ ghi nhớ “gu ăn” của bạn để gợi ý món phù hợp.
                      </p>
                      <button className="ai-menu-details-button">Xem chi tiết</button>
                  </div>
                </div>
            </div>
        </section>
        <section className='combo-section'>
          <div className='combo-container'>
            {/* Cột bên trái: Tiêu đề */}
            <div className='combo-title'>
              <span className='combo-title-top'>Gói</span>
              <span className='combo-title-bottom'>dịch vụ</span>
            </div>

            {/* Cột bên phải: Chứa các gói */}
            <div className='combo-packages'>
              {/* --- Gói mua lẻ --- */}
              <div className='package-card'>
                  <div className="package-title">
                    <span className="package-line-1">Gói</span>
                    <span className="package-line-2">mua lẻ</span>
                  </div>
                  {/* Dòng mô tả */}
                  <p className="package-description">Linh hoạt - Tiện lợi - Theo ý bạn</p>
              </div>

              {/* --- Gói theo tuần --- */}
              <div className='package-card'>
                  <div className="package-title">
                    <span className="package-line-1">Gói</span>
                    <span className="package-line-2">theo tuần</span>
                  </div>
                  {/* Dòng mô tả */}
                  <p className="package-description">Linh hoạt - Tiện lợi - Theo ý bạn</p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}