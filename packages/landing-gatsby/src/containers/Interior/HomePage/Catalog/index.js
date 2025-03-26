import React, { useState, useEffect } from 'react';
import PDFDisplay from '../PDFDisplay';
import CatalogItem from './CatalogItem';
import BannerWrapper, { Container } from './banner.style';

import leafbg from '../../../../common/assets/image/interior/IbexImages/S2/LeafBG.jpg';
import hpAquaculture from '../../../../common/assets/image/interior/IbexImages/HomePage/HPAquaculture.jpg';
import hpHydrocarbon from '../../../../common/assets/image/interior/IbexImages/HomePage/HPHydrocarbon.jpg';
import MicroorganismsBG from '../../../../common/assets/image/interior/IbexImages/S3/S3MicroorganismsBG.jpg';
import nu3zer from '../../../../common/assets/image/interior/IbexImages/HomePage/HPNu3zer.jpg';

const Agriculture_Catalogue = "/pdfs/Agriculture_Catalogue_ENG.pdf";
const Aquaculture_Catalog = "/pdfs/Aquaculture_Catalog.pdf";
const Hydrocarbon_Catalog = "/pdfs/Hydrocarbon_Catalog.pdf";
const Waste_Waters_Catalogue = "/pdfs/Waste_Waters_Catalogue.pdf";
const Nu3zer_Catalog = "/pdfs/Nu3zer_Catalog.pdf";

const Catalog = () => {
  const [currentPDF, setCurrentPDF] = useState('none');
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 1000px)");
    setIsNarrowScreen(mediaWatcher.matches);

    const updateIsNarrowScreen = (e) => setIsNarrowScreen(e.matches);

    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen);
      return () => mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen); // for older browsers
      return () => mediaWatcher.removeListener(updateIsNarrowScreen);
    }
  }, []);

  return (
    <div>
      <BannerWrapper>
        {/* Section 1 */}
        <Container>
          <div className="flex h100 alignCenter">
            <CatalogItem
              label="Agriculture"
              backgroundImage={leafbg}
              pdf={Agriculture_Catalogue}
              currentPDF={currentPDF}
              setCurrentPDF={setCurrentPDF}
              isNarrowScreen={isNarrowScreen}
            />
            <CatalogItem
              label="Aquaculture"
              backgroundImage={hpAquaculture}
              pdf={Aquaculture_Catalog}
              currentPDF={currentPDF}
              setCurrentPDF={setCurrentPDF}
              isNarrowScreen={isNarrowScreen}
            />
          </div>
          {!isNarrowScreen && currentPDF !== 'none' &&
            (currentPDF === Agriculture_Catalogue || currentPDF === Aquaculture_Catalog) && (
              <PDFDisplay pdf={currentPDF} />
            )
          }
        </Container>

        {/* Section 2 */}
        <Container>
          <div className="flex h100 alignCenter">
            <CatalogItem
              label="Environmental Remediation\nHydrocarbons"
              backgroundImage={hpHydrocarbon}
              pdf={Hydrocarbon_Catalog}
              currentPDF={currentPDF}
              setCurrentPDF={setCurrentPDF}
              isNarrowScreen={isNarrowScreen}
            />
            <CatalogItem
              label="Environmental Remediation\nWaste Waters"
              backgroundImage={MicroorganismsBG}
              pdf={Waste_Waters_Catalogue}
              currentPDF={currentPDF}
              setCurrentPDF={setCurrentPDF}
              isNarrowScreen={isNarrowScreen}
            />
          </div>
          {!isNarrowScreen && currentPDF !== 'none' &&
            (currentPDF === Hydrocarbon_Catalog || currentPDF === Waste_Waters_Catalogue) && (
              <PDFDisplay pdf={currentPDF} />
            )
          }
        </Container>

        {/* Section 3 */}
        <Container>
          <div className="flex h100 alignCenter">
            <CatalogItem
              label="Nu3zer"
              backgroundImage={nu3zer}
              pdf={Nu3zer_Catalog}
              currentPDF={currentPDF}
              setCurrentPDF={setCurrentPDF}
              isNarrowScreen={isNarrowScreen}
            />
          </div>
          {!isNarrowScreen && currentPDF === Nu3zer_Catalog && (
            <PDFDisplay pdf={currentPDF} />
          )}
        </Container>
      </BannerWrapper>
    </div>
  );
};

export default Catalog;