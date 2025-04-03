import { useTranslation } from 'next-i18next';

// Custom
import Summary from './Summary';
import Content from './Content';
import { PDFContentWrapper } from './components';

// Interfaces
interface IPDFContent {
  pageRef: any
}

export default function PDFContent({ pageRef }: IPDFContent) {
  const { t, ready } = useTranslation(["main"]);

  return (
    <PDFContentWrapper ref={pageRef} id="pdf-content">
      <Summary t={t} />
      <Content t={t} />
    </PDFContentWrapper>
  );
}
