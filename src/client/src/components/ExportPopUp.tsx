import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const Button = styled.a`
  background: transparent;
  border-radius: 50px;
  font-weight: bold;
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
  const [inclDoc, setInclDoc] = useState(true);
  const [inclDet, setInclDet] = useState(true);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  function handleClick() {
    setInclDet(!inclDet);
    console.log(inclDet);
    let val: string = inclDet ? 'fas fa-check-circle' : 'fa fa-check-circle';
    document.getElementById('detailedToggle').setAttribute('class', val);
  }

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
            width: '600px',
          }}
        >
          <h1 style={{ fontWeight: 'bold' }}>Export Your Plan</h1>
          <Button
            onClick={toggleModalIsOpen}
            style={{ fontSize: '14px', backgroundColor: '#ACACAC' }}
          >
            <i className="fas fa-times fa-fw" style={{ color: 'white' }}></i>{' '}
            Close
          </Button>
        </div>
        <div>Download a summary of your plan</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#585858',
            width: '600px',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>
            Would you like to include a detailed copy?
          </div>
          <div>
            <div onClick={handleClick}>
              <i
                id="detailedToggle"
                className="fas fa-check-circle"
                style={{ color: '#1aabb8' }}
              ></i>
            </div>
          </div>
        </div>
        <div style={{ fontWeight: 'bold' }}>
          How would you like to receive your plan?
        </div>
      </ReactModal>
    </div>
  );
}

export default ExportPopUp;
