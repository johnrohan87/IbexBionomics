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

//import bgimages from '../../../../common/assets/image/interior/IbexImages/S1/IbexBannerImages.png'

const S16Banner = () => {
  {/**
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        bannerData {
          discount
          discountLabel
          title
          text
          carousel {
            id
            title
            thumb_url {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            link
          }
        }
      }
    }
  `);

  const { discount, discountLabel, title, text, carousel } =
  data.interiorJson.bannerData;
 */}

  return(
    <div> 
      <BannerWrapper>
        <Container>
          <Fade bottom >
            <div className="shadow">
              <h1 className="shadowDark">
                <b>
                Creation of Suppressive Soils
                </b>
              </h1>
            </div>
          </Fade>
        <ContentArea>
          
        {/**  <Heading as="h1" content="AGRICULTURE CATALOG" />
        <Text content={text} />*/}
        </ContentArea>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S16Banner;
