// Shared
import Title from "components/shared/Title";
import { ListWrapper } from "components/shared/Experience/styles";
import Experience, { IExperience } from "components/shared/Experience";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Education({ t }: IDefaultComponentProps) {
  const contentNsObject: IExperience[] = Array.from(t("about.education.certificates", { returnObjects: true }));

  return (
    <ListWrapper>
      <Title alignLeft={true}>{t("about.education.title")}</Title>

      <ul>
        {contentNsObject?.map((experience, index) => <li key={index}><Experience {...experience} /></li>)}
      </ul>
    </ListWrapper>
  )
}