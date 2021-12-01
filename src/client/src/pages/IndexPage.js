import { useQuery } from 'react-query';
import api from '../api';
import ExportPopUp from '../components/ExportPopUp.tsx';
import Card from '../components/Card.tsx';
import DualList from '../components/DualList.tsx';
import CardList from '../components/CardList.tsx';
// import DualList form '../components/DualList.tsx';

function IndexPage() {
  // Example API request with caching, fetch list of users.
  // See https://react-query.tanstack.com/ for documentation on react-query.
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      console.log(res);
      return res.data;
    })
  );

  //handleClick to change the status of the card
  // const handleClick = (array, id) => {
  //   array[id].added = !array[id].added;
  // };

  let testArray = [
    {
      id: 1,
      title: 'Card 1',
      added: true,
      descriptionShort: 'This is a short description. Please look. hahahaha',
      descriptionLong:
        'Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description Test Card 1 Description  Test Card 1 Description Test Card 1 Description Test Card 1 Description  Test Card 1 Description Test Card 1 Description Test Card 1 Description  Test Card 1 Description Test Card 1 Description Test Card 1 Description ',

      // call handleClick to change the status of the card
    },
    {
      id: 2,
      title: 'Card 2',
      added: false,
      descriptionShort: 'This is a short description. Please look. hahahaha',
      descriptionLong:
        'Test Card 2 Description Test Card 2 Description Test Card 2 Description Test Card 2 Description Test Card 2 DescriptionTest Card 2 Description',
    },
  ];

  //need to implement a state that stores which cards are selected to be on the right.
  //if the card is selected, it should be on the right and not on the left
  //if the card is not selected, it should be on the left and not on the right

  return (
    <div className="container center">
      <header className="hero">
        <div className="hero-body">
          <h1 className="title">Welcome to Meg Foundation!</h1>
        </div>
      </header>
      <div>
        <ExportPopUp title="Export" />
      </div>
    <div>
      <DualList cardData={testArray}></DualList>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        <p style={{ color: 'red' }}>An error occurred! {error}</p>
      ) : (
        <div className="is-flex is-flex-wrap-wrap">
          {data.result.map((user) => (
            <article key={user.id} className="box m-2">
              <p className="has-text-weight-bold">
                {user.firstName} {user.lastName}
              </p>
              <p>{user.email}</p>
            </article>
          ))}
        </div>
      )}
      <footer className="section">
        To be filled in with the actual app, soon! :)
      </footer>
    </div>
  );
}

export default IndexPage;
