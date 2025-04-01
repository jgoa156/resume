// Shared
import * as Icons from "components/shared/Icons";
import Title from "components/shared/Title";

// Custom
import {
  ToolsWrapper,
  ItemWrapper,
  Item
} from "./styles";

// Interfaces
import { ITool } from "./interfaces";
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Tools({ t }: IDefaultComponentProps) {
  // Tools
  const _tools = [
    { title: "HTML 5", icon: <Icons.IconHTML />, color: "#ff6614" },
    { title: "CSS 3", icon: <Icons.IconCSS />, color: "#00ade5" },
    { title: "JavaScript", icon: <Icons.IconJS />, color: "#f7f418" },
    { title: "Java", icon: <Icons.IconJava />, color: "#ea2a37" },
    { title: "PHP", icon: <Icons.IconPHP />, color: "#8993c1" },
    { title: "Python 3", icon: <Icons.IconPython />, color: "#fbd35a", direction: "bottom" },
    { title: "C", icon: <Icons.IconC />, color: "#3946ac", direction: "bottom" },
    { title: "Express.JS", icon: <Icons.IconExpress />, color: "#787878", direction: "bottom" }
  ];

  const tools = [
    { title: "React, React Native", icon: <Icons.IconReact />, color: "#61dbfb", direction: "bottom" },
    { title: "Next", icon: <Icons.IconNext />, color: "#4a5563", direction: "bottom" },
    { title: "Node", icon: <Icons.IconNode />, color: "#539e43", direction: "bottom" },
    { title: "Nest", icon: <Icons.IconNest />, color: "#e0234e", direction: "bottom" },
    { title: "Jest", icon: <Icons.IconJest />, color: "#9a405b", direction: "bottom" },
    { title: "MySQL", icon: <Icons.IconMySQL />, color: "#5382a1", direction: "bottom" },
  ];

  return (
    <ToolsWrapper id="main-tools">
      <div className="no-default-styling">
        <Title>{t("tools.title")}</Title>

        <ItemWrapper>
          {tools.map((tool, index) => {
            return (
              <Item key={index} color={tool.color} direction={tool.direction ? tool.direction : ""}>
                {tool.icon}
                <label>{tool.title}</label>
              </Item>
            )
          })}
        </ItemWrapper>
      </div>
    </ToolsWrapper>
  );
}