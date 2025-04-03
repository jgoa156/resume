import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  strong {
    color: var(--primary-color);
  }

  ul {
    padding: 0;
    list-style: none;

    &.category {
      list-style-position: inside;
      list-style-type: circle;
    }

    li {
      padding: 0 0 5px;
      
      &.category {
        padding-left: 0;
        
        & > strong {
          font-size: 1.25rem;
          color: var(--text-default-color);
          text-transform: uppercase;
          font-family: "Parkson";
        }
      }
    }
  }
`;