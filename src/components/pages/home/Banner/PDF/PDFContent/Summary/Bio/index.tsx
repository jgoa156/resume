// Shared
import Title from "components/shared/Title";

// Custom
import { BioWrapper } from "./components";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Bio({ t }: IDefaultComponentProps) {
  const contentNsObject = Array.from(t("about.general.content", { returnObjects: true }));

  return (
    <BioWrapper>
      <Title alignLeft={true}>{t("about.title")}</Title>
      {contentNsObject.map((content: string, index: number) => (
        <p key={index}>{content}</p>
      ))}
    </BioWrapper>
  );
}