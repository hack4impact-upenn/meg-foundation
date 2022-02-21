import { before } from 'lodash';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import DownloadFunction from '../components/DownloadFunction.js';
import TextFunction from '../components/TextFunction.js';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../styles/phoneInput.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import axios from 'axios';

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

const ExportButton = styled(Button)`
  margin: 10px auto;
  top: 1rem;
  right: 30px;
  display: flex;
  width: fit-content;
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

const Error = styled.div`
  color: red;
  font-family: 'BrandonTextMedium';
`;

const Success = styled.div`
  text-align: right;
  color: #82b500;
  font-family: 'BrandonTextMedium';
  font-size: 1rem;
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

const TextInput = styled.input`
  width: 20rem;
  height: 3rem;
  display: block;
  border: none;
  padding: 0.625rem 0;
  border-bottom: solid 1px #2dabb7;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 96%,
    #2dabb7 4%
  );
  background-position: -20rem 0;
  background-size: 20rem 100%;
  background-repeat: no-repeat;
  filter: brightness(0.8);
  &:focus {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: #2dabb7;
      font-size: 0.75rem;
      transform: translateY(-1.25rem);
      visibility: visible !important;
    }
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneError, setPhoneError] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
    setSuccess(false);
  };

  const closeModal = () => {
    (document.getElementById('email-input') as HTMLInputElement).value = '';
    setPhoneNumber(null);
    setModalIsOpen(false);
    setSuccess(false);
  };

  const emailValidation = () => {
    const email = (document.getElementById('email-input') as HTMLInputElement)
      .value;
    if (!email) {
      setEmailError(false);
      return 0;
    }
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      setEmailError(true);
      return -1;
    }
    setEmailError(false);
    return email;
  };

  const phoneValidation = () => {
    if (!phoneNumber) {
      setPhoneError(false);
      return 0;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneError(true);
      return -1;
    }
    setPhoneError(false);
    return phoneNumber;
  };

  const handleSend = async () => {
    const p = phoneValidation();
    const e = emailValidation();

    if (p === -1 || e === -1 || (p === 0 && e == 0)) {
      setSuccess(false);
      return;
    }

    if (p != 0) {
      try {
        await axios.post('api/twilio/sendMessage', {
          url: '',
          recipient: p,
        });
      } catch (err) {
        setPhoneError(true);
        return;
      }
    }

    if (e != 0) {
      try {
        await axios.post('api/email/', {
          to: e,
          url: 'https://www.google.com/',
        });
      } catch (err) {
        setEmailError(true);
        return;
      }
    }
    setSuccess(true);
  };

  return (
    <div>
      <ExportButton onClick={toggleModalIsOpen}>
        <i className="fas fa-share-square fa-fw" style={{ color: 'white' }}></i>{' '}
        {props.title}
      </ExportButton>
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
            gap: '15px',
            padding: '5px',
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
                fontSize: '1.5rem',
                color: '#585858',
                width: '28rem',
              }}
            >
              <h1 style={{ fontWeight: 'bold' }}>Export Your Plan</h1>
              <CancelButton onClick={closeModal}>
                <i
                  className="fas fa-times fa-fw"
                  style={{ color: 'white' }}
                ></i>{' '}
                Cancel
              </CancelButton>
            </div>
            <div>Export a summary of your plan</div>
          </div>

          {/* Email the plan */}
          {emailError ? (
            <Error>The email you entered is invalid</Error>
          ) : (
            <br />
          )}
          <div>
            <TextInput type="email" placeholder="Email" id="email-input" />
          </div>

          {/* Text the plan */}
          {/* <div >
                <TextInput type="tel" placeholder='Phone Number' id="phone-input"/> 
              </div> */}
          {phoneError ? (
            <Error>The phone number you entered is invalid</Error>
          ) : (
            <br />
          )}
          <div style={{ width: '20rem' }}>
            <PhoneInput
              placeholder="Phone Number"
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          {success ? <Success>Plan Sent!</Success> : <br />}

          {/* Export Options */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#585858',
            }}
          >
            <DownloadFunction selectedCards={props.data} />
            <Button onClick={handleSend}>
              <i
                className="fas fa-share-square fa-fw"
                style={{ color: 'white' }}
              ></i>{' '}
              Send
            </Button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default ExportPopUp;
