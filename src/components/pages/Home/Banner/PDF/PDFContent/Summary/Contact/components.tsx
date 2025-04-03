import styled from 'styled-components';

export const ContactWrapper = styled.div`
  p {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    i {
      font-size: 15px;
      margin-right: 15px;
    }
  }
`;

export const QRWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 95px;
    height: 95px;
  }
`;