import { useTranslation } from "next-i18next";

// Components
import Header from "./Header";
import Contact from "./Contact";
import Bio from "./Bio";
import Skills from "./Skills";
import { SummaryWrapper } from "./components";


export default function Summary() {
  const { t, ready } = useTranslation(["cv"], { keyPrefix: "summary" });

  if (!ready) return null;
  return (
    <SummaryWrapper>
      <Header t={t} />
      <Bio t={t} />
      <Contact t={t} />
      <Skills t={t} />
    </SummaryWrapper>
  );
}