// Custom
import { ProficiencyWrapper } from "./styles";

// Interfaces
interface IProficiencyBarProps {
  t?: any;
  proficiency: number;
}

export default function ProficiencyBar({ t, proficiency }: IProficiencyBarProps) {
  const proficiencyNsLabels = t("card.proficiency", { returnObjects: true });
  const proficiencyDetails = proficiencyNsLabels.reduce((acc, label, index) => {
    acc[index + 1] = label;
    return acc;
  }, {});

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