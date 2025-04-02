// Custom
import { ExperienceWrapper, Info } from "./styles";

// Interfaces
export interface IExperience {
  name: string,
  type: string,
  institution?: string,
  company?: string,
  icon: string,
  iconProps?: any,
  start: string,
  end: string,
  short: string,
  description: any[]
}

export default function Experience({ name, type, institution, company, icon, iconProps, start, end, short }: IExperience) {
  return (
    <ExperienceWrapper>
      <img src={icon} style={{ ...iconProps }} />
      <Info>
        <h3>
          {company ? company : institution}
          <label>- {name}</label>
          <span>- {type}</span>
        </h3>

        <p>{start} - {end}</p>

        {short && (
          <ul>
            <li><span>{short}</span></li>
          </ul>
        )}
      </Info>
    </ExperienceWrapper>
  )
}