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
import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

export default function PdfViewer({url}){
    if (url === null){
        url = nu3zer;
    }
  const canvasRef = useRef();
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const [pdfRef, setPdfRef] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = useCallback((pageNum, pdf=pdfRef) => {
    pdf && pdf.getPage(pageNum).then(function(page) {
      const viewport = page.getViewport({scale: 1.5});
      const canvas = canvasRef.current;
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      };
      page.render(renderContext);
    });   
  }, [pdfRef]);

  useEffect(() => {
    renderPage(currentPage, pdfRef);
  }, [pdfRef, currentPage, renderPage]);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(loadedPdf => {
      setPdfRef(loadedPdf);
    }, function (reason) {
      console.error(reason);
    });
  }, [url]);

  const nextPage = () => pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return <canvas ref={canvasRef}></canvas>;
}