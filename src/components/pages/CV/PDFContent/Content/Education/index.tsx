import { View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import PDFExperience from "../../shared/PDFExperience";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";
import { IExperience } from "components/shared/Experience";

export default function Education({ t }: IDefaultComponentProps) {
  const contentNsObject: IExperience[] = Array.from(t("about.education.certificates", { returnObjects: true }));

  return (
    <View>
      <PDFTitle title={t("about.education.title")} />

      <View>
        {contentNsObject?.map((experience) => <PDFExperience {...experience} />)}
      </View>
    </View>
  )
}