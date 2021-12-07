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
import S15LanceTipText from '../../../common/assets/image/interior/IbexImages/S15/S15LanceTipText.png'

const S15LanceTip = () => {
  
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
                  <img src={S15LanceTipText}/>
                </div>
              </div>
            </Fade>
          </div>
          <div className="flex">
          <ContentArea minWidth="40vw" className="alignTop">
            <Fade bottom >
              <div className="shadow">
                <p className="shadowDark" padding="20px">
                  <i>Causes inhibitions and complex changes in the cell membrane of fungi and pathogenic bacteria, blocking their enzymes by unfolding the proteins.</i>
                </p>
                <p className="smPadding alignCenter shadowDark flex column">
                  <p><b>ACTIVE METABOLITES</b></p>
                  <div className="flex-row smPadding alignCenter">
                    <ol className="gridContainer">
                      <li>Allicin</li>
                      <li>Garcilina</li>
                    
                      <li>Alilo</li>
                      <li>Nicotinamide</li>
                  
                      <li>Choline</li>
                      <li>Sulfides</li>
                    </ol>
                    <br/>
                  </div>
                  <i><b>Also effective in the protection of post-harvest fruits and flowers.</b></i>
                </p>
              </div>
            </Fade>
          </ContentArea>
        
        
          <ContentArea  minWidth="60vw" minHeight="100vh" >
            <Fade bottom >
              <div className="shadow">
                <div className="shadowDark">
                  <div>
                    <p>
                      <p><b>INTERRUPTOR OF PATHOGENIC DEFENSE MECHANISMS</b></p>
                    </p>
                    <p>
                    Organic bactericide and fungicide with broad-spectrum action on the defense mechanisms of pathogens.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-row">
                <div className="shadow" >
                  <div className="shadowDark">
                    <h2>MODE OF ACTION</h2>
                    <p className="textAlignLeft">
                      LANCE TIP initiates and sustains oxidative reactions that damage the cell wall of pathogens, while enhancing the growth of beneficial microorganisms.
                      <br/>
                      <br/>
                      Pathogens can only offer minimum resistance due to the complexity and multiple points of action of the product.
                      <br/>
                      <br/>
                      The product interferes with the pathogen’s interpretation and understanding of the chemical messages from the environment that trigger defense mechanisms of fungi and pathogenic bacteria. Also limits the growth and reproduction of pathogens that have not been affected by direct contact with the product.
                      <br/>
                      <br/>
                      Does not require safety waiting period after application for access or harvest.
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
                      A dose of 1 to 2 liters per hectare is recommended.
                      <br/>
                      <br/>
                      The lower dose acts as a protector for monthly preventive use.
                      <br/>
                      <br/>
                      The higher dose acts as a corrector for curative purposes and should be used bi- weekly for three applications before proceeding to the lower, preventive dose.
                      <br/>
                      <br/>
                      <p className="textAlignCenter"><b>PREVENTS</b></p>
                      <p>
                      LANCE TIP prevents and provides ongoing control of the damage caused by pathogenic fungi and bacteria at all growth stages of the plant in both, greenhouse and field conditions.
                      </p>
                      <br/>
                      <p className="textAlignCenter"><b>PROTECTS</b></p>
                      <p>
                      LANCE TIP protects seeds, leaves, flowers, fruits and the surrounding soil near the root.
                      <br/>
                      Protects open wounds in plant tissues and promotes healing.
                      </p>
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
                        Natural extracts and organic metabolites of vegetable origin.
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
    


export default S15LanceTip;
