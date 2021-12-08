import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from './CardList.tsx';
import ExportPopUp from './ExportPopUp.tsx';

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

  //need to implement a state that stores which cards are selected to be on the right.
  //if the card is selected, it should be on the right and not on the left
  //if the card is not selected, it should be on the left and not on the right

  return (
    <div>
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
      <Container onClick={() => setPlan(!plan)}>button</Container>

      {plan ? (
        <div
          style={{
            backgroundColor: '#C6EAED',
          }}
        >
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
            backgroundColor: '#F3F3F3',
          }}
        >
          <CardList
            data={data.filter((item) => !item.added)}
            handleClick={handleClick}
          />
        </div>
      )}

      {/* <div
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: '#F3F3F3',
        }}
      >
        <CardList
          data={data.filter((item) => !item.added)}
          handleClick={handleClick}
        />
      </div> */}

      {/* </div> */}
    </div>
  );
};

export default MobileList;
