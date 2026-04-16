import React from 'react';
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

const ModuleContent = ({ module, moduleData, prevModule, nextModule, onNavigate }) => {
  // Render different content based on module ID
  const renderContent = () => {
    switch (module.id) {
      case 'module-1':
        return (
          <>
            <ContentSection>
              <SectionTitle>Bối cảnh toàn cầu hóa</SectionTitle>
              <Paragraph>{moduleData.content.overview}</Paragraph>
              
              <BulletList items={moduleData.content.mainPoints} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>Thách thức với Việt Nam</SectionTitle>
              <Paragraph>{moduleData.content.deepDive}</Paragraph>
              
              <HighlightBox title="❓ Câu hỏi đặt ra" type="info">
                {moduleData.content.keyQuestion}
              </HighlightBox>
            </ContentSection>
          </>
        );

      case 'module-2':
        return (
          <>
            <ContentSection>
              <SectionTitle>Khái niệm Hội nhập Kinh tế Quốc tế</SectionTitle>
              <Paragraph>
                <strong>{moduleData.content.definition}</strong>
              </Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.whyIntegrate.title}</SectionTitle>
              <BulletList items={moduleData.content.whyIntegrate.items} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.preparation.title}</SectionTitle>
              <BulletList items={moduleData.content.preparation.items} />
            </ContentSection>
          </>
        );

      case 'module-3':
        return (
          <>
            <ContentSection>
              <SectionTitle>Tác động của Hội nhập Kinh tế</SectionTitle>
              <Paragraph>
                <strong>{moduleData.content.intro}</strong>
              </Paragraph>
              
              <TwoColumn 
                positive={moduleData.content.positive}
                negative={moduleData.content.negative}
              />
            </ContentSection>
          </>
        );

      case 'module-4':
        return (
          <>
            <ContentSection>
              <SectionTitle>Vấn đề cốt lõi</SectionTitle>
              <HighlightBox title="🎯 Mâu thuẫn cần giải quyết" type="warning">
                {moduleData.content.coreIssue}
              </HighlightBox>
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.whyAccept.title}</SectionTitle>
              <Paragraph>{moduleData.content.whyAccept.content}</Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>Hai mặt của vấn đề</SectionTitle>
              <TwoColumn 
                positive={{
                  title: moduleData.content.twoSides.opportunity.title,
                  items: [moduleData.content.twoSides.opportunity.content]
                }}
                negative={{
                  title: moduleData.content.twoSides.risk.title,
                  items: [moduleData.content.twoSides.risk.content]
                }}
              />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.dialectical.title}</SectionTitle>
              <BulletList items={moduleData.content.dialectical.points} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>{moduleData.content.solutions.title}</SectionTitle>
              <BulletList items={moduleData.content.solutions.items} />
              
              <HighlightBox title="✅ Kết luận" type="success">
                {moduleData.content.conclusion}
              </HighlightBox>
            </ContentSection>
          </>
        );

      case 'module-end':
        return (
          <>
            <ContentSection>
              <SectionTitle>🎉 Chúc mừng!</SectionTitle>
              <Paragraph>
                <strong>{moduleData.content.congratulations}</strong>
              </Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>📚 Những gì bạn đã học</SectionTitle>
              <BulletList items={moduleData.content.summary} />
            </ContentSection>

            <ContentSection>
              <HighlightBox title="🎮 Bước tiếp theo" type="info">
                {moduleData.content.nextStep}
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
              <BulletList items={moduleData.content.toolsUsed} />
            </ContentSection>

            <ContentSection>
              <SectionTitle>Nguồn tham khảo</SectionTitle>
              <Paragraph>
                <strong>Tài liệu chính:</strong> {moduleData.content.sources.primary}
              </Paragraph>
              <Paragraph>
                <strong>Tài liệu phụ:</strong> {moduleData.content.sources.secondary}
              </Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionTitle>Cam kết của nhóm Thomas Picasso</SectionTitle>
              <HighlightBox title="✓ Cam kết" type="success">
                {moduleData.content.teamCommitment}
              </HighlightBox>
            </ContentSection>

            <ContentSection>
              <SectionTitle>Mục đích sử dụng</SectionTitle>
              <Paragraph>{moduleData.content.usage}</Paragraph>
            </ContentSection>
          </>
        );

      default:
        return (
          <ContentSection>
            <SectionTitle>Nội dung đang được cập nhật</SectionTitle>
            <Paragraph>
              Phần nội dung này đang được biên soạn. Vui lòng quay lại sau.
            </Paragraph>
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
          <HeroImage 
            src={moduleData.heroImage} 
            alt={moduleData.heroAlt} 
          />
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
