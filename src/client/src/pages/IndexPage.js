import { useQuery } from 'react-query';
import api from '../api';
import ExportPopUp from '../components/ExportPopUp.tsx';
import Card from '../components/Card.tsx';
import DualList from '../components/DualList.tsx';
import CardList from '../components/CardList.tsx';
import styled from 'styled-components';

function IndexPage() {
  // Example API request with caching, fetch list of users.
  // See https://react-query.tanstack.com/ for documentation on react-query.
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      console.log(res);
      return res.data;
    })
  );

  const header = styled.header`
    height: 20;
  `;

  //handleClick to change the status of the card
  // const handleClick = (array, id) => {
  //   array[id].added = !array[id].added;
  // };

  let testArray = [
    {
      id: 1,
      title: 'Card 1',
      added: true,
      descriptionShort: 'This is a short description. ',
      descriptionLong: 'This a long description.',
    },
    {
      id: 2,
      title: 'Card 2',
      added: false,
      descriptionShort: 'This is a short description',
      descriptionLong: 'This is a long description',
    },
    {
      id: 3,
      title: 'Card 3',
      added: false,
      descriptionShort: 'This is a short description',
      descriptionLong: 'This is a long description',
    },
    {
      id: 4,
      title: 'Card 4',
      added: false,
      descriptionShort: 'This is a short description',
      descriptionLong: 'This is a long description',
    },
  ];

  //need to implement a state that stores which cards are selected to be on the right.
  //if the card is selected, it should be on the right and not on the left
  //if the card is not selected, it should be on the left and not on the right

  return (
    <div className="container center">
      {/* <header className="hero">
        <div className="hero-body" style={{ padding: "2rem 1.5rem" }}>
          <h1 className="title">Welcome to Meg Foundation!</h1>
        </div>
      </header> */}
      {window.screen.width > 1280 ? (
        <div>
          <DualList cardData={testArray}></DualList>
        </div>
      ) : (
        <div>this is mobile view</div>
      )}
    </div>
  );
}

export default IndexPage;
