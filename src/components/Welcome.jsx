import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Target, 
  Users,
  ArrowRight
} from 'lucide-react';
import '../styles/welcome.css';

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome">
      <div className="welcome__content">
        {/* Badge */}
        <div className="welcome__badge">
          <Sparkles size={16} className="welcome__badge-icon" />
          <span>Khóa học Tư tưởng Hồ Chí Minh - HCM202</span>
        </div>

        {/* Title */}
        <h1 className="welcome__title">
          Tư tưởng Hồ Chí Minh về{' '}
          <span className="welcome__title-accent">Văn hóa, Đạo đức và Con người</span>
        </h1>

        {/* Description */}
        <p className="welcome__description">
          Tìm hiểu hệ thống tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người -
          nền tảng lý luận và kim chỉ nam cho sự nghiệp xây dựng, bảo vệ Tổ quốc
          Việt Nam xã hội chủ nghĩa.
        </p>

        {/* Features */}
        <div className="welcome__features">
          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <BookOpen size={28} />
            </div>
            <h3 className="welcome__feature-title">Nội dung chuyên sâu</h3>
            <p className="welcome__feature-text">
              Hệ thống tư tưởng HCM về văn hóa, đạo đức và con người theo giáo trình chính thức
            </p>
          </div>

          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <Target size={28} />
            </div>
            <h3 className="welcome__feature-title">Mục tiêu rõ ràng</h3>
            <p className="welcome__feature-text">
              Nắm vững 4 chuẩn mực đạo đức, 3 tính chất văn hóa và chiến lược "trồng người"
            </p>
          </div>

          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <Users size={28} />
            </div>
            <h3 className="welcome__feature-title">Vận dụng thực tiễn</h3>
            <p className="welcome__feature-text">
              Liên hệ tư tưởng HCM với sự nghiệp đổi mới và phát triển con người toàn diện
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="welcome__cta" onClick={onStart}>
          <span>Bắt đầu học ngay</span>
          <ArrowRight size={20} className="welcome__cta-icon" />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
