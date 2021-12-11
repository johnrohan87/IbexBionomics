import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/theme/interior';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Interior/Navbar';
import S1Banner from 'containers/Interior/Agriculture/S1Banner';
import S2Products from 'containers/Interior/Agriculture/S2Products';
import S3Microorganisms from 'containers/Interior/Agriculture/S3Microorganisms';
import S4PlantNutrition from 'containers/Interior/Agriculture/S4PlantNutrition';
import S5Rhyzomac from 'containers/Interior/Agriculture/S5Rhyzomac';
import S6Rhyzomin from 'containers/Interior/Agriculture/S6Rhyzomin';
import S7QBN3 from 'containers/Interior/Agriculture/S7QBN-3';
import S8Banner from 'containers/Interior/Agriculture/S8Banner';
import S9Rayfol from 'containers/Interior/Agriculture/S9Rayfol';
import S10Banner from 'containers/Interior/Agriculture/S10Banner';
import S11QComplex from 'containers/Interior/Agriculture/S11QComplex';
import S12QClean from 'containers/Interior/Agriculture/S12QClean';
import S13QCombat from 'containers/Interior/Agriculture/S13QCombat';
import S14Subtifol from 'containers/Interior/Agriculture/S14Subtifol';
import S15LanceTip from 'containers/Interior/Agriculture/S15LanceTip';
import S16Banner from 'containers/Interior/Agriculture/S16Banner';
import S17PlantGrowth from 'containers/Interior/Agriculture/S17PlantGrowth';
import S18PlantGrowthP2 from 'containers/Interior/Agriculture/S18PlantGrowthP2';
import S19SubtisoilAndNovater from 'containers/Interior/Agriculture/S19SubtisoilAndNovater';
import S20SubtisoilAndNovaterP2 from 'containers/Interior/Agriculture/S20SubtisoilAndNovaterP2';
import S21Subtisoil from 'containers/Interior/Agriculture/S21Subtisoil';
import S22Novater from 'containers/Interior/Agriculture/S22Novater';
//import Feature from 'containers/Interior/Feature';
//import AboutUs from 'containers/Interior/AboutUs';
//import Project from 'containers/Interior/Project';
//import Team from 'containers/Interior/Team';
//import News from 'containers/Interior/News';
//import Testimonial from 'containers/Interior/Testimonial';
//import Gallery from 'containers/Interior/Gallery';
import Footer from 'containers/Interior/Footer';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from 'containers/Interior/interior.style';
import Seo from 'components/seo';

const Interior = () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Seo title="Interior" />
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <S1Banner />
            <S2Products />
            <S3Microorganisms />
            <S4PlantNutrition />
            <S5Rhyzomac />
            <S6Rhyzomin />
            <S7QBN3 />
            <S8Banner />
            <S9Rayfol />
            <S10Banner />
            <S11QComplex />
            <S12QClean />
            <S13QCombat />
            <S14Subtifol />
            <S15LanceTip />
            <S16Banner />
            <S17PlantGrowth />
            <S18PlantGrowthP2 />
            <S19SubtisoilAndNovater />
            <S20SubtisoilAndNovaterP2 />
            <S21Subtisoil />
            <S22Novater />
           {/* <Feature />
            <AboutUs />
            <Project />*/}
            {/*<Team />
            <News />
            <Testimonial />
            <Gallery />*/}
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Interior;
