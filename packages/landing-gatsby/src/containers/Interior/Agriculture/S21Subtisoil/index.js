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
import SubTiSoil from '../../../../common/assets/image/interior/IbexImages/S19/S19SubtisoilText.png'

const S21Subtisoil = () => {
  
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
          <div className="alignCenter">
            <Fade bottom >
              <div className="shadow">
                <div className="shadowDark">
                  <img src={SubTiSoil}/>
                </div>
              </div>
            </Fade>
          </div>
          <div className="flex">
          
          
            <ContentArea  minWidth="80vw" minHeight="100vh" >
              <Fade bottom >
                <div className="shadow">
                  <div className="shadowDark">
                    <div>
                      <p>
                        <p><b>DEGRADATION OF TOXIC ELEMENTS IN THE CREATION OF SUPPRESSIVE SOILS</b></p>
                      </p>
                      <p>
                      SUBTISOIL mineralizes and degrades toxic and dangerous compounds in the soil, leading to the creation of suppressive soils.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-row">
                  <div className="shadow" >
                    <div className="shadowDark">
                      <h2>MODE OF ACTION</h2>
                      <p className="textAlignLeft">
                        SUBTISOIL, composed of Bacillus Subtillis and other rhizospheric microorganisms, is specifically designed for the creation of
                        suppressive soils.	It is antagonistic to pathogens, stimulates growth of beneficial microorganisms and possesses phytosanitary characteristics.
                        <br/>
                        <br/>
                        SUBTISOIL increases the plant’s natural defenses by cutting plague and disease
                        cycles in the soil.	It increases the plant’s resistance to low temperatures and reduces the inoculating capacity (Quorum Sensing) of pathogenic microorganisms.
                        <br/>
                        <br/>
                        SUBTISOIL contributes to the mineralization of toxic and dangerous compounds from previous agrochemical applications to the soil preventing their reaction with organic matter.
                        <br/>
                        <br/>
                      </p>
                    </div>
                  </div>
                  <div className="shadow">
                    <div className="shadowDark">
                      <br/>
                      <p><b>MODE OF USE</b></p>
                      <br/>
                      <br/>
                      <p className="textAlignLeft">
                        Use as a soil spray mixed with abundant water.
                        <br/>
                        <br/>
                        A dose of 1 to 2 liters per hectare is recommended.
                        <br/>
                        <br/>
                        The lower dose acts as a protector for monthly preventive use.
                        <br/>
                        <br/>
                        The higher dose acts as a corrector for curative purposes and should be used bi- weekly for three applications before proceeding to the lower, preventive dose.
                        <br/>
                        Does not require safety waiting periods after application for access or harvest.
                        <br/>
                      </p>
                      <br/>
                      <p><b>Liquid Product</b></p>
                      <br/>
                      <br/>
                      <br/>
                      <div>
                        <p>
                          <p><b>ACTIVE INGREDIENTS:</b></p>
                          <br/>
                          Bacillus Subtillis and other rhizospheric microorganisms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S21Subtisoil;
