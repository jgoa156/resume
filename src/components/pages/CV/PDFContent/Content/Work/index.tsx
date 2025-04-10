import { View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import PDFExperience from "../../shared/PDFExperience";

// Interfaces
import { IDefaultComponentProps } from "interfaces";
import { IExperience } from "interfaces";

export default function Work({ t, theme }: IDefaultComponentProps) {
  const contentNsObject: IExperience[] = Array.from(t("work.jobs", { returnObjects: true }));

  return (
    <View>
      <PDFTitle title={t("work.title")} theme={theme} />

      <View>
        {contentNsObject?.map((experience) => <PDFExperience {...experience} theme={theme} />)}
      </View>
    </View>
  )
}