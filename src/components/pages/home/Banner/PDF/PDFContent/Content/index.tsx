import { useTranslation } from "react-i18next";
import { ITranslatedCVComponent } from "../interfaces";
import { ContentWrapper } from "./components";
import Education from "./Education";
import Work from "./Work";

export default function Content() {
  const { t, ready } = useTranslation(["cv"], { keyPrefix: "content" });

  if (!ready) return null;
  return (
    <ContentWrapper>
      <Education t={t} />
      <Work t={t} />
    </ContentWrapper>
  );
}