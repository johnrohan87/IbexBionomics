import React, { useState } from 'react';
//import * as pdfjs from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
//, { Fragment, useState, useEffect }
//import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
//import { Icon } from 'react-icons-kit';
//import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
//import Heading from 'common/components/Heading';
//import Text from 'common/components/Text';
//import Button from 'common/components/Button';
//import Input from 'common/components/Input';
//import GlideCarousel from 'common/components/GlideCarousel';
//import GatsbyImage from 'common/components/GatsbyImage';
//import GlideSlide from 'common/components/GlideCarousel/glideSlide';
//import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  Container,
  ContentArea,
  //HighlightedText,
  //FormWrapper,
  //ButtonGroup,
  //CarouselArea,
} from './banner.style';

import Agriculture_Catalogue from '../../../../common/assets/PDFs/Agriculture_Catalogue_ENG.pdf';
import Aquaculture_Catalog from '../../../../common/assets/PDFs/Aquaculture_Catalog.pdf'
import Hydrocarbon_Catalog from '../../../../common/assets/PDFs/Hydrocarbon_Catalog.pdf'
import Waste_Waters_Catalogue from '../../../../common/assets/PDFs/Waste_Waters_Catalogue.pdf'

const PDFDisplay = () => {
  //pdfjs.GlobalWorkerOptions.workerSrc = require(`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`);
  //pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  //pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.min.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
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

  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  return(
    <div> 
      <BannerWrapper>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="100vw" minHeight="80vh" >
                <div>
                  <Document
                    file={Agriculture_Catalogue} //"somefile.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    onItemClick={onItemClick}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                  
                </div>
                <div className="zindexTop">
                    <p>
                      Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </p>
                    <button
                      type="button"
                      disabled={pageNumber <= 1}
                      onClick={previousPage}
                      className="zindexTop"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      disabled={pageNumber >= numPages}
                      onClick={nextPage}
                      className="zindexTop"
                    >
                      Next
                    </button>
                  </div>
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default PDFDisplay;
