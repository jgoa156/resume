import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PDFContent from './PDFContent';

const GeneratePDF = () => {
  const pageRef = useRef();

  return (
    <div>
      <PDFContent pageRef={pageRef} />
    </div>
  );
};

export default GeneratePDF;
