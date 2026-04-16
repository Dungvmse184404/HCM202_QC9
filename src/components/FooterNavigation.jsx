import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FooterNavigation = ({ prevModule, nextModule, onNavigate }) => {
  return (
    <nav className="footer-nav">
      <button
        className={`footer-nav__btn footer-nav__btn--prev ${!prevModule ? 'footer-nav__btn--disabled' : ''}`}
        onClick={() => prevModule && onNavigate(prevModule.id)}
        disabled={!prevModule}
      >
        <div className="footer-nav__icon">
          <ChevronLeft size={20} />
        </div>
        <div className="footer-nav__text">
          <div className="footer-nav__label">Bài trước</div>
          <div className="footer-nav__title">
            {prevModule ? prevModule.title : 'Không có'}
          </div>
        </div>
      </button>

      <button
        className={`footer-nav__btn footer-nav__btn--next ${!nextModule ? 'footer-nav__btn--disabled' : ''}`}
        onClick={() => nextModule && onNavigate(nextModule.id)}
        disabled={!nextModule}
      >
        <div className="footer-nav__text">
          <div className="footer-nav__label">Bài tiếp theo</div>
          <div className="footer-nav__title">
            {nextModule ? nextModule.title : 'Hoàn thành'}
          </div>
        </div>
        <div className="footer-nav__icon">
          <ChevronRight size={20} />
        </div>
      </button>
    </nav>
  );
};

export default FooterNavigation;
