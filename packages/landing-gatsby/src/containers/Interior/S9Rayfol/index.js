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
import S9RayfolText from '../../../common/assets/image/interior/IbexImages/S9/S9RayfolText.png'

const S9Rayfol = () => {
  
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
          <Fade bottom >
            <ContentArea minWidth="40vw">
            <p className="shadowDark" padding="20px">
              <i>RAYFOL increases the sucrose concentration in sugarcane through non-stressful means, by regulating ethylene levels.
                <br/>Increases subsequent budding and resistance to diseases and low temperatures.</i>
            </p>
            </ContentArea>
          </Fade>
          <Fade bottom >
            <ContentArea className="shadow" minWidth="60vw" minHeight="100vh" >
              <div >
                <div>
                  <img src={S9RayfolText}/>
                  <p><b>ORGANIC RIPENER AND SUCROSE CONCENTRATOR</b></p>
                  <p>Natural, non-stress based ripener and flowering agent for use in sugarcane as a sucrose concentrator and with other fruit crops as flowering and fruiting agent.</p>
                </div>
              </div>
              <div className="flex-row" >
                <div >
                  <h2>MODE OF ACTION</h2>
                  <p>
                  RAYFOL is an organic complex formulated from the fermentation of vegetable metabolites.
                  <br/>
                  <br/>
                  Promotes the production of hormonal compounds in plant tissues, regulating gibberellin and ethylene.
                  <br/>
                  <br/>
                  In sugarcane crops, RAYFOL increases sucrose accumulation in the stalk, improving its efficiency in transporting sugars from the leaves to the storage cells. This allows a higher concentration of sucrose in the upper third of the stalk.
                  <br/>
                  <br/>
                  Increases root development of plants. In sugarcane it stimulates production of tillers after planting or harvesting.
                  <br/>
                  <br/>
                  Increases natural defenses and resistance to diseases, water stress and low temperatures.
                  <br/>
                  <br/>
                  Naturally ripens and concentrates
                  <br/>
                  <br/>
                  sugarcane sucrose.	Replaces stress-based chemical ripeners. Will not harm neighboring crops.
                  </p>
                </div>
                <div >
                  <br/>
                  <b>MODE OF USE</b>
                  <br/>
                  <br/>
                  <p>
                    Product for foliar application.
                    <br/>
                    <br/>
                    Sugarcane Ripener: Apply 1 liter per hectare three months before harvest.
                    <br/>
                    <br/>
                    Flowering, fruit setting, and fruit ripening:  Apply 1 liter per hectare at the beginning of each vegetative stage. (Dosage may vary by crop)
                    <br/>
                    <br/>
                    Does not require safety waiting periods after application for access or harvest
                  </p>
                  <br/>
                  <b>Liquid Product</b>
                  <br/>
                  <br/>
                  <br/>
                  <div>
                    <p>
                      <b>ACTIVE INGREDIENTS:</b>
                      <br/>
                      Natural extracts and organic metabolites of vegetable origin.
                    </p>
                  </div>
                </div>
              </div>
            </ContentArea>
          </Fade>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S9Rayfol;
