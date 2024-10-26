import styled from 'styled-components';

export const NodeHoverCardWrapper = styled.div`
  width: 350px;
  padding: 20px 25px;

  text-align: left;

  background-color: var(--color-1);
  border: 1px solid var(--color-2);
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  p {
    margin: 0;
  }
`;

export const NodeHoverCardHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  i {
    font-size: 50px;
    color: var(--primary-color);
  }

  h4 {
    margin-bottom: 0px;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--muted);
  }
`;