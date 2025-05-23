import React, { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/theme/interior';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Interior/Navbar';

import HPBanner from 'containers/Interior/HomePage/Banner';
import HPCatalog from 'containers/Interior/HomePage/Catalog';


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
        <Seo title="IBEX Bionomics | Organic Biotech for Sustainable Solutions"
              description="Explore certified organic biotech kits for aquaculture, agriculture, and environmental remediation." />
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
            
            <HPBanner />
            <HPCatalog />

            {/*<Feature />
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
