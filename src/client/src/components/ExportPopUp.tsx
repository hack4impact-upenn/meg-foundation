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

// Toggle components
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dbdbdb;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const RoundedSlider = styled(Slider)`
  border-radius: 34px;
  &:before {
    border-radius: 50%;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  & ${Input}:checked + ${Slider} {
    background-color: #1aabb8;
  }
  & ${Input}:focus + ${Slider} {
    box-shadow: 0 0 1px #1aabb8;
  }
  & ${Input}:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
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
    let val: string = inclDet ? 'fas fa-check-circle' : 'far fa-check-circle';
    document.getElementById('detailedToggle').setAttribute('className', val);
  }

  return (
    <div>
      <Button onClick={toggleModalIsOpen}>
        <i className="fas fa-share-square fa-fw" style={{ color: 'white' }}></i>{' '}
        {props.title}
      </Button>
      <ReactModal
        isOpen={modalIsOpen}
        style={customModalStyles}
        contentLabel="Export Modal"
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
              <h1 style={{ fontWeight: 'bold' }}>Export Your Plan</h1>
              <CancelButton onClick={toggleModalIsOpen}>
                <i
                  className="fas fa-times fa-fw"
                  style={{ color: 'white' }}
                ></i>{' '}
                Cancel
              </CancelButton>
            </div>
            <div>Download a summary of your plan</div>
          </div>

          {/* Doctor's copy */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
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
                Would you like to include a doctor's copy?
              </div>
              <div>
                <Switch>
                  <Input type="checkbox" />
                  <RoundedSlider></RoundedSlider>
                </Switch>
              </div>
            </div>
            <div
              style={{
                width: '600px',
              }}
            >
              The doctor’s copy is a Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eu justo eros. Nam vitae orci augue.
            </div>
          </div>

          {/* Detailed copy */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
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
                <Switch>
                  <Input type="checkbox" />
                  <RoundedSlider></RoundedSlider>
                </Switch>
              </div>
            </div>
            <div
              style={{
                width: '600px',
              }}
            >
              The detailed copy is a Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eu justo eros. Nam vitae orci augue.
            </div>
          </div>

          {/* Export Options */}
          <div style={{ fontWeight: 'bold', color: '#585858' }}>
            How would you like to receive your plan?
          </div>
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
            <Button onClick={toggleModalIsOpen}>
              <i
                className="fas fa-file-download fa-fw"
                style={{ color: 'white' }}
              ></i>{' '}
              Download
            </Button>
            <Button onClick={toggleModalIsOpen}>
              <i
                className="fas fa-envelope fa-fw"
                style={{ color: 'white' }}
              ></i>{' '}
              Email
            </Button>
            <Button onClick={toggleModalIsOpen}>
              <i
                className="fas fa-comment fa-fw"
                style={{ color: 'white' }}
              ></i>{' '}
              Text
            </Button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default ExportPopUp;
