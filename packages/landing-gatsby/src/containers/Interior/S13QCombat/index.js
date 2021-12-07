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
          <div className="alignCenter">
            <Fade bottom >
              <div className="shadow">
                <div className="shadowDark">
                  <img src={S13QCombatText}/>
                </div>
              </div>
            </Fade>
          </div>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="40vw" className="alignTop">
              <Fade bottom >
                <div className="shadow">
                  <p className="shadowDark" padding="20px">
                    <i>Contains metabolites that affect, repel and deter  insects through contact and chemical signals, and increase the plant’s entomological defenses.</i>
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="shadow">
                  <p className="smPadding alignCenter shadowDark flex column">
                    <p><b>ACTIVE METABOLITES</b></p>
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
                  </p>
                </div>
              </Fade>
            </ContentArea>
            <ContentArea minWidth="60vw" minHeight="100vh" >
              <div>
                <Fade bottom >
                  <div className="shadow">
                    <div className="shadowDark">
                      <p><b>INDUCER OF PLANT PHYSIOLOGICAL RESISTANCE AGAINST INSECT PLAGUES</b></p>
                      <p className="textAlignLeft">
                        Q-COMBAT inhibits, repels, deters and affects phytopatogenic insects of different types 
                        (crawling, flying, sucking, defoliators, etc..), while it stimulates vital plant processes 
                        to fortify and protect them against these attacks.
                      </p>
                    </div>
                  </div>
                </Fade>
                <div className="flex-row" >
                  <Fade bottom>
                    <div className="shadow">
                      <div className="shadowDark">
                        <h2>MODE OF ACTION</h2>
                        <p className="textAlignLeft">
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
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="shadow">
                      <div className="shadowDark">
                        <br/>
                        <p><b>Treated plants will have greater resilience to attacks and better healing with less risk of infection.</b></p>
                        <br/>
                        <br/>
                        <br/>
                        <p><b>MODE OF USE</b></p>
                        <br/>
                        <br/>
                        <p className="textAlignLeft">
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
                </Fade>
                </div>
              </div>
            </ContentArea>
          </div>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S13QCombat;
