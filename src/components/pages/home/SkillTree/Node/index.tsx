// Custom
import NodeHoverCard from "./NodeHoverCard";
import {
  NodeBody,
  NodeChildren,
  NodeConduit,
  NodeConduitWrapper,
  NodeContent,
  NodeWrapper
} from "./components";

// Interfaces
import { INodeProps } from "../interfaces";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Node({ t, type, title, years, proficiency, details, icon, imgSrc, iconNode, childNodes }: INodeProps) {
  const conduitDirections = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  const renderHoverCard = (props) => {
    const disabled = type === "main";
    if (disabled) return <></>;
    return <Tooltip {...props}><NodeHoverCard  {...{ t, type, title, years, proficiency, details, icon, imgSrc, iconNode }} /></Tooltip>;
  }

  return (
    <NodeWrapper type={type} childrenNumber={childNodes?.length}>
      <NodeBody>
        <OverlayTrigger
          placement="right"
          overlay={renderHoverCard}
          delay={{ show: 20, hide: 50 }}
        >
          <NodeContent>
            <div>
              {(type === "primary" && iconNode) && iconNode}
              {(type === "primary" && icon) && <i className={icon} />}
              {(type === "primary" && imgSrc) && <img src={imgSrc} alt={title} />}
              {((((type === "primary" && !icon && !imgSrc && !iconNode) || type !== "primary")) && title) && <h5>{title}</h5>}
            </div>
          </NodeContent>
        </OverlayTrigger>
      </NodeBody>


      {type === "primary" &&
        <NodeConduitWrapper>
          {childNodes?.map((_, index) => (
            <NodeConduit key={index} direction={conduitDirections[index]} />
          ))}
        </NodeConduitWrapper>
      }

      <NodeChildren>
        {childNodes && childNodes.map((child, index) => (
          <Node key={index} t={t} {...child} />
        ))}
      </NodeChildren>
    </NodeWrapper>
  );
}