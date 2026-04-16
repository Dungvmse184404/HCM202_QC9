import React from 'react';
import { Lightbulb } from 'lucide-react';

const KeyTakeaways = ({ takeaways }) => {
  return (
    <section className="key-takeaways">
      <h2 className="key-takeaways__title">
        <Lightbulb size={24} className="key-takeaways__title-icon" />
        Điểm chính cần nhớ
      </h2>
      
      <div className="key-takeaways__grid">
        {takeaways.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="takeaway-card">
              <div className="takeaway-card__icon">
                <IconComponent size={20} />
              </div>
              <h3 className="takeaway-card__title">{item.title}</h3>
              <p className="takeaway-card__summary">{item.summary}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyTakeaways;
