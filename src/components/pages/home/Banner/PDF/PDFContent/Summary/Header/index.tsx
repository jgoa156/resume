// Custom
import { HeaderWrapper } from "./components";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Header({ t }: IDefaultComponentProps) {
  return (
    <HeaderWrapper>
      <h1>{t("name")}</h1>
    </HeaderWrapper>
  );
}