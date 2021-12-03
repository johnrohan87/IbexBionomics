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
import S13QCombatText from '../../../common/assets/image/interior/IbexImages/S13/S13QCombatText.png'

const S13QCombat = () => {
  
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
          
            <ContentArea minWidth="40vw">
              <Fade bottom >
            <p className="shadowDark" padding="20px">
              <i>Contains metabolites that affect, repel and deter  insects through contact and chemical signals, and increase the plant’s entomological defenses.</i>
            </p>
            <p className="smPadding alignCenter shadowDark">
            <b>ACTIVE METABOLITES</b>
            <div className="flex-row smPadding alignCenter">
              <ol className="gridContainer" >
                <li>Allicin</li>
                <li>Concanavalin</li>
                <li>Cineol</li>
                <li>Dipenteno</li>
                <li>Phellandrene</li>
                <li>Histamine</li>
                <li>Linalol</li>
                <li>Mentola</li>
                <li>Rutina</li>
                <li>L-limonene</li>
              
                <li>Boreol</li>
                <li>Camphene</li>
                <li>Ciñelo</li>
                <li>Disulfides</li>
                <li>Filosterina</li>
                <li>Inulin</li>
                <li>Menthene</li>
                <li>Methyleugenol</li>
                <li>Serotonin</li>
             
                <li>Borneol</li>
                <li>Calendulina</li>
                <li>Citronellal</li>
                <li>Estregol</li>
                <li>Geraniol</li>
                <li>Leneol</li>
                <li>Menthol</li>
                <li>Nerol</li>
                <li>Thujone</li>
              </ol>
            </div>
            </p></Fade>
            </ContentArea>
          
          
            <ContentArea minWidth="60vw" minHeight="100vh" >
              <Fade bottom >
                <div className="shadow">
                <div >
                <div >
                  <img src={S13QCombatText}/>
                  <p><b>INDUCER OF PLANT PHYSIOLOGICAL RESISTANCE AGAINST INSECT PLAGUES</b></p>
                  <p>
                  Q-COMBAT inhibits, repels, deters and affects phytopatogenic insects of different types 
                  (crawling, flying, sucking, defoliators, etc..), while it stimulates vital plant processes 
                  to fortify and protect them against these attacks.
                  </p>
                </div>
              </div>
              <div className="flex-row" >
                <div >
                  <h2>MODE OF ACTION</h2>
                  <p>
                      Q-COMBAT has a dual form of action by affecting both, the plant and its specific plagues.	
                    <br/>
                    <br/>
                      It interrupts the feeding habits of phytopatogenic insects through a reduction of the plant’s stress levels and the stimulation of production of secondary metabolites that adversely affect the nutrition of insects at all stages of development.
                    <br/>
                    <br/>
                      At the same time, Q-COMBAT affects insects directly or indirectly.	It acts as an insect repellent, disrupting the chemical communication that allows insects to find their food and sexual partners, decreasing both, reproduction and colonization of crops.
                    <br/>
                    <br/>
                      Q-COMBAT affects insect fertility leading to low-fertility ovular deposits, mitigating proliferation by reproduction and lowering the associated costs and losses.
                    <br/>
                    <br/>
                  </p>
                </div>
                <div >
                  <br/>
                  <b>Treated plants will have greater resilience to attacks and better healing with less risk of infection.</b>
                  <br/>
                  <br/>
                  <br/>
                  <b>MODE OF USE</b>
                  <br/>
                  <br/>
                  <p>
                    Q-COMBAT should be used as a foliar spray.
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
                    <br/>
                    Does not require safety waiting periods after application for access or harvest.
                    <br/>
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
              </div></div>
              </Fade>
            </ContentArea>
          
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S13QCombat;
