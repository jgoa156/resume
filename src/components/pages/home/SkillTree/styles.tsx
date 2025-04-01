import SectionWrapper from 'components/shared/SectionWrapper';
import styled from 'styled-components';

export const SkillTreeWrapper = styled(SectionWrapper)`
  & > div {
    @media (max-width: 1024px) {
      padding: 120px 0 0 !important;
    }
	}
`;

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

export const CarouselDot = styled.div`
  background-color: var(--color-2);
  width: 20px;
  height: 4px;
  content: "";
`;