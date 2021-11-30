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
import S6RhyzominText from '../../../common/assets/image/interior/IbexImages/S6/S6RhyzominText.png'

const S5Rhyzomac = () => {
  
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

  return(
    <div> 
      <BannerWrapper>
        <Container>
          <Fade bottom >
            <ContentArea minWidth="40vw">
            <p className="shadowDark" padding="20px">
              <i>A mineral prebiotic that increases responsiveness and physiological resistance in treated plants, leading to healthier crops and lower treatment costs for fungal, bacterial, and viral infections.</i>
            </p>
            </ContentArea>
          </Fade>
          <Fade bottom >
            <ContentArea className="shadow" minWidth="60vw" minHeight="100vh" >
              <div >
                <div>
                  <img src={S6RhyzominText}/>
                  <p><b>POTENTIATING MINERAL PREBIOTIC FOR AGRICULTURAL USE</b></p>
                  <p>A pulverized, insoluble mineral compound for foliar and edaphic application. Through the remineralization of plants and soils, depleted or diminished mineral reserves are replaced in necessary quantities.</p>
                </div>
              </div>
              <div className="flex-row" >
                <div >
                  <h2>MODE OF ACTION</h2>
                  <p>
                  For certain beneficial bacteria, fungi, and other microorganisms, the mineral elements contained in RHYZOMIN allow the restoration of biochemical reactions, leading to soil remediation and plant enrichment.
                  <br/>
                  <br/>
                  RHYZOMIN promotes ideal nutritional conditions for Ecological Farming by Remineralization (EFR), so plants can express their full bromatologic proteome (entire set of proteins), correcting the most common mineral and vitamin deficiencies commonly found in crops.
                  <br/>
                  Improves biological activity of the existing beneficial microorganisms by intensifying and increasing the soil’s biokinetic capacity.
                  <br/>
                  <br/>
                  The activation of the bacterial microflora through this biomineral enhancer allows for the development of a non-restrictive, optimum level of efficiency in biological environments through natural and non- toxic elements.
                  </p>
                </div>
                <div >
                  <br/>
                  <b>MODE OF USE</b>
                  <br/>
                  <br/>
                  <p>
                  The continued use of RHYZOMIN increases crop productivity and optimizes the cost- benefit ratio of agricultural holdings.
                  <br/>
                  <br/>
                  Application rates are minimal by hectare and its use is completely safe for field personnel.
                  <br/>
                  <br/>
                  Does not require safety waiting periods after application for access or harvest.
                  </p>
                  <br/>
                  <b>Solid Product</b>
                  <br/>
                  <br/>
                  <br/>
                  <div>
                    <p>
                      <b>ACTIVE INGREDIENTS:</b>
                      <br/>
                      Pulverized calcic and silicic rock and other mineral traces with prebiotic characteristics.
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
