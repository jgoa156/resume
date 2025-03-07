// Custom
import { ExperienceWrapper, Info } from "./styles";

// Interfaces
export interface IExperience {
  icon: string,
  institution: string,
  role?: string,
  degree?: string,
  date: string,
  description: string
}

export default function Experience({ icon, institution, role, degree, date, description }: IExperience) {
  return (
    <ExperienceWrapper>
      <img src={`${process.env.img}/components/${role !== undefined ? "Work" : "Education"}/${icon}.png`} />
      <Info>
        <h3>{institution}<span> - {role ? role : degree}</span></h3>
        <p>{date}</p>
        {description && <ul>
          <li><span>{description}</span></li>
        </ul>}
      </Info>
    </ExperienceWrapper>
  )
}