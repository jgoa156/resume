// Custom
import { HeaderWrapper } from "./components";

// Interfaces
import { ITranslatedCVComponent } from "../../interfaces";

export default function Header({ t }: ITranslatedCVComponent) {
  return (
    <HeaderWrapper>
      <h1>{t("header.name")}</h1>
    </HeaderWrapper>
  );
}