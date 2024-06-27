import { useTranslation } from "react-i18next";

import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  SectionWrapper,
  ItemWrapper,
  Link,
  Item,
  TagWrapper,
  Tag,
  DisclaimerWrapper,
  Disclaimer
} from "./components";

export default function Projects() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "projects" });

  const imgBaseUrl = `${process.env.img}/components/Projects/`;
  const projectsNsObject = Array.from(t("projects", { returnObjects: true })) as any[];

  function ProjectItem({ project }) {
    return (
      <FadeIn>
        <Link href={project.url} target="_blank" rel="noreferrer">
          <Item>
            <img src={`${imgBaseUrl}${project.image}`} />

            <div>
              <div>
                <h4><span>{project.year}</span> {project.name}</h4>

                <p>{project.description}</p>
              </div>

              <TagWrapper>
                {project.tags?.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>
                })}
              </TagWrapper>
            </div>
          </Item>
        </Link>
      </FadeIn>
    );
  }

  if (!ready) return null;
  return (
    <SectionWrapper id="projects">
      <div>
        <FadeIn>
          <Title>{t("title")}</Title>
        </FadeIn>

        <ItemWrapper>
          {projectsNsObject.map((project, index) => {
            return (
              <ProjectItem key={index} project={project} />
            )
          })}
        </ItemWrapper>

        <DisclaimerWrapper>
          <FadeIn>
            <Disclaimer><span>{t("disclaimer.title")}</span>{t("disclaimer.content")}</Disclaimer>
          </FadeIn>
        </DisclaimerWrapper>
      </div>
    </SectionWrapper>
  );
}