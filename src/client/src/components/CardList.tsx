import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card.tsx';

const screenWidth = window.screen.width;
var displayWidth = screenWidth < 1280 ? '100vw' : '30vw';
displayWidth = screenWidth > 1680 ? '26vw' : displayWidth;

const Container = styled.div`
  border-radius: 10px;
  max-height: 63vh;
  overflow-y: scroll;
  width: ${displayWidth};
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  position: absolute;
  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0px 0px;
    width: auto;
    margin: 0px;
    overflow-x: hidden;
  }
`;

const CardsList = (props) => {
  const { data } = props;

  const [renderedArray, setArray] = useState(data);

  //render list of Cards

  //handleClick method to pass to each card that will change the state of the cardlist by changing which cards are selected
  const handleClick = (id) => {
    const newArray = renderedArray.map((card) => {
      if (card.id === id) {
        card.selected = !card.selected;
      }
      return card;
    });
    setArray(newArray);
  };

  const renderCards = () => {
    return renderedArray.map((item, index) => {
      return (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          handleClick={handleClick}
        />
      );
    });
  };

  return (
    <div
      style={
        screenWidth < 1280 ? { display: 'flex', justifyContent: 'center' } : {}
      }
    >
      <Container>{renderCards()}</Container>
    </div>
  );
};

export default CardsList;
