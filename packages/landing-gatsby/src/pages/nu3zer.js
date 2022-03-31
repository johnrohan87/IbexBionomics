import React, { useState, useEffect } from 'react';
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Document, Page } from 'react-pdf';
import nu3zer from 'common/assets/PDFs/Nu3zer_Catalog.pdf'
import { ResetCSS } from 'common/assets/css/style';
import {
    GlobalStyle,
    InteriorWrapper,
    ContentWrapper,
  } from 'containers/Interior/interior.style';
import { width } from 'styled-system';

const Nu3zer = (props) =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [curWidth,setWidth] = useState(null)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
      console.log(props)
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <div >
            <ResetCSS />
            <GlobalStyle />
            <Document file={nu3zer} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} width={curWidth} />
            </Document>
            <div >
                <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>
                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
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
        </div>
    );
  

  
}
export default Nu3zer;