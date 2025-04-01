// Shared
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  ProjectsWrapper,
  ItemWrapper,
  Link,
  Item,
  TagWrapper,
  Tag,
  DisclaimerWrapper,
  Disclaimer
} from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Projects({ t }: IDefaultComponentProps) {
  const imgBaseUrl = `${process.env.img}/components/Projects/`;
  const projectsNsObject = Array.from(t("projects.projects", { returnObjects: true }) as any[]);

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

  return (
    <ProjectsWrapper id="projects">
      <div>
        <FadeIn>
          <Title>{t("projects.title")}</Title>
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
            <Disclaimer><span>{t("projects.disclaimer.title")}</span>{t("projects.disclaimer.content")}</Disclaimer>
          </FadeIn>
        </DisclaimerWrapper>
      </div>
    </ProjectsWrapper>
  );
}