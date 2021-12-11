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
import S14SubtifolText from '../../../../common/assets/image/interior/IbexImages/S14/S14SubtifolText.png'

const S14Subtifol = () => {
  
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
                  <img src={S14SubtifolText}/>
                </div>
              </div>
            </Fade>
          </div>
          <div className="flex h100 alignCenter">
            
              <ContentArea minWidth="80vw" minHeight="100vh" >
                <Fade bottom >
                  <div className="shadow" >
                    <div className="shadowDark">
                    
                      <p><b>FOLIAR INHIBITOR OF PESTS AND DISEASE</b></p>
                      <p>
                      Composed of Bacillus Subtillis and other rhizospheric microorganisms with facultative character that interrupt the life cycles of pests and diseases on foliage.
                      </p>
                    </div>
                  </div>
                </Fade>
                <div className="flex-row" >
                  <Fade bottom>
                    <div className="shadow" >
                      <div className="shadowDark">
                        <h2>MODE OF ACTION</h2>
                        <p>
                            SUBTIFOL interrupts chemical signals to pathogens, preventing the plant foliage from being recognized as a food source or appropriate place for egg laying.
                          <br/>
                          <br/>
                            Stimulates the growth and concentration of beneficial microorganisms on leaf and stem surfaces.
                          <br/>
                          <br/>
                            SUBTIFOL, like all IBEX products,	is biodegradable and environmentally harmless.
                          <br/>
                          <br/>
                        </p>
                      </div>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="shadow" >
                      <div className="shadowDark">
                        <br/>
                        <p><b>MODE OF USE</b></p>
                        <br/>
                        <br/>
                        <p>
                          Designed for use as a foliar spray mixed with water.<br/>
                          <br/>
                          A dose of 1 to 2 liters per hectare is recommended.
                          <br/>
                          <br/>
                          The lower dose acts as a protector for monthly preventive use.
                          <br/>
                          <br/>
                          The higher dose acts as a corrector for curative purposes and should be used bi- weekly for three applications before proceeding to the lower, preventive dose.
                          <br/>
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
                            Bacillus Subtillis and other	rhizospheric microorganisms
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </ContentArea>
            </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S14Subtifol;
