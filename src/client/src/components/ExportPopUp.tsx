import React, { useState } from 'react';
//import ReactModal from 'react-modal';
import styled from 'styled-components';

const Button = styled.a`
  background: transparent;
  border-radius: 10px;
  background-color: rgba(26, 171, 184, 1);
  color: white;
  margin: 0 1em;
  padding: 0.5em 1em;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  &:hover {
    color: white;
  }
`;

function ExportPopUp(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <Button onClick={toggleModalIsOpen}>
        <i className="fas fa-file-download" style={{ color: 'white' }}></i>{' '}
        {props.title}
      </Button>
      {/* <ReactModal 
           isOpen={modalIsOpen}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={toggleModalIsOpen}>Close</button>
      </ReactModal> */}
    </div>
  );
}

export default ExportPopUp;
