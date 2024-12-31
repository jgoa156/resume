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
  justify-self: center;
  width: 85%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    width: 100%;
    display: block;

    .slick-slide {
      width: 360px !important;

      & > div {
        
      }
    }
  }

  @media (max-width: 768px) {
    .slick-track {
      margin-left: calc((100vw - 360px) / 2);
    }
  }
`;

export const CarouselDots = styled.div`
  
`;