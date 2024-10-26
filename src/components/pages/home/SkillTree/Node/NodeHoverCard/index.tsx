// Custom
import ProficiencyBar from "./ProficiencyBar";
import {
  NodeHoverCardHeader,
  NodeHoverCardWrapper
} from "./components";

// Interfaces
import { INodeProps } from "../../interfaces";

export default function NodeHoverCard({ title, years, proficiency, details, icon, imgSrc }: INodeProps) {
  function YearsOfExperience() {
    const message = years === 0 ? "Less than a year of experience" : years === 1 ? "year of experience" : "years of experience";
    return (<p>{years > 0 && <b>{years}</b>} {message}</p>);
  }

  return (
    <NodeHoverCardWrapper>
      <NodeHoverCardHeader>
        {(icon || imgSrc) && (
          <div>
            {icon && <i className={icon} />}
            {imgSrc && <img src={imgSrc} alt={title} />}
          </div>
        )}

        <div>
          <h4>{title}</h4>
          {years && <YearsOfExperience />}
        </div>
      </NodeHoverCardHeader>

      <ProficiencyBar proficiency={proficiency} />
      {details && <p>{details}</p>}
    </NodeHoverCardWrapper>
  )
}