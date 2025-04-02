import styled from 'styled-components';

export const ListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const ExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 20px;
  margin-bottom: 15px;

  i, img {
    width: 30px;
    height: auto;
  }
`;

export const Info = styled.div`
  h3 {
    margin-bottom: 5px;
    font-size: 10px;
    font-weight: bold;
    color: var(--primary-color);

    label {
      padding-left: 3px;
      font-weight: normal;
      color: var(--text-default-color);
    }
    span {
      padding-left: 3px;
      font-weight: normal;
      color: var(--muted);
    }
  }

  p {
    color: var(--text-default-lighter-color);
    margin-bottom: 5px;
  }

  ul {
    list-style: inside;
    margin: 0;
    padding: 0;

    li span {
      margin-left: -5px;
    }
  }
`;