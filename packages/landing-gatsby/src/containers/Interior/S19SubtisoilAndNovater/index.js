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

//import IBEXLogo from '../../../common/assets/image/interior/IbexImages/IbexBionomicsLogo.png'
import SubTiSoil from '../../../common/assets/image/interior/IbexImages/S19/S19SubtisoilText.png'
import Novater from '../../../common/assets/image/interior/IbexImages/S19/S19NovaterText.png'

const S19SubtisoilAndNovater = () => {
  
  {/**
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
 */}
 
  return(
    <div> 
      <BannerWrapper>
        <Container>
          
            <ContentArea minWidth="50vw" minHeight="50vh">
            <Fade bottom >
              <p className="shadowDark medPadding">
                <img src={SubTiSoil}/>
                <img src={Novater}/>
              </p>
              </Fade >
            </ContentArea>
          
          
            <ContentArea minWidth="50vw" minHeight="75vh" >
              <div >
                <Fade bottom >
                <div className="shadow">
                  <p>
                    <i>
                      These two products work together in the creation of suppressive soils through the degradation of toxic compounds and organic material, and the inoculation and nutrition of beneficial microorganisms in the soil.
                      <br/><br/>
                      The products are specifically formulated to break down and degrade the short and long molecular chains of fats and oils in the soil, whether vegetable, animal, or mineral.
                    </i>
                  </p>
                </div>
                </Fade>
              </div>
            </ContentArea>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S19SubtisoilAndNovater;
