import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 0px 0px 10px 10px;
  height: 58px;
  overflow: hidden;
  width: 80vw;
  background: #00000010;
  justify-content: center;
  margin: auto;
  margin-bottom: 10px;
  cursor: pointer;
  align-items: center;
`;

const InnerButton = styled.div`
  border-radius: 5px;
  width: 48%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

const ToggleButton = (props) => {
  const { LeftTitle, RightTitle, toggle } = props;

  const [right, setRight] = useState(false);

  const clickLeft = () => {
    if (right) {
      setRight(!right);
      toggle();
    }
  };

  const clickRight = () => {
    if (!right) {
      setRight(!right);
      toggle();
    }
  };

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          verticalAlign: 'middle',
          height: 'inherit',
          width: 'inherit',
        }}
      >
        <InnerButton
          onClick={() => clickLeft()}
          style={{
            background: right ? '' : '#FFFFFF',
          }}
        >
          {LeftTitle}
        </InnerButton>
        <InnerButton
          onClick={() => clickRight()}
          style={{
            background: right ? '#FFFFFF' : '',
          }}
        >
          {RightTitle}
        </InnerButton>
      </div>
    </Container>
  );
};
export default ToggleButton;
