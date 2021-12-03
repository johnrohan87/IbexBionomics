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

const S17PlantGrowth = () => {
  
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
          
           
          
          
            <ContentArea  minWidth="80vw" minHeight="100vh" >
              <div className="shadow">
                <div>
                  <Fade bottom >
                    <p>
                      <b>Plant Growth Promoting Rhizobacteria (PGPR) And the Creation of Suppressive Soils</b>
                    </p>
                    <p>
                      Suppressive soils are those in which pathogens do not find ideal conditions to establish themselves or to persist.
                      If a pathogen does establish itself in these soils, its attacks will not provoke any notable damage or disease, due to interruption of quorum sensing.
                      The main biotic characteristic of natural or induced suppressive soils is the presence of a high rate of actinomycetes, an elevated metabolic potential, and a co-metabolism of the living agents necessary for the high productivity of crop soils.
                      Suppressive soils contain microorganisms (fungi, Bacillus, Pseudomonas, Streptomyces and yeast) which produce protective elements against fungosis, bacteriosis, viroses, and plague insects.
                    </p>
                  </Fade>
                </div>
              </div>
            </ContentArea>

        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S17PlantGrowth;
