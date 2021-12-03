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
import S12QCleanText from '../../../common/assets/image/interior/IbexImages/S12/S12QCleanText.png'

const S12QClean = () => {
  
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
              <i>Optimizes nutritional balance and metabolic activity in the plant’s cells and tissues. Activates the plant’s natural defenses against fungus and bacteria.</i>
            </p>
            <p className="smPadding alignCenter shadowDark">
            <b>ACTIVE METABOLITES</b>
            <div className="flex-row smPadding alignCenter">
              <ol >
                <li>Allicin</li>
                <li>Eucaliptol</li>
                <li>Filosterine</li>
                <li>Nicotinamide</li>
                <li>Sulfides</li>
              
                <li>Alilo</li>
                <li>Eudesmol</li>
                <li>Garcilina</li>
                <li>Pinene</li>
                <li>Tannins</li>
              
                <li>Choline</li>
                <li>Filandreno</li>
                <li>Histamine</li>
                <li>Nicotinamide</li>
              </ol>
            </div>
            </p>
            </ContentArea>
          </Fade>
          <Fade bottom >
            <ContentArea className="shadow" minWidth="60vw" minHeight="100vh" >
              <div >
                <div>
                  <img src={S12QCleanText}/>
                  <p><b>ORGANIC FUNGICIDE AND BACTERICIDE FOR AGRICULTURAL USE</b>
                  <br/>INDUCES THE PRODUCTION OF PHYTOALEXINS (NATURAL DEFENSE METABOLITES)</p>
                  <p>
                  A biological fungicide and bactericide with nutritional character for foliar use. 
                  <br/>It is a complex of natural ingredients that provides essential nutrients promoting 
                  <br/>sound metabolism and plant development.
                  </p>
                </div>
              </div>
              <div className="flex-row" >
                <div >
                  <h2>MODE OF ACTION</h2>
                  <p>
                  Q-CLEAN’s systemic nature acts on the hormonal system by stimulating production of phytoalexins and other substances linked to the plant’s defense metabolism. It provides greater tolerance and resistance to fungal and bacterial attacks that damage internal and external organs such as roots, leaves, flowers, fruits and bark
                  <br/>
                  <br/>
                  May be applied by air or land, with low or high volumes of water, Q-CLEAN ingredients are easily absorbed and incorporated by the plant, promoting positive hypersensitivity reactions and subsequent activation of protein production with a broad resistance spectrum.
                  <br/>
                  <br/>
                  </p>
                </div>
                <div >
                  <br/>
                  <b>MODE OF USE</b>
                  <br/>
                  <br/>
                  <p>
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
    


export default S12QClean;
