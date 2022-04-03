//import React, { useState, useEffect } from 'react';
//import { Document, Page } from 'pdfjs-dist';
//import { Document, Page } from 'pdfjs-dist/webpack';
//import pdfjsLib from "pdfjs-dist/build/pdf";
//import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
//import { Document, Page } from 'react-pdf';

import nu3zer from 'common/assets/PDFs/Nu3zer_Catalog.pdf'
import { ResetCSS } from 'common/assets/css/style';
import {
    GlobalStyle,
    InteriorWrapper,
    ContentWrapper,
  } from 'containers/Interior/interior.style';
import { width } from 'styled-system';

import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// import "react-pdf/dist/Page/AnnotationLayer.css";
//import SamplePDF from "./sample.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

function PDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [curWinInnerWidth, setCurWinInnerWidth] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log("on document load success");
    setNumPages(numPages);
    setPageNumber(1);
  };

  useEffect(() => {
    setCurWinInnerWidth(window.innerWidth)
  }, [])


  const clicked = ({ pageNumber }) => {
    console.log(pageNumber);
  };

  return (
    <div className="pdf-container">
        <ResetCSS />
        <GlobalStyle />
      <Document
        file={nu3zer}
        onLoadSuccess={onDocumentLoadSuccess}
        onItemClick={clicked}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div className="pdf-page-container" key={`pdfpage${index + 1}`} >
            <Page
              className="pdf-page"
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={curWinInnerWidth}
            />
            <p className="pagenum" key={`pagenum+${index + 1}`}>
              Page {index + 1} of {numPages}
            </p>
          </div>
        ))}
      </Document>
    </div>
  );
}

export default PDF;