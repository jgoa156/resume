import styled from 'styled-components';

// CopyToClipboardSpan button
export const CopyToClipboardSpan = styled.span`
  margin-left: 5px;

  color: var(--muted);
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    color: var(--muted-hover);
  }
  
  & > i {
    margin-left: 5px;
    font-size: 1rem;
    vertical-align: text-top;
  }
`;