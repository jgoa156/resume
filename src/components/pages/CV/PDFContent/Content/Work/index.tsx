import { View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import PDFExperience from "../../shared/PDFExperience";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";
import { IExperience } from "components/shared/Experience";

export default function Work({ t }: IDefaultComponentProps) {
  const contentNsObject: IExperience[] = Array.from(t("work.jobs", { returnObjects: true }));

  return (
    <View>
      <PDFTitle title={t("work.title")} />

      <View>
        {contentNsObject?.map((experience) => <PDFExperience {...experience} />)}
      </View>
    </View>
  )
}