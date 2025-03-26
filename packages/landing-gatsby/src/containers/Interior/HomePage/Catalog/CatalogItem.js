import React from 'react';
import PDFDisplay from '../PDFDisplay';
import { ContentArea, PDFDisplayArea } from './banner.style';

const CatalogItem = ({ label, backgroundImage, pdf, currentPDF, setCurrentPDF, isNarrowScreen }) => {
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
        <p className="centerXandY whiteText">
          <b>{label}</b>
        </p>
      </ContentArea>
      <PDFDisplayArea>
      {isNarrowScreen && isActive && <PDFDisplay pdf={pdf} />}
      </PDFDisplayArea>
    </div>
  );
};

export default CatalogItem;