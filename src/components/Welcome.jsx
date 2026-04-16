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
          <span>Khóa học Kinh tế Chính trị Mác-Lênin</span>
        </div>

        {/* Title */}
        <h1 className="welcome__title">
          Hội nhập Kinh tế Quốc tế trong{' '}
          <span className="welcome__title-accent">"Biên giới mềm"</span>
        </h1>

        {/* Description */}
        <p className="welcome__description">
          Khám phá chiến lược hội nhập kinh tế quốc tế của Việt Nam trong bối cảnh 
          toàn cầu hóa. Tìm hiểu cách vừa phát triển kinh tế, vừa giữ vững độc lập 
          và chủ quyền quốc gia.
        </p>

        {/* Features */}
        <div className="welcome__features">
          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <BookOpen size={28} />
            </div>
            <h3 className="welcome__feature-title">Nội dung chuyên sâu</h3>
            <p className="welcome__feature-text">
              Lý luận và thực tiễn về hội nhập kinh tế quốc tế tại Việt Nam
            </p>
          </div>

          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <Target size={28} />
            </div>
            <h3 className="welcome__feature-title">Mục tiêu rõ ràng</h3>
            <p className="welcome__feature-text">
              Hiểu rõ mối quan hệ giữa hội nhập và độc lập, tự chủ kinh tế
            </p>
          </div>

          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <Users size={28} />
            </div>
            <h3 className="welcome__feature-title">Ứng dụng thực tế</h3>
            <p className="welcome__feature-text">
              Phân tích chiến lược phát triển kinh tế bền vững của Việt Nam
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
