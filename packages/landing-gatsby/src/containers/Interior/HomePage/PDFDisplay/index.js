import React, { useState } from 'react';
import Pdf from '@mikecousins/react-pdf';
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

  const [page, setPage] = useState(1);

  return(
    <div> 
      <BannerWrapper>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="100vw" minHeight="80vh" >
              <Pdf file={Agriculture_Catalogue} page={page} />
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default PDFDisplay;
