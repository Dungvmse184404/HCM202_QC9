import React from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Lock, 
  Circle,
  GraduationCap,
  Menu,
  X,
  Gamepad2,
  ExternalLink
} from 'lucide-react';
import '../styles/sidebar.css';

const Sidebar = ({ 
  modules, 
  activeModuleId, 
  onModuleClick, 
  isOpen, 
  onToggle 
}) => {
  const completedCount = modules.filter(m => m.status === 'completed').length;
  const progressPercent = (completedCount / modules.length) * 100;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="module-item__status--completed" />;
      case 'locked':
        return <Lock size={16} className="module-item__status--locked" />;
      case 'current':
        return <Circle size={16} className="module-item__status--current" />;
      default:
        return <Circle size={16} className="module-item__status--current" />;
    }
  };

  const getModuleClass = (module) => {
    let classes = 'module-item';
    if (module.id === activeModuleId) classes += ' module-item--active';
    if (module.status === 'completed') classes += ' module-item--completed';
    if (module.status === 'locked') classes += ' module-item--locked';
    return classes;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="sidebar__mobile-toggle"
        onClick={onToggle}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      <div 
        className={`sidebar__overlay ${isOpen ? 'sidebar__overlay--visible' : ''}`}
        onClick={onToggle}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Header */}
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <div className="sidebar__logo-icon">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="sidebar__logo-text">MLN122 - ThomasPicasso</div>
              <div className="sidebar__logo-subtitle">Kinh tế chính trị</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          <div className="sidebar__nav-title">
            <BookOpen size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Nội dung khóa học
          </div>

          {modules.map((module, index) => (
            <button
              key={module.id}
              className={getModuleClass(module)}
              onClick={() => module.status !== 'locked' && onModuleClick(module.id)}
              disabled={module.status === 'locked'}
            >
              <div className="module-item__number">
                {index === 0 ? '★' : module.id === 'module-end' ? '🎓' : index}
              </div>
              <div className="module-item__content">
                <div className="module-item__title">{module.title}</div>
                <div className="module-item__description">{module.description}</div>
              </div>
              <div className="module-item__status">
                {getStatusIcon(module.status)}
              </div>
            </button>
          ))}

          {/* Game Link */}
          <a 
            href="https://healingthaomoc.my.canva.site/mln122" 
            className="sidebar__game-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sidebar__game-link-icon">
              <Gamepad2 size={20} />
            </div>
            <div className="sidebar__game-link-content">
              <span className="sidebar__game-link-title">🎮 Chơi Quiz Game</span>
              <span className="sidebar__game-link-desc">Kiểm tra kiến thức của bạn</span>
            </div>
            <ExternalLink size={14} className="sidebar__game-link-arrow" />
          </a>
        </nav>

        {/* Progress */}
        <div className="sidebar__progress">
          <div className="sidebar__progress-label">
            <span>Tiến độ học tập</span>
            <span>{completedCount}/{modules.length} hoàn thành</span>
          </div>
          <div className="sidebar__progress-bar">
            <div 
              className="sidebar__progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
