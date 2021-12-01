import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #ecf0f1;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 99;
`;

const AppContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppContainer;
