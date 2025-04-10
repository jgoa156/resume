// Shared
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";

// Custom
import {
  ContactMeWrapper,
  Card,

  Or,
  QR,

  Link
} from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";
import { ILink } from "components/shared/Links";

export default function ContactMe({ t }: IDefaultComponentProps) {
  // Social media links
  const socialMediaLinks: ILink[] = Array.from(t("contact.content", { returnObjects: true }));

  return (
    <ContactMeWrapper id="contact-me">
      <div>
        <FadeIn style={{ width: "100%" }}>
          <Card>
            <Title>{t("contact.title")}</Title>
            <QR src={`${process.env.img}/components/ContactMe/qr.png`}></QR>

            <Or><span>{t("contact.or")}</span></Or>

            <div>
              {socialMediaLinks.map((link, index) => {
                return (link.href) && (
                  <Link key={index}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={link.href}>
                      <div>
                        <i className={link.icon} />
                        <span>{link.text}</span>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </Card>
        </FadeIn>
      </div>
    </ContactMeWrapper>
  );
}