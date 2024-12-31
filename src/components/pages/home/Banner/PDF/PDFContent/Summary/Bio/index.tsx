// Shared
import Title from "components/shared/Title";

// Custom
import { BioWrapper } from "./components";

// Interfaces
import { ITranslatedCVComponent } from "../../interfaces";


export default function Bio({ t }: ITranslatedCVComponent) {
  const contentNsObject = Array.from(t("bio.content", { returnObjects: true }));

  return (
    <BioWrapper>
      <Title alignLeft={true}>{t("bio.title")}</Title>
      {contentNsObject.map((content: string, index: number) => (
        <p key={index}>{content}</p>
      ))}
    </BioWrapper>
  );
}