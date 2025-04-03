import styled from 'styled-components';

export const PDFContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;

  width: 19.2cm;
  height: fit-content;

  font-size: 10px;
  background: var(--color-1) url("../img/bg_pattern.png") repeat scroll top left;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;

    &:after {
      width: 100%;
      height: 1px;  
    }
  }
`;