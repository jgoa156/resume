// Custom
import ProficiencyBar from "./ProficiencyBar";
import {
  NodeHoverCardHeader,
  NodeHoverCardWrapper
} from "./components";

// Interfaces
import { INodeProps } from "../../interfaces";

export default function NodeHoverCard({ title, years, proficiency, details, icon, imgSrc, iconNode }: INodeProps) {
  function YearsOfExperience({ years }: { years: number }) {
    const message =
      years === 1
        ? `year of experience`
        : years > 1
          ? `years of experience`
          : "Less than a year of experience";

    return (<p>{years > 0 && <b>{years} </b>}{message}</p>);
  }

  return (
    <NodeHoverCardWrapper>
      <NodeHoverCardHeader>
        {(icon || imgSrc || iconNode) && (
          <div>
            {iconNode && iconNode}
            {icon && <i className={icon} />}
            {imgSrc && <img src={imgSrc} alt={title} />}
          </div>
        )}

        <div>
          <h4>{title}</h4>
          {years !== undefined && <YearsOfExperience years={years} />}
        </div>
      </NodeHoverCardHeader>

      {proficiency && <ProficiencyBar proficiency={proficiency} />}
      {details && <p className="details">{details}</p>}
    </NodeHoverCardWrapper>
  )
}