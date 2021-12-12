import React from 'react';
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

//import IBEXLogo from '../../../../common/assets/image/interior/IbexImages/IbexBionomicsLogo.png'
//import S14SubtifolText from '../../../../common/assets/image/interior/IbexImages/S14/S14SubtifolText.png'
import leafbg from '../../../../common/assets/image/interior/IbexImages/S2/LeafBG.jpg'
import hpAquaculture from '../../../../common/assets/image/interior/IbexImages/HomePage/HPAquaculture.jpg'
import hpHydrocarbon from '../../../../common/assets/image/interior/IbexImages/HomePage/HPHydrocarbon.jpg'
import MicroorganismsBG from '../../../../common/assets/image/interior/IbexImages/S3/S3MicroorganismsBG.jpg'
import Agriculture_Catalogue from '../../../../common/assets/PDFs/Agriculture_Catalogue_ENG.pdf'
import Aquaculture_Catalog from '../../../../common/assets/PDFs/Aquaculture_Catalog.pdf'
import Hydrocarbon_Catalog from '../../../../common/assets/PDFs/Hydrocarbon_Catalog.pdf'
import Waste_Waters_Catalogue from '../../../../common/assets/PDFs/Waste_Waters_Catalogue.pdf'

const Catalog = () => {
 
  return(
    <div> 
      <BannerWrapper>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${leafbg})`} >
                <p className="centerXandY whiteText">
              <a className="whiteText" href={Agriculture_Catalogue} download>
                  <b>
                  Agriculture
                  </b>
              </a>
                </p>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${hpAquaculture})`}>
                <p className="centerXandY whiteText">
              <a className="whiteText" href={Aquaculture_Catalog} download>
                  <b>
                  Aquaculture
                  </b>
              </a>
                </p>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${hpHydrocarbon})`}>
                <p className="centerXandY whiteText">
              <a className="whiteText" href={Hydrocarbon_Catalog} download>
                  <b>
                  Environmental Remediation
                  <br/>
                  Hydrocarbons
                  </b>
              </a>
                </p>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${MicroorganismsBG})`}>
                <p className="centerXandY whiteText">
              <a className="whiteText" href={Waste_Waters_Catalogue} download>
                  <b>
                  Environmental Remediation
                  <br/>
                  Waste Waters
                  </b>
              </a>
                </p>
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default Catalog;
