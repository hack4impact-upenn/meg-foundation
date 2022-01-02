import React, { useEffect, useState } from 'react';
import CardList from './CardList.tsx';
import ExportPopUp from './ExportPopUp.tsx';
import useQueryString from './useQueryString';
import qs from 'query-string';

const DualList = (props) => {
  const [data, setData] = useState(props.cardData);
  const [value, setValue] = useQueryString('plan', 0);
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

    // generate enumeration
    var num = 0;
    newData.forEach((element, i) => {
      if (element.added === true) {
        num = num + 2 ** i;
      }
    });
    console.log(num);

    setValue(num);
  };

  useEffect(() => {
    const parsed = qs.parse(location.search);
    console.log(parsed);
  }, []);

  //need to implement a state that stores which cards are selected to be on the right.
  //if the card is selected, it should be on the right and not on the left
  //if the card is not selected, it should be on the left and not on the right

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
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
            <ExportPopUp
              title="Export"
              data={data.filter((item) => item.added)}
            />
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
