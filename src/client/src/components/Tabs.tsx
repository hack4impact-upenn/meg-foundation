import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 47px;
  width: 388px;
  left: 21px;
  top: 85px;
  border-radius: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const TabContainer = styled.div`
  position: absolute;
  width: 179px;
  height: 37px;
  left: 26px;
  top: 90px;
  border-radius: 5px;
`;

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p>Explore</p>
      {/* First tab content will go here */}
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p>Your Plan</p>
      {/* First tab content will go here */}
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div className="Tabs">
      <Container></Container>
      {/* Tab nav */}
      <ul className="nav">
        <li>Explore</li>
        <li>Your Plan</li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};

export default Tabs;
