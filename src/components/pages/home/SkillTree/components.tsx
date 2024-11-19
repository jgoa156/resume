import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 1280px;
    
    padding: 120px 0 0;

    @media (max-width: 768px) {
      padding: 120px 0 0;
    }
  }
`;

export const SkillTreeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  // margin-top: 32px;
`;