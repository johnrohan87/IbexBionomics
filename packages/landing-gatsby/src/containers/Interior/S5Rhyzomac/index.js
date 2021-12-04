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
import S5RhyzomacText from '../../../common/assets/image/interior/IbexImages/S5/S5RhyzomacText.png'

const S5Rhyzomac = () => {
  
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
              <img className="shadowDark" src={S5RhyzomacText}/>
              </div>
            </Fade>
          </div>
          <div className="flex h100">
            <ContentArea minWidth="40vw" minHeight="40vh" className="alignTop">
              <Fade bottom >
                <div className="shadow">
                  <p className="shadowDark">
                  A highly effective biological fertilizer. Due to its sporulated form, it immediately adopts the characteristics of the native colonies of beneficial microorganisms, promoting their growth and reproduction.
                  </p>
                </div>
              </Fade>
            </ContentArea>
            
            
              <ContentArea minWidth="60vw" minHeight="100vh" >
                <Fade bottom >
                  <div className="shadow textAlignLeft">
                    <div >
                      <div>
                        
                        <div className="shadowDark">
                          <p className="textAlignCenter"><b>BIOLOGICAL NUTRITIONAL REGULATOR</b></p>
                          <p>A concentrated and stable liquid fertilizer composed of highly resistant spores of Azotobacter and other rhizospheric microorganisms that fix atmospheric nitrogen and solubilizes phosphorus and potassium present in the soil.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-row smPadding" >
                      <div className="shadowDark">
                        <h2 className="textAlignCenter"><b>MODE OF ACTION</b></h2>
                        <p>Natural fertilizer that transforms conventional soils, optimizing biological
                        and organic activity.	Actively promotes the degradation of organic matter, producing humic and fulvic acids, improving soil structure and water retention.
                        <br/>
                        <br/>
                        Mineralizes organic compounds in the soil, improving pH levels and the action of the mineral salts that affect crops. Stimulates the indigenous populations of microorganisms, and is antagonistic to
                        phytopathogenic	microorganisms. Increases bioavalability of phosphorus and potassium present in the soil.
                        <br/>
                        <br/>
                        Increases the plants natural defenses to diseases, and low temperatures.
                        <br/>
                        <br/>
                        RHYZOMAC contains bacteria that absorb atmospheric nitrogen, then secure, convert and release it to the plant. This ability to fix the free atmospheric nitrogen, is of vital ecological importance and contributes significantly to increase the fertility of the soil and habitat where they develop. This also prevents nitrogen from leaching into streams and other bodies of water.
                        </p>
                      </div>
                      <div className="shadowDark">
                        <h3 className="textAlignCenter"><b>USES</b></h3>
                        <ul>
                          <li>Pre-sowing treatment of soil.</li>
                          <li>Applications in soil.</li>
                          <li>Inoculant for seeds, seedlings, and transplants.</li>
                          <li>Inoculant for nursery crops and potted plants.</li>
                          <li>Fertilizer for vegetables, fruit trees, flowers, fodder, cereals, and flooded crops, such as rice.</li>
                        </ul>
                        <br/>
                        <br/>
                        <br/>
                        <p className="textAlignCenter"><b>MODE OF USE</b></p>
                        <br/>
                        <br/>
                        <p>
                        RHYZOMAC may be applied directly to the soil by spraying, or may be mixed with irrigation water, whether by drip, pump or gravity.
                        Does not require safety waiting periods after application for access or harvest.
                        </p>
                        <br/>
                        <p className="textAlignCenter"><b>Liquid Product</b></p>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                          <p>
                            <b>ACTIVE INGREDIENTS:</b>
                            <br/>
                              Sporulated	Azotobacter and other rhizospheric microorganisms.
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
    


export default S5Rhyzomac;
