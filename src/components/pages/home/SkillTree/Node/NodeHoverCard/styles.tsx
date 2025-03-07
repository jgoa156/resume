import styled from 'styled-components';

export const NodeHoverCardWrapper = styled.div`
  width: 250px;
  padding: 10px 15px;

  text-align: left;

  background-color: var(--color-1);
  border: 1px solid var(--color-2);
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  p.details {
    margin: 10px 0 0;
  }
`;

export const NodeHoverCardHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  i {
    font-size: 40px;
  }
  .svgIcon {
    width: 40px;
    height: 40px;
  }
  i, .svgIcon {
    color: var(--primary-color);
    color: var(--primary-color);
  }

  h4 {
    margin: 0px;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    margin: 0px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted);
  }
`;