import styled from "styled-components";
import { Tooltip } from "react-bootstrap";
import { INodeType } from "../interfaces";

const radius = "5px";

export const NodeBody = styled.div`
  padding: 2px;

  background: linear-gradient(to right, var(--primary-color), var(--primary-color-2));
  border-radius: ${radius};
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
`;

export const NodeContent = styled.div`  
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
  text-align: center;
  background-color: var(--color-3);
  border-radius: ${radius};
  color: var(--text-default-color);

  transition: 0.3s;

  h5 {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--color-4) !important;
  }
`;

export const NodeChildren = styled.div`
  flex-direction: column;
  gap: 8px;
`;

// Node conduits
export const NodeConduitWrapper = styled.div`
  position: absolute;
  top: -30px;
  width: 200px;
  height: 130px;
  z-index: -1;
`;

const nodeConduitBase = `
  position: absolute;
  height: 2px;

  background-color: var(--color-2);

  content: "";
`;

// Specific direction node conduit
const conduitConstants = {
  first: {
    top: 35,
    left: 65,
    width: 15,
    rotate: 30
  },
  second: {
    bottom: -8,
    left: -30,
    width: 33,
    rotate: 30
  }
}

type IConduitDirections = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
const conduitDirections = {
  topLeft: {
    first: `
      top: ${conduitConstants.first.top}px;
      left: ${conduitConstants.first.left}px;
      width: ${conduitConstants.first.width}px;
      transform: rotate(${conduitConstants.first.rotate}deg);
    `,
    second: `
      bottom: ${conduitConstants.second.bottom}px;
      left: ${conduitConstants.second.left}px;
      width: ${conduitConstants.second.width}px;
      transform: rotate(-${conduitConstants.second.rotate}deg);
    `
  },
  topRight: {
    first: `
      top: ${conduitConstants.first.top}px;
      right: ${conduitConstants.first.left}px;
      width: ${conduitConstants.first.width}px;
      transform: rotate(-${conduitConstants.first.rotate}deg);
    `,
    second: `
      bottom: ${conduitConstants.second.bottom}px;
      right: ${conduitConstants.second.left}px;
      width: ${conduitConstants.second.width}px;
      transform: rotate(${conduitConstants.second.rotate}deg);
    `
  },
  bottomLeft: {
    first: `
      bottom: ${conduitConstants.first.top}px;
      left: ${conduitConstants.first.left}px;
      width: ${conduitConstants.first.width}px;
      transform: rotate(-${conduitConstants.first.rotate}deg);
    `,
    second: `
      top: ${conduitConstants.second.bottom}px;
      left: ${conduitConstants.second.left}px;
      width: ${conduitConstants.second.width}px;
      transform: rotate(${conduitConstants.second.rotate}deg);
    `
  },
  bottomRight: {
    first: `
      bottom: ${conduitConstants.first.top}px;
      right: ${conduitConstants.first.left}px;
      width: ${conduitConstants.first.width}px;
      transform: rotate(${conduitConstants.first.rotate}deg);
    `,
    second: `
      top: ${conduitConstants.second.bottom}px;
      right: ${conduitConstants.second.left}px;
      width: ${conduitConstants.second.width}px;
      transform: rotate(-${conduitConstants.second.rotate}deg);
    `
  }
}

export const NodeConduit = styled.div<{ direction: IConduitDirections }>`
  ${nodeConduitBase}
  ${({ direction }) => conduitDirections[direction].first}

  &:after {
    ${nodeConduitBase}
    ${({ direction }) => conduitDirections[direction].second}
  }
`;

const nodes = {
  main: {
    body: `
      z-index: 10;
      width: 150px;
      height: 50px;

      margin-bottom: 75px;
    `,
    content: `
      font-family: "Parkson";

      & > div {
        h5 {
          font-size: 1.8rem;    
        }
      }
    `,
    children: `
      z-index: 10;
    `
  },
  primary: {
    body: `
      width: 70px;
      height: 70px;
      transform: rotate(45deg);

      background: linear-gradient(to right, var(--muted), var(--muted));

      margin-bottom: 90px;
      border-radius: 15px;
      z-index: 15;
    `,
    content: `
      border-radius: 15px;
      & > div {
        transform: rotate(-45deg);
        color: var(--primary-color);

        svg {
          width: 2.5rem;
          height: 2.5rem;
        }
        i {
          font-size: 2.5rem;
        }

        h5 {
          font-size: 1rem;
        }
      }
    `,
    children: `
      position: absolute;
      top: -10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px 100px;
    `
  },
  secondary: {
    body: `
      width: 90px;
      min-height: 30px;
      height: fit-content;

      background: linear-gradient(to right, var(--color-2), var(--color-2));
      padding: 2px;
    `,
    content: `
      padding: 5px 0;
      background: var(--color-1);

      & > div {
        h5 {
          font-size: 0.75rem;
          font-weight: bold;
        }
      }
    `,
    children: ``
  },
};

export const NodeWrapper = styled.div<{ type: INodeType, childrenNumber?: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${NodeBody} {
    ${({ type }) => nodes[type]?.body}

    & > ${NodeContent} {
      ${({ type }) => nodes[type]?.content}
    }

    // Main/middle conduit
    ${({ type, childrenNumber }) => type === "main" && `
      :after {
        position: absolute;
        margin-top: 2px;
        left: calc(50% - 1.5px);

        height: calc(75px + ${childrenNumber ? childrenNumber * 120 : 0}px);
        width: 3px;

        display: flex;
        align-items: center;
        z-index: -10;

        background-color: var(--color-2);
        content: "";
      }
    `}
  }

  & > ${NodeChildren} {
    ${({ type }) => nodes[type]?.children}
  }
`;
