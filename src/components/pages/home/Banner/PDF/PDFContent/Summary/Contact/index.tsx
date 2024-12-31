// Custom
import { ContactWrapper } from "./components";

// Interfaces
import { ITranslatedCVComponent } from "../../interfaces";
import Title from "components/shared/Title";

export default function Contact({ t }: ITranslatedCVComponent) {
  type IContentNsObject = { icon: string, text: string };
  const contentNsObject: IContentNsObject[] = Array.from(t("contact.content", { returnObjects: true }));

  return (
    <ContactWrapper>
      <Title alignLeft={true}>{t("contact.title")}</Title>
      {
        contentNsObject.map((content: IContentNsObject, index: number) => (
          <p key={index}><i className={content?.icon} />{content?.text}</p>
        ))
      }
    </ContactWrapper >
  )
}