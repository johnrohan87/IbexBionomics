import React from 'react';
import PDFDisplay from '../PDFDisplay';
import { ContentArea, PDFDisplayArea } from './banner.style';

const CatalogItem = ({ className={...className}, label, backgroundImage, description, pdf, currentPDF, setCurrentPDF, isNarrowScreen }) => {
  const isActive = currentPDF === pdf;

  const handleSelect = () => {
    if (!isActive) {
      console.log(`Loading PDF: ${pdf}`);
    }
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
        style={{
          cursor: 'pointer',
          border: isActive ? '2px solid #007acc' : 'none',
          boxShadow: isActive ? '0 0 10px rgba(0,0,0,0.3)' : 'none',
          transition: 'box-shadow 0.2s ease-in-out',
        }}
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