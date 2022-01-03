import React, { useState, useRef, useEffect } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
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

//import Agriculture_Catalogue from '../../../../common/assets/PDFs/Agriculture_Catalogue_ENG.pdf';
//import Aquaculture_Catalog from '../../../../common/assets/PDFs/Aquaculture_Catalog.pdf'
//import Hydrocarbon_Catalog from '../../../../common/assets/PDFs/Hydrocarbon_Catalog.pdf'
//import Waste_Waters_Catalogue from '../../../../common/assets/PDFs/Waste_Waters_Catalogue.pdf'

const PDFDisplay = ({ pdf }) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: `${pdf}`,
    page,
    canvasRef,
  });
  useEffect(()=> {
    setPage(1);
  },[pdfDocument,pdf])

  return(
    <div> 
      <BannerWrapper>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="100vw" minHeight="80vh" >
              <div>
                {!pdfDocument && <span>Loading...</span>}
                {Boolean(pdfDocument && pdfDocument.numPages) && (
                  <div>
                    <ul className="pager flex centerXandY row">
                      <li className="previous">
                        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                          Previous
                        </button>
                      </li>
                      <li className="download">
                        <a href={pdf} download>
                        <button
                          to={pdf}
                        >
                          Download PDF
                        </button>
                        </a>
                      </li>
                      <li className="next">
                        <button
                          disabled={page === pdfDocument.numPages}
                          onClick={() => setPage(page + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                <canvas ref={canvasRef} />
                {Boolean(pdfDocument && pdfDocument.numPages) && (
                  <div>
                    <ul className="pager flex centerXandY row">
                      <li className="previous">
                        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                          Previous
                        </button>
                      </li>
                      <li className="download">
                        <a href={pdf} download>
                        <button
                          to={pdf}
                        >
                          Download PDF
                        </button>
                        </a>
                      </li>
                      <li className="next">
                        <button
                          disabled={page === pdfDocument.numPages}
                          onClick={() => setPage(page + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default PDFDisplay;
