import React from 'react';
import { ExternalLink } from 'lucide-react';
import ContentHeader from './ContentHeader';
import HeroImage from './HeroImage';
import KeyTakeaways from './KeyTakeaways';
import {
  ContentSection,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
  BulletList,
  HighlightBox,
  TwoColumn
} from './ContentSection';
import FooterNavigation from './FooterNavigation';

const LabeledList = ({ items }) => (
  <div className="labeled-list">
    {items.map((item, i) => (
      <div key={i} className="labeled-item">
        <strong>{item.label}</strong>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
);

const ModuleContent = ({ module, moduleData, prevModule, nextModule, onNavigate }) => {
  const renderContent = () => {
    switch (module.id) {

      case 'module-1':
        return (
          <>
            <ContentSection>
              <SectionTitle>Khái niệm và vị trí của văn hóa</SectionTitle>
              <Paragraph>{moduleData.content.definition}</Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.roles.title}</SectionTitle>
              <BulletList items={moduleData.content.roles.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.orientation.title}</SectionTitle>
              <Paragraph>{moduleData.content.orientation.content}</Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.threeQualities.title}</SectionTitle>
              <LabeledList items={moduleData.content.threeQualities.items} />
            </ContentSection>
          </>
        );

      case 'module-2':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.role.title}</SectionTitle>
              <HighlightBox title="⚡ Luận điểm cốt lõi" type="warning">
                {moduleData.content.role.content}
              </HighlightBox>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.fourStandards.title}</SectionTitle>
              <LabeledList items={moduleData.content.fourStandards.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.threePrinciples.title}</SectionTitle>
              <LabeledList items={moduleData.content.threePrinciples.items} />
            </ContentSection>
          </>
        );

      case 'module-3':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.conception.title}</SectionTitle>
              <Paragraph>{moduleData.content.conception.content}</Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.goalAndForce.title}</SectionTitle>
              <TwoColumn
                positive={{
                  title: 'Con người là mục tiêu',
                  items: [moduleData.content.goalAndForce.goalContent]
                }}
                negative={{
                  title: 'Con người là động lực',
                  items: [moduleData.content.goalAndForce.forceContent]
                }}
              />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.strategy.title}</SectionTitle>
              <HighlightBox title="💬 Lời Bác Hồ" type="info">
                {moduleData.content.strategy.quote}
              </HighlightBox>
              <Paragraph>{moduleData.content.strategy.content}</Paragraph>
              <SectionSubtitle>Biện pháp chủ yếu</SectionSubtitle>
              <BulletList items={moduleData.content.strategy.methods} />
            </ContentSection>
          </>
        );

      case 'module-4':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.relationship.title}</SectionTitle>
              <BulletList items={moduleData.content.relationship.points} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.significance.title}</SectionTitle>
              <TwoColumn
                positive={{
                  title: 'Ý nghĩa lý luận',
                  items: [moduleData.content.significance.theoretical]
                }}
                negative={{
                  title: 'Ý nghĩa thực tiễn',
                  items: [moduleData.content.significance.practical]
                }}
              />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.application.title}</SectionTitle>
              <BulletList items={moduleData.content.application.items} />
              <HighlightBox title="✅ Kết luận" type="success">
                {moduleData.content.conclusion}
              </HighlightBox>
            </ContentSection>
          </>
        );

      case 'module-ai':
        return (
          <>
            <ContentSection>
              <SectionTitle>Công cụ AI được sử dụng</SectionTitle>
              <Paragraph>{moduleData.content.introduction}</Paragraph>
              <div className="ai-tool-grid">
                {moduleData.content.tools.map((tool) => (
                  <div key={tool.name} className="ai-tool-card">
                    <span className="ai-tool-card__name">{tool.name}</span>
                    <p className="ai-tool-card__desc">{tool.description}</p>
                    {tool.promptLink ? (
                      <a
                        href={tool.promptLink}
                        className="ai-tool-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xem Prompt <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span
                        className="ai-tool-card__link ai-tool-card__link--hidden"
                        aria-hidden="true"
                      >
                        Xem Prompt
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ContentSection>

            <ContentSection>
              <SectionTitle>Nguồn tham khảo</SectionTitle>
              <ul className="ref-list">
                {moduleData.content.references.map((ref, i) => (
                  <li key={i} className="ref-item">
                    <span className="ref-item__title">{ref.title}</span>
                    {ref.link ? (
                      <a
                        href={ref.link}
                        className="ref-item__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={13} /> Xem tài liệu
                      </a>
                    ) : (
                      <span
                        className="ref-item__link ref-item__link--hidden"
                        aria-hidden="true"
                      >
                        <ExternalLink size={13} /> Xem tài liệu
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </ContentSection>

            <ContentSection>
              <SectionTitle>Cam kết của nhóm 6</SectionTitle>
              <HighlightBox title="✓ Cam kết" type="success">
                {moduleData.content.teamCommitment}
              </HighlightBox>
            </ContentSection>
          </>
        );

      default:
        return (
          <ContentSection>
            <SectionTitle>Nội dung đang được cập nhật</SectionTitle>
            <Paragraph>Phần nội dung này đang được biên soạn. Vui lòng quay lại sau.</Paragraph>
          </ContentSection>
        );
    }
  };

  return (
    <div className="main-content">
      <div className="main-content__inner">
        <ContentHeader
          category={moduleData.category}
          title={moduleData.title}
          readingTime={moduleData.readingTime}
          lastUpdated={moduleData.lastUpdated}
        />

        {moduleData.heroImage && (
          <HeroImage src={moduleData.heroImage} alt={moduleData.heroAlt} />
        )}

        <KeyTakeaways takeaways={moduleData.takeaways} />

        {renderContent()}

        <FooterNavigation
          prevModule={prevModule}
          nextModule={nextModule}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};

export default ModuleContent;
