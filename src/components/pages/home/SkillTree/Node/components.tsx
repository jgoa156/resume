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
  height: 140px;
  z-index: -1;
`;

const nodeConduitBase = `
  position: absolute;
  height: 2px;

  background-color: var(--color-2);

  content: "";
`;

// Specific direction node conduit
type IConduitDirections = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
const conduitDirections = {
  topLeft: {
    first: `
      top: 30px;
      left: 40px;
      width: 40px;
      transform: rotate(45deg);
    `,
    second: `
      bottom: -10px;
      left: -25px;
      width: 30px;
      transform: rotate(-45deg);
    `
  },
  topRight: {
    first: `
      top: 30px;
      right: 40px;
      width: 40px;
      transform: rotate(-45deg);
    `,
    second: `
      bottom: -10px;
      right: -25px;
      width: 30px;
      transform: rotate(45deg);
    `
  },
  bottomLeft: {
    first: `
      bottom: 30px;
      left: 40px;
      width: 40px;
      transform: rotate(-45deg);
    `,
    second: `
      top: -10px;
      left: -25px;
      width: 30px;
      transform: rotate(45deg);
    `
  },
  bottomRight: {
    first: `
      bottom: 30px;
      right: 40px;
      width: 40px;
      transform: rotate(45deg);
    `,
    second: `
      top: -10px;
      right: -25px;
      width: 30px;
      transform: rotate(-45deg);
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
      width: 80px;
      height: 80px;
      transform: rotate(45deg);

      background: linear-gradient(to right, var(--muted), var(--muted));

      margin-bottom: 150px;
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
      top: -30px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 60px 150px;
    `
  },
  secondary: {
    body: `
      width: 110px;
      min-height: 40px;
      height: fit-content;

      background: linear-gradient(to right, var(--color-2), var(--color-2));
      padding: 2px;

      font-size: 0.75rem;
    `,
    content: `
      padding: 5px 0;
      background: var(--color-1);

      & > div {
        h5 {
          font-size: 0.875rem;
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

    ${({ type, childrenNumber }) => type === "main" && `
      :after {
        position: absolute;
        margin-top: 2px;
        left: calc(50% - 1.5px);

        height: calc(75px + ${childrenNumber ? childrenNumber * 180 : 0}px);
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
