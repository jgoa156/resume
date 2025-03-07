import styled from 'styled-components';

export const SkillTreeNodesWrapper = styled.div`
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