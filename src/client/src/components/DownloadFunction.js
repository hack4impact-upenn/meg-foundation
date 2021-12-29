import React, { useState } from 'react';

import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

import styled from 'styled-components';

import PDF from '../pages/ExportPDFPage';

const Button = styled.a`
  background: transparent;
  border-radius: 50px;
  font-weight: bold;
  font-size: 14px;
  background-color: #1aabb8;
  color: white;
  padding: 0.5em 1em;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  &:hover {
    background-color: #c6eaed;
    color: white;
  }
`;

const DownloadFunction = ({ selectedCards }) => {
  const onButtonClick = async () => {
    const blob = await pdf(
      <PDF
        title="<Meg Foundation Downloaded Plan>"
        selectedCards={selectedCards}
      />
    ).toBlob();
    saveAs(blob, 'My Custom Pain Plan');
    //   ReactPDF.render(<PDF />, `example.pdf`);
    // const input = document.getElementById('pdf');
    // const wrapper = document.getElementById('print-wrapper');
    // wrapper.style.display = 'block';
    // const cards  = document.getElementsByClassName('export-card');
    // let currH = 0;
    // let headerHeight = 20; // height of header in px
    // let maxH = 1123 - 40 - headerHeight;
    // maxH = height of pdf in pixels - 2 * vertical padding (20)
    //   for (let i = 0; i < cards.length; i++) {
    //     if (cards[i].clientHeight + currH < maxH) {
    //         currH += cards[i].clientHeight;
    //         console.log(cards[i].clientHeight);
    //         console.log(currH);
    //     } else {
    //         console.log('here');
    //         console.log(cards[i].clientHeight);
    //         console.log(cards[i].clientHeight + currH);
    //         if (i > 0) {
    //           cards[i - 1].style.height = `${maxH - currH + cards[i-1].clientHeight}px`
    //         }
    //         maxH += headerHeight;
    //         headerHeight = 0;
    //         currH = 0;
    //     }
    //     console.log(cards[i]);
    // }
    // input.style.display = 'none';

    // html2canvas(input)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'JPEG', 0, 0);
    //     // pdf.output('dataurlnewwindow');
    //     pdf.save("Your_Pain_Plan.pdf");
    //   })
    // ;

    // const pdf = new jsPDF();
    // pdf.html(input).then(() => {
    //   pdf.save('Your_Pain_Plan.pdf');
    // });
  };

  return (
    <div className="DownloadFunction">
      <Button onClick={onButtonClick}>
        <i
          className="fas fa-file-download fa-fw"
          style={{ color: 'white' }}
        ></i>{' '}
        Download
      </Button>
    </div>
  );
};

export default DownloadFunction;
