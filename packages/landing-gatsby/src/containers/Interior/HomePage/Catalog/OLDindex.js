import React, { useState, useEffect } from 'react';
import PDFDisplay from '../PDFDisplay';
//, { Fragment, useState, useEffect }
//import { useStaticQuery, graphql } from 'gatsby';
//import Fade from 'react-reveal/Fade';
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
//import S14SubtifolText from '../../../../common/assets/image/interior/IbexImages/S14/S14SubtifolText.png'
import leafbg from '../../../../common/assets/image/interior/IbexImages/S2/LeafBG.jpg'
import hpAquaculture from '../../../../common/assets/image/interior/IbexImages/HomePage/HPAquaculture.jpg'
import hpHydrocarbon from '../../../../common/assets/image/interior/IbexImages/HomePage/HPHydrocarbon.jpg'
import MicroorganismsBG from '../../../../common/assets/image/interior/IbexImages/S3/S3MicroorganismsBG.jpg'
import nu3zer from '../../../../common/assets/image/interior/IbexImages/HomePage/HPNu3zer.jpg'

import Agriculture_Catalogue from '../../../../common/assets/PDFs/Agriculture_Catalogue_ENG.pdf'
import Aquaculture_Catalog from '../../../../common/assets/PDFs/Aquaculture_Catalog.pdf'
import Hydrocarbon_Catalog from '../../../../common/assets/PDFs/Hydrocarbon_Catalog.pdf'
import Waste_Waters_Catalogue from '../../../../common/assets/PDFs/Waste_Waters_Catalogue.pdf'
import Nu3zer_Catalog from '../../../../common/assets/PDFs/Nu3zer_Catalog.pdf'

const Catalog = (props) => {
  const [currentPDF,setCurrentPDF] = useState('none')
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    //console.log(isNarrowScreen)
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 1000px)")
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }

    if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen)
      // clean up after ourselves
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
      }
    } else {
      // backwards compatibility
      mediaWatcher.addListener(updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen)
      }
    }
    
  },[])
  
  return(
    <div> 
      <BannerWrapper>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${leafbg})`} >
              <p className="centerXandY whiteText cursorPointer" role="button" tabIndex={0} onClick={()=> currentPDF === Agriculture_Catalogue ? setCurrentPDF('none'): setCurrentPDF(Agriculture_Catalogue)}>
                    <b>
                    Agriculture
                    </b>
                {/*<a className="whiteText" href={Agriculture_Catalogue} download>
                </a>*/}
              </p>
              <div className="Agriculture_Catalogue">
              { isNarrowScreen ? (currentPDF === Agriculture_Catalogue ? <><PDFDisplay pdf={currentPDF} /></> : <></>) : <></>}
              </div>
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${hpAquaculture})`}>
              <p className="centerXandY whiteText cursorPointer" role="button" tabIndex={1} onClick={()=> currentPDF === Aquaculture_Catalog ? setCurrentPDF('none'): setCurrentPDF(Aquaculture_Catalog)}>
                <b>
                Aquaculture
                </b>
              {/** <a className="whiteText" href={Aquaculture_Catalog} download>
              </a> */}
              </p>
              { isNarrowScreen ? (currentPDF === Aquaculture_Catalog ? <PDFDisplay pdf={currentPDF} /> : "") : ""}
            </ContentArea>
          </div>
          {isNarrowScreen ? "" : currentPDF === "none"  ? "" : currentPDF === Agriculture_Catalogue || currentPDF === Aquaculture_Catalog ? <PDFDisplay pdf={currentPDF} />:""}
        </Container>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${hpHydrocarbon})`}>
              <p className="centerXandY whiteText cursorPointer" role="button" tabIndex={2} onClick={()=> currentPDF === Hydrocarbon_Catalog ? setCurrentPDF('none'): setCurrentPDF(Hydrocarbon_Catalog)}>
                  <b>
                  Environmental Remediation
                  <br/>
                  Hydrocarbons
                  </b>
              {/** <a className="whiteText" href={Hydrocarbon_Catalog} download>
              </a> */}
                </p>
                { isNarrowScreen ? (currentPDF === Hydrocarbon_Catalog ? <PDFDisplay pdf={currentPDF} /> : "") : ""}
            </ContentArea>
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${MicroorganismsBG})`}>
                <p className="centerXandY whiteText cursorPointer" role="button" tabIndex={3} onClick={()=> currentPDF === Waste_Waters_Catalogue ? setCurrentPDF('none'): setCurrentPDF(Waste_Waters_Catalogue)}>
                  <b>
                  Environmental Remediation
                  <br/>
                  Waste Waters
                  </b>
              {/** <a className="whiteText" href={Waste_Waters_Catalogue} download>
              </a> */}
                </p>
                { isNarrowScreen ? (currentPDF === Waste_Waters_Catalogue ? <PDFDisplay pdf={currentPDF} /> : "") : ""}
            </ContentArea>
          </div>
          {isNarrowScreen ? "" : currentPDF === "none" ? "" : currentPDF === Hydrocarbon_Catalog || currentPDF === Waste_Waters_Catalogue ? <PDFDisplay pdf={currentPDF} />:""}
        </Container>
        <Container>
          <div className="flex h100 alignCenter">
            <ContentArea minWidth="25vw" minHeight="60vh" backgroundImage={`url(${nu3zer})`} >
              <p className="centerXandY whiteText cursorPointer" role="button" tabIndex={4} onClick={()=> currentPDF === Nu3zer_Catalog ? setCurrentPDF('none'): setCurrentPDF(Nu3zer_Catalog)}>
                    <b>
                    Nu3zer
                    </b>
                {/*<a className="whiteText" href={Agriculture_Catalogue} download>
                </a>*/}
              </p>
              <div className="Agriculture_Catalogue">
              { isNarrowScreen ? (currentPDF === Nu3zer_Catalog ? <><PDFDisplay pdf={currentPDF} /></> : <></>) : <></>}
              </div>
            </ContentArea>
          </div>
          {isNarrowScreen ? "" : currentPDF === "none" ? "" : currentPDF === Nu3zer_Catalog ? <PDFDisplay pdf={currentPDF} />:""}
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default Catalog;
