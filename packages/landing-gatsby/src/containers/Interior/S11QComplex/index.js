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
import S11QComplexText from '../../../common/assets/image/interior/IbexImages/S11/S11QComplexText.png'

const S11QComplex = () => {
  
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
              <div className="shadow">
                <div className="shadowDark">
                  <img src={S11QComplexText}/>
                </div>
              </div>
          </div>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="40vw" minHeight="40vh" className="alignTop">
              <Fade bottom >
                <div className="shadow">
                  <p className="shadowDark" padding="20px">
                    <i>Promotes natural resistance against different types of pathogens (fungi, viruses, and bacteria) that make up the complex diseases proliferating in monoculture crops.</i>
                  </p>
                  <p className="smPadding alignCenter shadowDark">
                    <b>ACTIVE METABOLITES</b>
                    <div className="flex-row smPadding alignCenter">
                      <ol className="gridContainer">
                        <li>Allicin</li>
                        <li>Garcilina</li>
                        <li>Eucaliptol</li>
                        <li>Filosterine</li>
                        <li>Nicotinamide</li>
                        <li>Sulfides</li>
                    
                        <li>Alilo</li>
                        <li>Nicotinamide</li>
                        <li>Eudesmol</li>
                        <li>Garcilina</li>
                        <li>Pinene</li>
                        <li>Tannins</li>
                    
                        <li>Choline</li>
                        <li>Sulfides</li>
                        <li>Filandreno</li>
                        <li>Histamine</li>
                        <li>Seratonin</li>
                      </ol>
                    </div>
                  </p>
                </div>
              </Fade>
            </ContentArea>
            <ContentArea minWidth="60vw" minHeight="100vh" >
              <Fade bottom >
                <div className="shadow">
                  <div className="shadowDark">
                    
                    <p><b>INDUCES PHYSIOLOGICAL RESISTANCE <br/>AGAINST COMPLEX PATHOGENIC ATTACKS</b></p>
                    <p>Q-COMPLEX is an organic inducer of physiological resistance in plants, 
                      <br/>which primarily and specifically activates mechanisms related to 
                      <br/>the reduction of the physiological and morphological impact 
                      <br/>caused by fungal, bacterial, and viral complexes.</p>
                  </div>
                </div>
                <div className="flex-row shadow" >
                  <div className="shadowDark">
                    <h2>MODE OF ACTION</h2>
                    <p>
                    The metabolites present in Q-COMPLEX provide the plant with primary sources for the production of proteins that that interrupt the formation of soluble substances that nourish a vast array of pathogens, providing the plant with resistance against complex attacks.
                    <br/>
                    <br/>
                    Q-COMPLEX is an effective metabolic regulator for the plant, stimulating enzymatic activity, initiating a local response around any points of necrosis. It induces a rapid increase in the synthesis of salicylic acid and activates a number of genes, encoded for the production of proteins
                    <br/>
                    <br/>
                    that protect against a variety of pathogens,	whether fungi, bacteria, or viruses.
                    <br/>
                    <br/>
                    Allows the plant to create systemic resistance in all its organs through the production of phytoalexins.
                    <br/>
                    <br/>
                    </p>
                  </div>
                  <div className="shadowDark">
                    <br/>
                    <p><b>BENEFITS</b></p>
                    <ol className="smPadding">
                      <li>Prevents and reduces the damage caused by complex fungi, bacteria, and viruses.</li>
                      <li>Promotes continued growth in plants with better development and productivity.</li>
                      <li>Ensures high recovery rates.</li>
                      <li>Prevents the onset of symptoms caused by infections.</li>
                      <li>Reduces or prevents the spread of the complex through the plantation.</li>
                    </ol>
                    <br/>
                    <p><b>MODE OF USE</b></p>
                    <br/>
                    <br/>
                    <p>
                      Q-COMPLEX should be used as a foliar spray.
                      <br/>
                      <br/>
                      A dose of 1 to 2 liters per hectare is recommended.
                      <br/>
                      <br/>
                      The lower dose acts as a protector for monthly preventive use.
                      <br/>
                      <br/>
                      The higher dose acts as a corrector for curative purposes and should be used bi-weekly	for three applications before proceeding to the lower, preventive dose.
                    </p>
                    <br/>
                    <p><b>Liquid Product</b></p>
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
              </Fade>
            </ContentArea>
          </div>
          
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S11QComplex;
