import React, { useRef } from 'react';
import PDFContent from './PDFContent';
import ReactPDF, { Page } from '@react-pdf/renderer';

const GeneratePDF = () => {
  const pageRef = useRef();

  function generate() {
    ReactPDF.renderToStream(<PDFContent pageRef={pageRef} />);
  }

  return (
    <div>
      <Page size="A4">
        <PDFContent pageRef={pageRef} />
      </Page>
    </div>
  );
};

export default GeneratePDF;
