import React from 'react';
//, { Fragment, useState, useEffect }
import { useStaticQuery, graphql } from 'gatsby';
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
import S7QBN3Text from '../../../common/assets/image/interior/IbexImages/S7/S7QBN-3Text.png';

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
          <Fade bottom >
            <ContentArea minWidth="40vw">
            <p className="shadowDark" padding="20px">
              <i>The organic components found in QBN-3 avoid biological impacts produced by heavy elements, eliminating the formation of toxic compounds through chemical reactions.</i>
            </p>
            </ContentArea>
          </Fade>
          <Fade bottom >
            <ContentArea className="shadow" minWidth="60vw" minHeight="100vh" >
              <div >
                <div>
                  <img src={S7QBN3Text}/>
                  <p><b>ORGANIC ENZYMATIC FERTILIZER FOR EDAPHIC AND FOLIAR USE</b></p>
                  <p>Nutritional supplement - eliminates and degrades toxic compounds.</p>
                </div>
              </div>
              <div className="flex-row" >
                <div >
                  <h2>MODE OF ACTION</h2>
                  <p>
                  QBN-3 stimulates the production and facilitates the action of auxins, gibberellins, and cytokinins, promoting growth and development.
                  <br/>
                  <br/>
                  Stimulates the production of chlorophyll and amylases, allowing the plant to process nutrients and solar energy more efficiently.
                  <br/>
                  <br/>
                  Prevents nutrient losses caused by evaporation and leaching.
                  <br/>
                  <br/>
                  Prevents biological impact shocks produced by heavy elements, preventing the generation of toxic compounds through chemical reactions.
                  </p>
                </div>
                <div >
                  <br/>
                  <b>MODE OF USE</b>
                  <br/>
                  <br/>
                  <p>
                  QBN-3 is designed for foliar applications but may be used edaphically for
                  <br/>
                  <br/>
                  seedlings in nurseries.	It is also ideal for hydroponic plant nutrition.
                  <br/>
                  <br/>
                  Does not require safety waiting periods after application for access or harvest.
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
    


export default S5Rhyzomac;
