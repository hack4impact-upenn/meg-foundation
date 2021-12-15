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

const TextFunction = () => {
  const onButtonClick = () => {
    var http = require('follow-redirects').http;
    var fs = require('fs');
    var options = {
      method: 'POST',
      hostname: 'localhost',
      port: 5000,
      path: '/api/twilio/sendMessage',
      headers: {
        'Content-Type': 'application/json',
      },
      maxRedirects: 20,
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on('error', function (error) {
        console.error(error);
      });
    });

    var postData = JSON.stringify({
      content: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      sender: '+15628501176',
      recipient: '+14086637543',
    });

    req.write(postData);

    req.end();
  };
  return (
    <div>
      <Button onClick={onButtonClick}>
        <i className="fas fa-comment fa-fw" style={{ color: 'white' }}></i> Text
      </Button>
    </div>
  );
};

export default TextFunction;
