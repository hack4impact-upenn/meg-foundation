import jsPDF from 'jspdf';
import styled from 'styled-components';

const Button = styled.div`
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #1aabb8;
  overflow: hidden;
  padding: 10px;
  background-color: #ffffff;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
  @media screen and (max-width: 768px) {
    padding: 8px;
    width: auto;
    margin: auto;
  }
`;

const App = () => {
  const onButtonClick = () => {
    const input = document.getElementById('card');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(input).then(() => {
      pdf.save('test.pdf');
    });
  };
  return (
    <div className="App">
      <Button onClick={onButtonClick}>PDF</Button>
    </div>
  );
};

export default App;
