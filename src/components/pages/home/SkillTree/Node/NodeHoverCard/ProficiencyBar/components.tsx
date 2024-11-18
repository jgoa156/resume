import styled from 'styled-components';

export const ProficiencyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  margin: 20px 0 0;

  & > div {
    width: 100%;
    height: 3px;
    background-color: var(--color-2);

    &.filled {
      background-color: var(--primary-color);
    }
  }

  p {
    margin: 0;
    grid-column: span 5;
    font-style: italic;
  }
`;