import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from './CardList.tsx';
import ExportPopUp from './ExportPopUp.tsx';
import ToggleButton from './ToggleButton.tsx';

const Container = styled.div`
  border-radius: 10px;
  height: 47px;
  overflow: hidden;
  width: 388px;
  padding: 20px;
  background: #00000010;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  align-items: center;
`;

const MobileList = (props) => {
  const [data, setData] = useState(props.cardData);
  const [plan, setPlan] = useState(false);

  const toggle = () => {
    setPlan(!plan);
  };

  //handleClick to change the status of the card
  const handleClick = (target) => {
    const id = target.id;
    const newData = data.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          added: !item.added,
        };
        return updatedItem;
      }
      return item;
    });

    setData(newData);
  };

  return (
    <div>
      {plan ? (
        <div
          style={{
            height: '100vh',
            backgroundColor: '#C6EAED',
          }}
        >
          <ToggleButton
            LeftTitle="Explore"
            RightTitle="Your Plan"
            toggle={toggle}
          ></ToggleButton>
          <div>
            <ExportPopUp title="Export" />
          </div>
          <CardList
            data={data.filter((item) => item.added)}
            handleClick={handleClick}
          />
        </div>
      ) : (
        <div
          style={{
            height: '100vh',
            backgroundColor: '#F3F3F3',
          }}
        >
          <ToggleButton
            LeftTitle="Explore"
            RightTitle="Your Plan"
            toggle={toggle}
          ></ToggleButton>
          <CardList
            data={data.filter((item) => !item.added)}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default MobileList;
