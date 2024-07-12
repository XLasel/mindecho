import { SectionWrapper, SectionTitle, SectionContent } from "./sectionLayout";

export const AboutCBT = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Что такое когнитивно-поведенческая терапия?</SectionTitle>
      <SectionContent sizeText="big">
        <p>
          <strong>Когнитивно-поведенческая терапия (КПТ)</strong>&nbsp;&mdash;
          это научно обоснованный метод психотерапии, который помогает людям
          осознать и&nbsp;изменить негативные мыслительные шаблоны.
        </p>
        <p>
          <strong>КПТ</strong> фокусируется на&nbsp;текущих проблемах
          и&nbsp;помогает развивать навыки для управления ими.
        </p>
      </SectionContent>
    </SectionWrapper>
  );
};
