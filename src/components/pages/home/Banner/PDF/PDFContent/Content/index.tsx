// Custom
import { ContentWrapper } from "./components";
import Education from "./Education";
import Work from "./Work";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Content({ t }: IDefaultComponentProps) {
  return (
    <ContentWrapper>
      <Work t={t} />
      <Education t={t} />
    </ContentWrapper>
  );
}