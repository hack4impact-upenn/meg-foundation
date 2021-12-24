import { before } from 'lodash';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

// *Styling*

// Rounded Button
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

const CancelButton = styled(Button)`
  background-color: #acacac;
  &:hover {
    background-color: #efefef;
    color: white;
  }
`;

const EmailButton = styled(Button)`
  top: 1rem;
  right: 0px;
`;

// Toggle components
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// Modal Styling
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

// *PopUp Component*

function EmailPopUp(props) {
  let subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inclDoc, setInclDoc] = useState(true);
  const [inclDet, setInclDet] = useState(true);
  const [targetEmail, setTargetEmail] = useState('');

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  function handleClick() {
    setInclDet(!inclDet);
    console.log(inclDet);
    let val: string = inclDet ? 'fas fa-check-circle' : 'far fa-check-circle';
    document.getElementById('detailedToggle').setAttribute('className', val);
  }

  const handleSubmit = () => {
    EmailFunction(targetEmail);
    setModalIsOpen(!modalIsOpen);
  };

  function EmailFunction(email) {
    var axios = require('axios');

    var data = JSON.stringify({
      targetEmail: email,
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/email',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <EmailButton onClick={toggleModalIsOpen}>
        <i className="fas fa-share-square fa-fw" style={{ color: 'white' }}></i>{' '}
        {props.title}
      </EmailButton>
      <ReactModal
        isOpen={modalIsOpen}
        style={customModalStyles}
        contentLabel="Email Modal"
      >
        {/* Vertical Stack of items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '40px',
            padding: '20px',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
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
              <h1 style={{ fontWeight: 'bold' }}>Email Your Plan</h1>
              <CancelButton onClick={toggleModalIsOpen}>
                <i
                  className="fas fa-times fa-fw"
                  style={{ color: 'white' }}
                ></i>{' '}
                Cancel
              </CancelButton>
            </div>
            <div>Send your plan to the following email</div>
          </div>

          {/* Export Options */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              color: '#585858',
              width: '600px',
            }}
          >
            <label>
              Email:
              <input
                type="text"
                value={targetEmail}
                onChange={(e) => setTargetEmail(e.target.value)}
              />
            </label>
            <EmailButton onClick={handleSubmit}>
              <i
                className="fas fa-share-square fa-fw"
                style={{ color: 'white' }}
              ></i>{' '}
              Send
            </EmailButton>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default EmailPopUp;
