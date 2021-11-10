import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const Button = styled.a`
  background: transparent;
  border-radius: 50px;
  font-weight: bold;
  background-color: #1aabb8;
  color: white;
  margin: 0 1em;
  padding: 0.5em 1em;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  &:hover {
    color: white;
  }
`;

const customModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(196, 196, 196, 0.25)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0px',
    background: '#FFFFFF',
    borderRadius: '10px',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
  },
};

function ExportPopUp(props) {
  let subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <Button onClick={toggleModalIsOpen}>
        <i
          className="fas fa-file-download fa-fw"
          style={{ color: 'white' }}
        ></i>{' '}
        {props.title}
      </Button>
      <ReactModal
        isOpen={modalIsOpen}
        style={customModalStyles}
        contentLabel="Export Modal"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '24px',
            color: '#585858',
            fontWeight: 'bold',
          }}
        >
          <h1>Export</h1>
          <Button onClick={toggleModalIsOpen} style={{ fontSize: '14px' }}>
            <i className="fas fa-times fa-fw" style={{ color: 'white' }}></i>{' '}
            Close
          </Button>
        </div>
        <div>I am a modal</div>
      </ReactModal>
    </div>
  );
}

export default ExportPopUp;
