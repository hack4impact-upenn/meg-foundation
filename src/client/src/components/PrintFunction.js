import jsPDF from 'jspdf';
import styled from 'styled-components';

import React, { useState } from 'react';
import ReactModal from 'react-modal';

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

const PrintFunction = () => {
  const onButtonClick = () => {
    const input = document.getElementById('card');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(input).then(() => {
      pdf.save('test.pdf');
    });
  };
  return (
    <div className="PrintFunction">
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

export default PrintFunction;
