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

const Catalog = () => {
 
  return(
    <div> 
      <BannerWrapper>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="25vw" minHeight="50vh" backgroundImage={`url(${leafbg})`} >
              <p>
                <b>
                Agriculture
                </b>
              </p>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="50vh" >
              <p>
                <b>
                Aquaculture
                </b>
              </p>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="50vh" >
              <p>
                <b>
                Environmental Remediation
                </b>
              </p>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="50vh" >
              <p>
                <b>
                Environmental Remediation
                </b>
              </p>
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default Catalog;
