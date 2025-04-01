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

  return (
    <PDFContentWrapper ref={pageRef} id="pdf-content">
      <Summary />
      <Content />
    </PDFContentWrapper>
  );
}
