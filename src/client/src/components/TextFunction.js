import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

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

var axios = require('axios');
var data = JSON.stringify({
  content: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  sender: '+17404869699',
  recipient: '+14086637543',
});

var config = {
  method: 'post',
  url: 'http://localhost:5000/api/twilio/sendMessage',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

const TextFunction = () => {
  const onButtonClick = () => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="PrintFunction">
      <Button onClick={onButtonClick}>
        <i
          className="fas fa-file-download fa-fw"
          style={{ color: 'white' }}
        ></i>{' '}
        Text
      </Button>
    </div>
  );
};

export default TextFunction;
