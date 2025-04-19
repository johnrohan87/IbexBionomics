import React from 'react';
import PDFDisplay from '../PDFDisplay';
import { ContentArea, PDFDisplayArea } from './banner.style';

const CatalogItem = ({ className={...className}, label, backgroundImage, description, pdf, currentPDF, setCurrentPDF, isNarrowScreen }) => {
  const isActive = currentPDF === pdf;

  const handleSelect = () => {
    setCurrentPDF(isActive ? 'none' : pdf);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect();
    }
  };

  return (
    <div>
      <ContentArea
        minWidth="25vw"
        minHeight="60vh"
        backgroundImage={`url(${backgroundImage})`}
        role="button"
        tabIndex={0}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        className="cursorPointer"
      >
        <div className="catalogContent">
          <p className="sectorTitle">{label}</p>
          <p className="sectorDescription">{description}</p>
        </div>
      </ContentArea>
      <PDFDisplayArea>
      {isNarrowScreen && isActive && <PDFDisplay pdf={pdf} />}
      </PDFDisplayArea>
    </div>
  );
};

export default CatalogItem;