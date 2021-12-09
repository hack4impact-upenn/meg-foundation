import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from './CardList.tsx';

const ExportPDF = (props) => {
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
    <div id="card">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            display: 'flex',
            flex: 1,
            backgroundColor: '#C6EAED',
          }}
        >
          <CardList
            data={props.cardData.filter((item) => item.added)}
            handleClick={handleClick}
            side="right"
            title="Your Plan"
            isPdf={true}
            allExpanded={props.expanded}
          />
        </div>
      </div>
    </div>
  );
};

export default ExportPDF;
