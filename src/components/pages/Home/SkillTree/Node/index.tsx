import { ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// Shared
import { IconExpress, IconJest, IconNest, IconNext, IconPHP, IconWebDesign } from "components/shared/Icons";

// Custom
import NodeHoverCard from "./NodeHoverCard";
import {
  NodeBody,
  NodeChildren,
  NodeConduit,
  NodeConduitWrapper,
  NodeContent,
  NodeWrapper
} from "./styles";

// Interfaces
import { INodeProps } from "../interfaces";

export default function Node({ t, type, title, years, proficiency, details, icon, imgSrc, iconNode, childNodes }: INodeProps) {
  const conduitDirections = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  const renderHoverCard = (props) => {
    const disabled = type === "main";
    if (disabled) return <></>;
    return <Tooltip {...props}><NodeHoverCard  {...{ t, type, title, years, proficiency, details, icon, imgSrc, iconNode }} /></Tooltip>;
  }

  // Skill icon
  function findIcon(skill: string): ReactElement | null {
    const icons = {
      "Next": <IconNext />,
      "Design and Web design": <IconWebDesign />,
      "Jest": <IconJest />,
      "Express": <IconExpress />,
      "Nest": <IconNest />,
      "PHP": <IconPHP />,
    };

    return icons[skill] || null;
  }

  iconNode = findIcon(title);

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