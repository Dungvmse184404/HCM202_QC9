import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const ContentSection = ({ children }) => {
  return <section className="content-section">{children}</section>;
};

const SectionTitle = ({ children }) => {
  return <h2 className="content-section__title">{children}</h2>;
};

const SectionSubtitle = ({ children }) => {
  return <h3 className="content-section__subtitle">{children}</h3>;
};

const Paragraph = ({ children }) => {
  return <p className="content-section__text">{children}</p>;
};

const BulletList = ({ items }) => {
  return (
    <ul className="content-section__list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const HighlightBox = ({ title, children, type = 'info' }) => {
  const icons = {
    info: AlertCircle,
    success: CheckCircle,
    warning: AlertTriangle
  };
  const Icon = icons[type] || AlertCircle;

  return (
    <div className="highlight-box">
      <div className="highlight-box__title">
        <Icon size={16} />
        {title}
      </div>
      <div className="highlight-box__text">{children}</div>
    </div>
  );
};

const TwoColumn = ({ positive, negative }) => {
  return (
    <div className="two-column">
      <div className="two-column__item two-column__item--positive">
        <div className="two-column__title">
          <CheckCircle size={18} />
          {positive.title}
        </div>
        <ul className="content-section__list">
          {positive.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="two-column__item two-column__item--negative">
        <div className="two-column__title">
          <AlertTriangle size={18} />
          {negative.title}
        </div>
        <ul className="content-section__list">
          {negative.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export {
  ContentSection,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
  BulletList,
  HighlightBox,
  TwoColumn
};
