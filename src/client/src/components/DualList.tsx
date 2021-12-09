import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from './CardList.tsx';
import ExportPopUp from './ExportPopUp.tsx';

const DualList = (props) => {
  const [data, setData] = useState(props.cardData);

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          // width: '100vw'
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            backgroundColor: '#F3F3F3',
          }}
        >
          <CardList
            data={data.filter((item) => !item.added)}
            handleClick={handleClick}
            side="left"
            title="Explore Strategies"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            backgroundColor: '#C6EAED',
          }}
        >
          <div>
            <ExportPopUp title="Export" />
          </div>
          <CardList
            data={data.filter((item) => item.added)}
            handleClick={handleClick}
            side="right"
            title="Your Plan"
          />
        </div>
      </div>
    </div>
  );
};

export default DualList;
