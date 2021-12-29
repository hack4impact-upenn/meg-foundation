import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card.tsx';

const screenWidth = window.screen.width;
var displayWidth = screenWidth < 1280 ? '360px' : '680px';
displayWidth = screenWidth > 1680 ? '680px' : displayWidth;

const Container = styled.div`
  border-radius: 10px;
  max-height: calc(100vh - 6.75rem);
  overflow-y: scroll;
  width: ${displayWidth};
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0px 0px;
    width: auto;
    margin: 0px;
    overflow-x: hidden;
  }
`;

const ContainerPDF = styled.div`
  border-radius: 10px;
  overflow-y: scroll;
  width: ${displayWidth};
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0px 0px;
    width: auto;
    margin: 0px;
    overflow-x: hidden;
  }
`;

const CardList = (props) => {
  const { data, handleClick, title, allExpanded } = props;

  const [renderedArray, setArray] = useState(data);

  //render list of Cards

  //handleClick method to pass to each card that will change the state of the cardlist by changing which cards are selected
  // const handleClick = (id) => {
  //   const newArray = renderedArray.map((card) => {
  //     if (card.id === id) {
  //       card.selected = !card.selected;
  //     }
  //     return card;
  //   });
  //   setArray(newArray);
  // };

  // const renderCards = () => {
  //   if (props.side === 'left') {
  //     return renderedArray.map((item, index) => {
  //       if (!item.added) {
  //         return (
  //           <Card
  //             key={index}
  //             title={item.title}
  //             descriptionShort={item.descriptionShort}
  //             descriptionLong={item.descriptionLong}
  //             added={item.added}
  //             handleClick={props.handleClick(item)}
  //           />
  //         );
  //       }
  //     });
  //   } else {
  //     return renderedArray.map((item, index) => {
  //       if (item.added) {
  //         return (
  //           <Card
  //             key={index}
  //             title={item.title}
  //             descriptionShort={item.descriptionShort}
  //             descriptionLong={item.descriptionLong}
  //             added={item.added}
  //             handleClick={props.handleClick(item)}
  //           />
  //         );
  //       }
  //     });
  //   }

  // };

  return (
    <div
      style={
        screenWidth < 1280 ? { display: 'flex', justifyContent: 'center' } : {}
      }
    >
      <header className="hero">
        <div className="hero-body" style={{ padding: '1rem 1.5rem' }}>
          <h1 className="title" style={{ fontSize: '1.5rem' }}>
            {title}
          </h1>
        </div>
      </header>
      <Container>
        {data.map((item, id) => (
          <Card
            key={id}
            title={item.title}
            descriptionShort={item.descriptionShort}
            descriptionLong={item.descriptionLong}
            added={item.added}
            handleClick={() => handleClick(item)}
            isExpanded={allExpanded}
          />
        ))}
      </Container>
    </div>
  );
};

export default CardList;
