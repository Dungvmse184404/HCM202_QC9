import React from 'react';
import { Clock, Calendar, Tag } from 'lucide-react';

const ContentHeader = ({ category, title, readingTime, lastUpdated }) => {
  return (
    <header className="content-header">
      <div className="content-header__tag">
        <Tag size={12} />
        <span>{category}</span>
      </div>
      
      <h1 className="content-header__title">{title}</h1>
      
      <div className="content-header__meta">
        <div className="content-header__meta-item">
          <Clock size={16} />
          <span>{readingTime} phút đọc</span>
        </div>
        <div className="content-header__meta-item">
          <Calendar size={16} />
          <span>Cập nhật: {lastUpdated}</span>
        </div>
      </div>
    </header>
  );
};

export default ContentHeader;
