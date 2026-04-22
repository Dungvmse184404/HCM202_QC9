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

const ComparisonTable = ({ data }) => (
  <div className="comparison-table-wrapper">
    <table className="comparison-table">
      <thead>
        <tr>
          {data.headers.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, i) => (
          <tr key={i}>
            <td className="comparison-table__criteria">{row.criteria}</td>
            <td>{row.tonGiao}</td>
            <td>{row.tinNguong}</td>
            <td className="comparison-table__negative">{row.meTinDiDoan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ModuleContent = ({ module, moduleData, prevModule, nextModule, onNavigate }) => {
  const renderContent = () => {
    switch (module.id) {

      case 'module-1':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.definitions.title}</SectionTitle>
              <LabeledList items={moduleData.content.definitions.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.comparisonTable.title}</SectionTitle>
              <ComparisonTable data={moduleData.content.comparisonTable} />
            </ContentSection>
          </>
        );

      case 'module-2':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.economic.title}</SectionTitle>
              <BulletList items={moduleData.content.economic.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.psychological.title}</SectionTitle>
              <BulletList items={moduleData.content.psychological.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.cognitive.title}</SectionTitle>
              <BulletList items={moduleData.content.cognitive.items} />
            </ContentSection>
          </>
        );

      case 'module-3':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.characteristics.title}</SectionTitle>
              <BulletList items={moduleData.content.characteristics.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.policy.title}</SectionTitle>
              <BulletList items={moduleData.content.policy.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.freedomLimits.title}</SectionTitle>
              <Paragraph>{moduleData.content.freedomLimits.intro}</Paragraph>
              <LabeledList items={moduleData.content.freedomLimits.items} />
            </ContentSection>
          </>
        );

      case 'module-end':
        return (
          <>
            <ContentSection>
              <SectionTitle>{moduleData.content.whyYouth.title}</SectionTitle>
              <LabeledList items={moduleData.content.whyYouth.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.freedomQuestion.title}</SectionTitle>
              <HighlightBox title="Trả lời: KHÔNG" type="warning">
                {moduleData.content.freedomQuestion.answer}
              </HighlightBox>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.solutions.title}</SectionTitle>
              <SectionSubtitle>{moduleData.content.solutions.family.subtitle}</SectionSubtitle>
              <BulletList items={moduleData.content.solutions.family.items} />
              <SectionSubtitle>{moduleData.content.solutions.society.subtitle}</SectionSubtitle>
              <BulletList items={moduleData.content.solutions.society.items} />
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
              <SectionTitle>Cam kết của Nhóm 5</SectionTitle>
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
