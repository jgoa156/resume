import { useTranslation } from "react-i18next";

import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  SectionWrapper,
  Card,

  Or,
  QR,

  Link
} from "./styles";

export default function ContactMe() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "contact" });

  // Links
  const links = [
    { icon: "fas fa-envelope", href: "mailto:jgoa156@gmail.com", content: "jgoa156@gmail.com" },
    { icon: "fab fa-whatsapp", href: "https://wa.me/5592984656666", content: "+55 92 98465-6666" },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/jgoa156", content: "jgoa156" }
  ];

  if (!ready) return null;
  return (
    <SectionWrapper id="contact-me">
      <div>
        <FadeIn style={{ width: "100%" }}>
          <Card>
            <Title>{t("title")}</Title>
            <QR src={`${process.env.img}/components/ContactMe/qr.png`}></QR>

            <Or><span>{t("or")}</span></Or>

            <div>
              {links.map((link, index) => {
                return (
                  <Link key={index}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={link.href}>
                      <div>
                        <i className={link.icon} />
                        <span>{link.content}</span>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </Card>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}