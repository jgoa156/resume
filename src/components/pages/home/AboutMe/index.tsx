import { useTranslation, Trans } from "react-i18next";

import SectionWrapper from "components/shared/SectionWrapper";
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  InfoWrapper,
  TextWrapper,
  Subtitle,
  Text,
  Cards,
  NumberCard,

  ItemWrapper,
  Item,
  ItemTitle
} from "./styles";

export default function AboutMe() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "about" });

  function calculateAge(day) {
    let date = new Date(Date.now() - day);
    return Math.abs(date.getUTCFullYear() - 1970);
  }
  const workExp = calculateAge(new Date(2018, 6, 1));

  // Locales
  const generalInfoNsObject = Array.from(t("general.content", { returnObjects: true })) as any[];
  const personalityInfoNsObject = Array.from(t("personality.content", { returnObjects: true })) as any[];
  const certificatesNsObject = Array.from(t("education.certificates", { returnObjects: true })) as any[];

  if (!ready) return null;
  return (
    <SectionWrapper id="about-me">
      <div>
        <FadeIn>
          <Title>{t("title")}</Title>
        </FadeIn>

        <InfoWrapper>
          <TextWrapper left={true}>
            <FadeIn>
              <Subtitle>{t("general.title")}</Subtitle>

              {generalInfoNsObject.map((info, index) =>
                <Text key={index}>{info}</Text>
              )}
            </FadeIn>
          </TextWrapper>

          <Cards right={true}>
            <FadeIn>
              <NumberCard>
                <h2>8</h2>
                <p>{t("cards.academic")}</p>
              </NumberCard>

              <NumberCard>
                <h2>{workExp}+</h2>
                <p>{t("cards.professional")}</p>
              </NumberCard>
            </FadeIn>
          </Cards>
        </InfoWrapper>

        <InfoWrapper>
          <TextWrapper left={true}>
            <FadeIn>
              <Subtitle>{t("personality.title")}</Subtitle>

              {personalityInfoNsObject.map((info, index) =>
                info.links
                  ? <Text key={index}>
                    <Trans
                      t={t}
                      defaults={info.content}
                      components={
                        Array.from(info.links?.map((link, index) =>
                          <a key={index} target="_blank" rel="noreferrer" href={link} />))
                      } />
                  </Text>
                  : <Text key={index}>{info.content}</Text>
              )}
            </FadeIn>
          </TextWrapper>

          <TextWrapper>
            <FadeIn>
              <Subtitle>{t("education.title")}</Subtitle>

              <ItemWrapper>
                {certificatesNsObject.map((certificate, index) => {
                  return (
                    <Item key={index}>
                      <ItemTitle>
                        <img src={certificate.icon} style={certificate.iconProps} />

                        <div className={"textWrapper"}>
                          <h5>{certificate.name}</h5>

                          <p>{certificate.institution} <span>{certificate.type} | {certificate.start} - {certificate.end}</span></p>
                        </div>
                      </ItemTitle>
                    </Item>
                  );
                })}
              </ItemWrapper>
            </FadeIn>
          </TextWrapper>
        </InfoWrapper>
      </div>
    </SectionWrapper>
  );
}