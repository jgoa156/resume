// Custom
import ProficiencyBar from "./ProficiencyBar";
import {
  NodeHoverCardHeader,
  NodeHoverCardWrapper
} from "./components";

// Interfaces
import { INodeProps } from "../../interfaces";

export default function NodeHoverCard({ t, title, years, proficiency, details, icon, imgSrc, iconNode }: INodeProps) {
  const yearsNsLabels = t("card.years", { returnObjects: true });

  function YearsOfExperience({ years }: { years: number }) {
    const message =
      years === 1
        ? yearsNsLabels.year
        : years > 1
          ? yearsNsLabels.years
          : yearsNsLabels.less;

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

      {proficiency && <ProficiencyBar t={t} proficiency={proficiency} />}
      {false && details && <p className="details">{details}</p>}
    </NodeHoverCardWrapper>
  )
}