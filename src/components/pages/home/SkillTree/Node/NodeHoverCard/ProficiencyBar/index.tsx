// Custom
import { ProficiencyWrapper } from "./components";

// Interfaces
interface IProficiencyBarProps {
  proficiency: number;
}

export default function ProficiencyBar({ proficiency }: IProficiencyBarProps) {
  const proficiencyDetails = {
    1: "Beginner",
    2: "Moderate",
    3: "Advanced",
    4: "Proficient",
    5: "Expert"
  }

  return (
    <ProficiencyWrapper>
      {Array.from({ length: proficiency }, (_, index) => (
        <div key={index} className="filled" />
      ))}
      {Array.from({ length: 5 - proficiency }, (_, index) => (
        <div key={index} />
      ))}

      <p>{proficiencyDetails[proficiency]}</p>
    </ProficiencyWrapper>
  )
}