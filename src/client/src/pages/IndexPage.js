import { useQuery } from 'react-query';
import api from '../api';
import ExportPopUp from '../components/ExportPopUp.tsx';
import Card from '../components/Card.tsx';
import DualList from '../components/DualList.tsx';
import ExportPDF from '../components/ExportPDF.tsx';
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
      title: 'Speak Up:',
      added: false,
      descriptionShort:
        'You know yourself best. It is OK to tell providers what they can do to make you comfortable. Think about what you will need and be ready to spell it out for them. Practice it out loud to boost your confidence.      ',
      descriptionLong:
        'Why it works: Knowing our voice can be heard gives us power and control. Feeling like we can have some control over what happens decreases anxiety. \n \n The steps: Think about what you want to say. Medical providers aren’t mind readers and they don’t always know how to help you unless you tell them. No one wants you to have a bad experience, but only you can say what would help. \n \n Still feeling nervous? Practice in front of the mirror, with a friend, or by yourself in the car. Practicing decreases anxiety and increases confidence. \n What you can say: “Like a lot of people, I have a really hard time with needles, but there are some things that can help me. I would really appreciate it if you could (share your plan here)? “',
    },
    {
      id: 2,
      title: 'Card 2',
      added: false,
      descriptionShort: 'This is a short description',
      descriptionLong:
        'This is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long description',
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
      descriptionLong:
        'This is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long description',
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
      <div>
        <DualList cardData={testArray}></DualList>
      </div>
    </div>
  );
}

export default IndexPage;
