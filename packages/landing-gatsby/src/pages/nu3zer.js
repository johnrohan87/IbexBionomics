import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import nu3zer from 'common/assets/PDFs/Nu3zer_Catalog.pdf'
import { display } from 'styled-system';


const Nu3zer = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: nu3zer,
    page,
    canvasRef,
  });

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} style={{maxWidth:"100vw"}}/>
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager" style={{width:"100vw", display:"flex", alignItems: "center", justifyContent: "center", gap: "10%"}}>
            <li className="previous" style={{width:"25vw"}}>
              <button disabled={page === 1} onClick={() => setPage(page - 1)} style={{width:"25vw"}}>
                Previous Page
              </button>
            </li>
            <li className="next" style={{width:"25vw"}}>
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
                style={{width:"25vw"}}
              >
                Next Page
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Nu3zer;