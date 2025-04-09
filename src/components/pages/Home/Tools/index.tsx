import { OverlayTrigger, Tooltip } from "react-bootstrap";

// Shared
import * as Icons from "components/shared/Icons";
import Title from "components/shared/Title";

// Custom
import {
  ToolsWrapper,
  ItemWrapper,
  Item,
} from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Tools({ t }: IDefaultComponentProps) {
  // Tools
  const _tools = [
    { title: "HTML 5", icon: <Icons.IconHTML />, color: "#ff6614" },
    { title: "CSS 3", icon: <Icons.IconCSS />, color: "#00ade5" },
    { title: "C", icon: <Icons.IconC />, color: "#3946ac", direction: "bottom" },
    { title: "PHP", icon: <Icons.IconPHP />, color: "#8993c1" },
  ];

  const tools = [
    { title: "Java", icon: <Icons.IconJava />, color: "#ea2a37" },
    { title: "JavaScript", icon: <Icons.IconJS />, color: "#f7f418" },
    { title: "React, React Native", icon: <Icons.IconReact />, color: "#61dbfb" },
    { title: "Python 3", icon: <Icons.IconPython />, color: "#fbd35a" },
    { title: "Node", icon: <Icons.IconNode />, color: "#539e43" },
    { title: "MySQL", icon: <Icons.IconMySQL />, color: "#5382a1" },
    { title: "Next", icon: <Icons.IconNext />, color: "#4a5563" },
    { title: "Nest", icon: <Icons.IconNest />, color: "#e0234e" },
    { title: "Express.JS", icon: <Icons.IconExpress />, color: "#787878" },
    { title: "Jest", icon: <Icons.IconJest />, color: "#9a405b" },
  ];

  return (
    <ToolsWrapper id="main-tools">
      <div className="no-default-styling">
        <Title>{t("tools.title")}</Title>

        <ItemWrapper>
          {tools.map((tool, index) => {
            return (
              <OverlayTrigger placement={index < 5 ? "top" : "bottom"} overlay={<Tooltip>{tool.title}</Tooltip>}>
                <Item key={index} color={tool.color}>
                  {tool.icon}
                </Item>
              </OverlayTrigger>
            )
          })}
        </ItemWrapper>
      </div>
    </ToolsWrapper>
  );
}