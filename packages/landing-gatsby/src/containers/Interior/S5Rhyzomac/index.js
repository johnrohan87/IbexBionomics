import React from 'react';
//, { Fragment, useState, useEffect }
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
//import { Icon } from 'react-icons-kit';
//import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from 'common/components/Heading';
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

//import IBEXLogo from '../../../common/assets/image/interior/IbexImages/IbexBionomicsLogo.png'
import S5RhyzomacText from '../../../common/assets/image/interior/IbexImages/S5/S5RhyzomacText.png'

const S5Rhyzomac = () => {
  
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        S5RhyzomacData {
          title
        }
      }
    }
  `);

  const { title } =
  data.interiorJson.S5RhyzomacData;

  return(
    <div> 
      <BannerWrapper>
        <Container>
          <Fade bottom >
            <ContentArea minWidth="25vw">
            <p className="shadowDark" padding="20px">
            A highly effective biological fertilizer. Due to its sporulated form, it immediately adopts the characteristics of the native colonies of beneficial microorganisms, promoting their growth and reproduction.
            </p>
            </ContentArea>
          </Fade>
          <Fade bottom >
            <ContentArea className="shadow" minWidth="75vw" >
              <span className="flex-row">
                <span>
                  <img src={S5RhyzomacText}/>
                  <p><b>BIOLOGICAL NUTRITIONAL REGULATOR</b></p>
                  <p>A concentrated and stable liquid fertilizer composed of highly resistant spores of Azotobacter and other rhizospheric microorganisms that fix atmospheric nitrogen and solubilizes phosphorus and potassium present in the soil.</p>
                </span>
              </span>
            </ContentArea>
          </Fade>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S5Rhyzomac;
