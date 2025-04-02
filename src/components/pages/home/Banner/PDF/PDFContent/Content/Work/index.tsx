// Shared
import Title from "components/shared/Title";
import { ListWrapper } from "components/shared/Experience/styles";
import Experience, { IExperience } from "components/shared/Experience";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Work({ t }: IDefaultComponentProps) {
  const contentNsObject = Array.from(t("work.jobs", { returnObjects: true })) as IExperience[];

  return (
    <ListWrapper>
      <Title alignLeft={true}>{t("work.title")}</Title>

      <ul>
        {contentNsObject?.map((experience, index) => <li key={index}><Experience {...experience} /></li>)}
      </ul>
    </ListWrapper>
  )
}