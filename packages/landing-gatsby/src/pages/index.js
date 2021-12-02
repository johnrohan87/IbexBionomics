import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/theme/interior';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Interior/Navbar';
import Banner from 'containers/Interior/Banner';
import S2Products from 'containers/Interior/S2Products';
import S3Microorganisms from 'containers/Interior/S3Microorganisms';
import S4PlantNutrition from 'containers/Interior/S4PlantNutrition';
import S5Rhyzomac from 'containers/Interior/S5Rhyzomac';
import S6Rhyzomin from 'containers/Interior/S6Rhyzomin';
import S7QBN3 from 'containers/Interior/S7QBN-3';
import S8Banner from 'containers/Interior/S8Banner';
import S9Rayfol from 'containers/Interior/S9Rayfol';
import S10Banner from 'containers/Interior/S10Banner';
//import Feature from 'containers/Interior/Feature';
import AboutUs from 'containers/Interior/AboutUs';
import Project from 'containers/Interior/Project';
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
            <Banner />
            <S2Products />
            <S3Microorganisms />
            <S4PlantNutrition />
            <S5Rhyzomac />
            <S6Rhyzomin />
            <S7QBN3 />
            <S8Banner />
            <S9Rayfol />
            <S10Banner />
           {/* <Feature />*/}
            <AboutUs />
            <Project />
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
