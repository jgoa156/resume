// Shared
import Title from "components/shared/Title";

// Custom
import { ContactWrapper, QRWrapper } from "./components";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Contact({ t }: IDefaultComponentProps) {
  type IContentNsObject = { icon: string, text: string };
  const contentNsObject: IContentNsObject[] = Array.from(t("contact.content", { returnObjects: true }));

  return (
    <ContactWrapper>
      <Title alignLeft={true}>{t("contact.title")}</Title>

      <QRWrapper>
        <div>
          {contentNsObject.map((content: IContentNsObject, index: number) => (
            <p key={index}><i className={content?.icon} />{content?.text}</p>
          ))}
        </div>
        <img src={`${process.env.img}/cv_qr.png`} alt="QR Code" />
      </QRWrapper>
    </ContactWrapper >
  )
}