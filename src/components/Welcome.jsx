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
          <span>MLN131 - Chủ nghĩa Mác - Lênin - Nhóm 5</span>
        </div>

        {/* Title */}
        <h1 className="welcome__title">
          Chương 6: Vấn đề{' '}
          <span className="welcome__title-accent">dân tộc và tôn giáo</span>{' '}
          trong thời kỳ quá độ lên chủ nghĩa xã hội
        </h1>

        {/* Description */}
        <p className="welcome__description">
          Tìm hiểu quan điểm Chủ nghĩa Mác - Lênin về tôn giáo, tín ngưỡng và mê tín dị đoan -
          cùng chính sách tôn giáo của Đảng và Nhà nước Việt Nam trong thời kỳ quá độ
          lên chủ nghĩa xã hội.
        </p>

        {/* Features */}
        <div className="welcome__features">
          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <BookOpen size={28} />
            </div>
            <h3 className="welcome__feature-title">Hệ thống khái niệm</h3>
            <p className="welcome__feature-text">
              Phân biệt rõ tôn giáo, tín ngưỡng và mê tín dị đoan theo quan điểm Mác - Lênin
            </p>
          </div>

          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <Target size={28} />
            </div>
            <h3 className="welcome__feature-title">Chính sách tôn giáo</h3>
            <p className="welcome__feature-text">
              Nắm vững chính sách, giới hạn quyền tự do tín ngưỡng và vai trò của Nhà nước
            </p>
          </div>

          <div className="welcome__feature">
            <div className="welcome__feature-icon">
              <Users size={28} />
            </div>
            <h3 className="welcome__feature-title">Vận dụng thực tiễn</h3>
            <p className="welcome__feature-text">
              Phân tích vấn đề mê tín dị đoan ở người trẻ và đề xuất giải pháp thiết thực
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
