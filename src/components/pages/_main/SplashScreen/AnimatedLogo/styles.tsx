import styled from "styled-components";

export const Bar = styled.div<{ delay?: number }>`
  height: 50px;
  width: 8px;
  background-color: var(--primary-color);
  margin: 0 5px;
  display: inline-block;
  transform: skewX(-15deg);

  animation: bar 2s infinite;
  animation-delay: ${({ delay }) => delay ? `${delay}s` : '0s'};

  @keyframes bar {
    0% {
      transform: translateY(0) skewX(-15deg);
    }
    25% {
      opacity: 0;
      transform: translateY(150%) skewX(-15deg);
    }
    50% {
      opacity: 0;
      transform: translateY(-150%) skewX(-15deg);
    }
    100% {
      transform: translateY(0%) skewX(-15deg);
    }
  }
`;