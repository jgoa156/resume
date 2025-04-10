import { View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import PDFExperience from "../../shared/PDFExperience";

// Interfaces
import { IDefaultComponentProps } from "interfaces";
import { IExperience } from "interfaces";

export default function Education({ t, theme }: IDefaultComponentProps) {
  const contentNsObject: IExperience[] = Array.from(t("about.education.certificates", { returnObjects: true }));

  return (
    <View>
      <PDFTitle title={t("about.education.title")} theme={theme} />

      <View>
        {contentNsObject?.map((experience) => <PDFExperience {...experience} theme={theme} />)}
      </View>
    </View>
  )
}