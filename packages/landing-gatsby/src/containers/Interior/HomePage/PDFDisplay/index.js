//import React, { useState, useEffect } from 'react';
//import { Document, Page } from 'pdfjs-dist';
//import { Document, Page } from 'pdfjs-dist/webpack';
//import pdfjsLib from "pdfjs-dist/build/pdf";
//import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
//import { Document, Page } from 'react-pdf';

//import nu3zer from 'common/assets/PDFs/Nu3zer_Catalog.pdf'
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

function PDFDisplay(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [curWinInnerWidth, setCurWinInnerWidth] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log("on document load success");
    console.log(numPages);
    setNumPages(numPages);
    setPageNumber(1);
  };

  useEffect(() => {
    setCurWinInnerWidth(window.innerWidth)
  }, [curWinInnerWidth])


  const clicked = ({ pageNumber }) => {
    console.log(pageNumber);
  };

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="pdf-container">
        <ResetCSS />
        <GlobalStyle />
      <Document
        file={props.pdf}
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
            <br />
            {/** <p className="pagenum" key={`pagenum+${index + 1}`}>
              Page {index + 1} of {numPages}
       </p> **/}
          </div>
        ))}
      </Document>
        {
        /**
         * Page on click style
         <Document
        file={nu3zer}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={curWinInnerWidth} />
      </Document>
      <div>
            <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            >
            Previous
            </button>
            <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            >
            Next
            </button>
        </div>
         */
         }
      {/**
       onItemClick={clicked}
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
       */}
    </div>
  );
}

export default PDFDisplay;