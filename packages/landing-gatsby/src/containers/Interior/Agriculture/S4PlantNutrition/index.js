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

import IBEXLogo from '../../../../common/assets/image/interior/IbexImages/IbexBionomicsLogo.png'
import S4PlantNutritionWheat from '../../../../common/assets/image/interior/IbexImages/S4/S4PlantNutritionWheat.jpg'

const S4PlantNutrition = () => {
  
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        S4PlantNutritionData {
          title
        }
      }
    }
  `);

  const { title } =
  data.interiorJson.S4PlantNutritionData;

  return(
    <div> 
      <BannerWrapper>
        <Container>
         
           {/**
          <ContentArea>
            <Fade bottom >
              <img src={S4PlantNutritionWheat} style={{height:"100%",width:"100%"}}/>
            </Fade>
          </ContentArea> */}
         
          
          <ContentArea className="flex alignCenter" >
            <Fade bottom >

              <div className="shadow">
                <div>
                <img src={S4PlantNutritionWheat} style={{height:"100%",width:"100%"}}/>
                </div>
                {/**<div className="shadowDark">  
                  <img src={IBEXLogo}/>
                </div> */}
                <div className="shadowDark">  
                  <Heading as="h1" textAlign="center" content={title} />
                </div>
              </div>
            </Fade>
          </ContentArea>

        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S4PlantNutrition;
