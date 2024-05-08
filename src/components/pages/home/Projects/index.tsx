import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)"
  });

  const imgBaseUrl = `${process.env.img}/components/Projects/`;
  const projects = [
    {
      name: "MCA International",
      image: "mca.jpg",
      description: "MCA International's main institutional page, containing informations regarding the company and their main services.",
      url: "https://mcaig.com",
      tags: [
        "React", "Next", "HTML", "CSS", "JS", "Styled Components"
      ],
      year: 2022
    },
    {
      name: "BB - Investimentos",
      image: "bb-investimentos.jpg",
      description: "Banco do Brasil's landing page for their Investments app which contains all information regarding their platform and their stocks. Developed in 2021.",
      url: "https://www.bb.com.br/uci/investimentos.html",
      tags: [
        "React", "Next", "HTML", "CSS", "JS", "Jest", "Jenkins", "Argo CD"
      ],
      year: 2022
    },
    {
      name: "CREA-AM - Banco de Oportunidades",
      image: "crea-oportunidades.jpg",
      description: "CREA-AM's talent pool application designed with the goal to connect engineers to contractors and to publish engineering related jobs. Developed in 2020.",
      url: "https://oportunidades.crea-am.org.br",
      tags: [
        "React", "Next", "PHP", "Node", "Socket.io", "HTML", "CSS", "JS", "Scrapy", "Python"
      ],
      year: 2021
    },
    {
      name: "CREA-AM - Main page",
      image: "crea-site.jpg",
      description: "CREA-AM's main institutional landing page which contains all information regarding the council's activities, documents and other platforms. Developed in 2020.",
      url: "https://crea-am.org.br",
      tags: [
        "Wordpress", "PHP", "HTML", "CSS", "JS", "jQuery"
      ],
      year: 2020
    }
  ];

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
                {project.tags.map((tag, index) => {
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
    <SectionWrapper id="projects">
      <div>
        <FadeIn>
          <Title>Projects</Title>
        </FadeIn>

        <ItemWrapper>
          {projects.map((project, index) => {
            return (
              <ProjectItem key={index} project={project} />
            )
          })}
        </ItemWrapper>

        <DisclaimerWrapper>
          <FadeIn>
            <Disclaimer>
              <span>*Disclaimer: </span> I <b>do not</b> maintain some of the projects mentioned above,
              therefore some of those projects may be impacted by posterior work done by people
              who are still involved with them.
            </Disclaimer>
          </FadeIn>
        </DisclaimerWrapper>
      </div>
    </SectionWrapper>
  );
}