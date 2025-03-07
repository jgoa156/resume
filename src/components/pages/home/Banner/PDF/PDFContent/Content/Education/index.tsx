import Title from "components/shared/Title";
import { ITranslatedCVComponent } from "../../interfaces";
import { ListWrapper } from "../../../../../../../shared/Experience/styles";
import Experience, { IExperience } from "../../../../../../../shared/Experience";

export default function Education({ t }: ITranslatedCVComponent) {
  const contentNsObject = Array.from(t("education.content", { returnObjects: true })) as IExperience[];

  return (
    <ListWrapper>
      <Title alignLeft={true}>{t("education.title")}</Title>

      <ul>
        {contentNsObject?.map((experience, index) => <li key={index}><Experience {...experience} /></li>)}
      </ul>
    </ListWrapper>
  )
}