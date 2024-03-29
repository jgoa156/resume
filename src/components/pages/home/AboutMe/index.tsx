import React, { useState, useEffect } from "react";

import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  SectionWrapper,
  InfoWrapper,
  TextWrapper,
  Subtitle,
  Text,
  Cards,
  NumberCard,

  ItemWrapper,
  Item,
  ItemTitle
} from "./components";

export default function AboutMe() {
  function calculateAge(day) {
    let date = new Date(Date.now() - day);
    return Math.abs(date.getUTCFullYear() - 1970);
  }
  function calculateSemester() {
    let years = calculateAge(new Date(2019, 0, 1));
    let now = new Date();
    let semester = Math.floor(now.getMonth() / 6) + 1;

    return (years * 2) + semester;
  }

  const age = calculateAge(new Date(2000, 8, 16));
  const academicExp = calculateAge(new Date(2016, 1, 1));
  const workExp = calculateAge(new Date(2018, 6, 1));
  const semester = calculateSemester();

  // Education
  const graduations = [
    {
      name: "Software Engineering",
      type: "Bachelor's Degree",
      institution: "Federal University of Amazonas",
      start: "2019",
      end: "2022 (Estimated)",
      icon: "img/components/Education/ufam.png"
    },
    {
      name: "Embedded Android Development",
      type: "Certificate Course",
      institution: "State University of Amazonas",
      start: "2021",
      end: "2021",
      icon: "img/components/Education/uea.png"
    },
    {
      name: "Informatics",
      type: "Technical Degree",
      institution: "Federal Institute of Amazonas",
      start: "2016",
      end: "2018",
      icon: "img/components/Education/if.png",
      iconProps: {
        width: "25px",
        margin: "7.5px"
      }
    },
    {
      name: "Graphic Design",
      type: "Certificate Course",
      institution: "GRACOM",
      start: "2016",
      end: "2017",
      icon: "img/components/Education/gracom.png"
    },
    {
      name: "Mechatronics",
      type: "Technical Degree",
      institution: "Matias Machline Foundation",
      start: "2015",
      end: "2015 (Incomplete)",
      icon: "img/components/Education/fmm.png",
      iconProps: {
        width: "25px",
        margin: "7.5px"
      }
    }
  ];

  // Konami code
  const [konami, setKonami] = useState<boolean>(false);
  let key = 0;
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66];

  function handleKonami(e) {
    if (e.keyCode == code[key]) {
      key++;

      if (key == code.length) {
        setKonami(true);
        document.removeEventListener("keydown", handleKonami);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKonami);
  }, []);

  return (
    <SectionWrapper id="about-me">
      <div>
        <FadeIn>
          <Title>About Me</Title>
        </FadeIn>

        <InfoWrapper>
          <TextWrapper left={true}>
            <FadeIn>
              <Subtitle>
                Who am I?
              </Subtitle>

              <Text>
                I&apos;m a {age}-year-old Full-stack web and mobile developer based in Manaus, Brazil, and currently focused in Front-end development in general.
                Currently working with React + Next and Node + Express, but with knowledge in several other technologies as well.
              </Text>
              <Text>
                I have a Technical Degree in Informatics with emphasis on Software Engineering and am currently at my {semester}th semester of my Software Engineering Bachelor&apos;s Degree course, which I should be finishing by Q2 2023.
              </Text>
            </FadeIn>
          </TextWrapper>

          <Cards right={true}>
            <FadeIn>
              <NumberCard>
                <h2>{academicExp}+</h2>
                <p>Years of academic experience</p>
              </NumberCard>

              <NumberCard>
                <h2>{workExp}+</h2>
                <p>Years of working experience</p>
              </NumberCard>
            </FadeIn>
          </Cards>
        </InfoWrapper>

        <InfoWrapper>
          <TextWrapper left={true}>
            <FadeIn>
              <Subtitle>
                What do I like?
              </Subtitle>

              <Text>
                Currently my main interests towards the software industry are front-end web and mobile development, UI/UX design and API development.
                I also recently got into machine learning and data mining, but I do take interest in other fields of technology such as drones and anything involving mechatronics.
              </Text>
              <Text>
                While you are here, you should know I&apos;m also a nerd, goth, rpg and cyberpunk literature aficionado, not to mention I take a lot of interest
                in experimental art in general, which covers ground ranging from psychedelic cinema to noise music.<br />
                Oh and you should seriously check out bands like <a target="_blank" rel="noreferrer" href="https://youtube.com/watch?v=3NZGbD236fw">Lightning Bolt</a>, <a target="_blank" rel="noreferrer" href="https://youtube.com/watch?v=odKf7_sA5HQ">Einsturzende Neubauten</a> and <a target="_blank" rel="noreferrer" href="https://youtube.com/watch?v=vEd8GJcLmnE">Rolo Tomassi</a>.
                Here&apos;s my <a target="_blank" rel="noreferrer" href="https://last.fm/user/jgoa156">last.fm</a> by the way.
              </Text>
            </FadeIn>
          </TextWrapper>

          <TextWrapper>
            <FadeIn>
              <Subtitle>
                Education
              </Subtitle>

              <ItemWrapper>
                {graduations.map((graduation, index) => {
                  return (
                    <Item key={index}>
                      <ItemTitle>
                        <img src={graduation.icon} style={graduation.iconProps} />

                        <div className={"textWrapper"}>
                          <h5>{graduation.name}</h5>

                          <p>{graduation.institution} <span>{graduation.type} | {graduation.start} - {graduation.end}</span></p>
                        </div>
                      </ItemTitle>
                    </Item>
                  );
                })}
              </ItemWrapper>
            </FadeIn>
          </TextWrapper>
        </InfoWrapper>

        {konami &&
          <InfoWrapper>
            <TextWrapper left={true}>
              <FadeIn>
                <Subtitle>
                  BEWARE
                </Subtitle>

                <Text>
                  I&apos;m a certified member of the Bahia chapter of DEDSEC.
                </Text>
              </FadeIn>
            </TextWrapper>

            <TextWrapper>
              <FadeIn>
                <Subtitle>
                  BEWARE
                </Subtitle>

                <img src={`${process.env.img}/components/About/ch.png`} />
              </FadeIn>
            </TextWrapper>
          </InfoWrapper>
        }
      </div>
    </SectionWrapper>
  );
}