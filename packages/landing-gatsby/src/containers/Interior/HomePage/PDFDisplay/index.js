import React, { useState, useEffect, useRef, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ResetCSS } from "common/assets/css/style";
import {
  GlobalStyle,
} from "containers/Interior/interior.style";
import { ContentArea } from "../Catalog/banner.style";

pdfjs.GlobalWorkerOptions.workerSrc = `/PDF.JS.2.12.313.pdf.worker.min.js`;

function PDFDisplay({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);

  const cachedBlobRef = useRef({}); // persist blob cache

  // Resize listener (stable width)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(document.documentElement.clientWidth || window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cache PDF blob and set object URL
  useEffect(() => {
    if (!pdf) return;

    const fetchAndCachePDF = async () => {
      if (cachedBlobRef.current[pdf]) {
        setPdfBlobUrl(cachedBlobRef.current[pdf]);
      } else {
        try {
          const response = await fetch(pdf);
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          cachedBlobRef.current[pdf] = objectUrl;
          setPdfBlobUrl(objectUrl);
        } catch (error) {
          if (error?.name === "AbortError") return;
          console.error("Error fetching PDF:", error);
        }
      }
    };

    fetchAndCachePDF();

    // Clean up old blob URLs to avoid memory leaks
    return () => {
      if (pdfBlobUrl && pdfBlobUrl.startsWith("blob:")) {
        URL.revokeObjectURL(pdfBlobUrl);
      }
    };
  }, [pdf]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onLoadError = (error) => {
    if (error?.name === "AbortError") return;
    console.error("PDF load error:", error);
  };

  // Avoid rendering Document until blob is ready
  if (!pdfBlobUrl) return null;

  return (
    <ContentArea>
      <div className="pdf-container" style={{ width: "100%" }}>
        <ResetCSS />
        <GlobalStyle />
        <Document
          file={pdfBlobUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onLoadError}
          loading={<p>Loading PDF…</p>}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div
              className="pdf-page-container"
              key={`pdfpage_${index + 1}`}
              style={{ width: windowWidth }}
            >
              <Page
                pageNumber={index + 1}
                width={windowWidth}
                scale={1}
              />
              <br />
            </div>
          ))}
        </Document>
      </div>
    </ContentArea>
  );
}

export default PDFDisplay;