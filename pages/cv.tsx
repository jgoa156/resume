import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Custom
import GeneratePDF from "components/pages/Home/Banner/PDF";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main"]))
    },
  };
}


export default function CV() {
  return (
    <GeneratePDF />
  );
}