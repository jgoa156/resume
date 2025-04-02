// Custom
import Header from "./Header";
import Contact from "./Contact";
import Bio from "./Bio";
import Skills from "./Skills";
import { SummaryWrapper } from "./components";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Summary({ t }: IDefaultComponentProps) {
  return (
    <SummaryWrapper>
      <Header t={t} />
      <Bio t={t} />
      <Contact t={t} />
      <Skills t={t} />
    </SummaryWrapper>
  );
}