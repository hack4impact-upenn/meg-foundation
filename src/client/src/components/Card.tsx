import React, { useState } from 'react';
import styled from 'styled-components';
// import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';
import more_icon from '../images/show_more.png';
import less_icon from '../images/show_less.png';
import plus_icon from '../images/plus.png';
import minus_icon from '../images/minus.png';
import placeholder_image from '../images/placeholder.png';
import { boltzmannDependencies } from 'mathjs';
import { placeholder } from '@babel/types';
import '../fonts/Brandon Text/BrandonText-Regular.otf';

const screenWidth = window.screen.width;
var displayWidth = screenWidth < 1280 ? '320px' : '640px';
displayWidth = screenWidth > 1680 ? '640px' : displayWidth;

const Container = styled.div`
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  width: ${displayWidth};
  padding: 20px;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
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

const Button = styled.div`
  font-family: BrandonTextRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #e0ecbf;
  color: #82b500;
  overflow: hidden;
  padding: 10px;
  background-color: #e0ecbf;
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

const Titlebar = styled.div`
  padding: 0px;
  positon: relative;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoDiv = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    margin-left: 16px;
    margin-bottom: 6px;
  }
`;

const Card = (props) => {
  const {
    title,
    descriptionShort,
    descriptionLong,
    status,
    handleClick,
  } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={screenWidth < 1280 ? '' : `is-pulled-left`}
      style={{ marginBottom: '20px', marginLeft: '2px', marginRight: '10px' }}
    >
      <Container
      // onClick={() => handleClick()}
      >
        <div>
          {/* <Titlebar> */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '24px',
              color: '#585858',
              fontWeight: 'bold',
            }}
          >
            <div>{title ? title : 'NEED TITLE'}</div>
            {status === 'added' ? (
              <Button
                style={{
                  fontSize: '14px',
                  display: 'flex',
                  flexDirection: 'row',
                  height: '32px',
                  backgroundColor: '#FFD1CE',
                  color: '#FF453A',
                }}
                onClick={handleClick}
              >
                <img
                  src={minus_icon}
                  style={{ width: '16px', height: '16px', marginRight: '6px' }}
                />
                Remove
              </Button>
            ) : (
              <Button
                style={{
                  fontSize: '14px',
                  display: 'flex',
                  flexDirection: 'row',
                  height: '32px',
                }}
                onClick={handleClick}
              >
                <img
                  src={plus_icon}
                  style={{ width: '16px', height: '16px', marginRight: '6px' }}
                />
                Add to Plan
              </Button>
            )}

            {/* </Titlebar> */}
          </div>
          {/* <div
            style={{
              height: '2px',
              width: '75px',
              backgroundColor: '#82B500',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          /> */}
          <div
            style={{
              // height: expanded ? 'auto' : '100px',
              overflow: 'hidden',
              fontSize: '18px',
              color: '#585858',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <img
              src={placeholder_image}
              style={{ width: '230px', height: '230px', marginRight: '20px' }}
            />
            {descriptionShort ? descriptionShort : 'no description'}
          </div>
          {expanded && (
            <div
              style={{
                fontSize: '18px',
                color: '#585858',
                marginTop: '20px',
              }}
            >
              {descriptionLong}
            </div>
          )}
          <div
            onClick={() => setExpanded(!expanded)}
            style={{
              borderRadius: '0px 0px 10px 10px',
              display: 'flex',
              justifyContent: 'space-around',
              fontSize: '18px',
              fontWeight: 'bold',
              alignItems: 'center',
              color: '#ACACAC',
            }}
          >
            {expanded ? (
              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <img src={less_icon} />
                <span> Show Less</span>
              </div>
            ) : (
              <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <img src={more_icon} />
                <span> Show More</span>
              </div>
            )}
          </div>
        </div>
        <div className="is-pulled-left">
          <div style={{ display: 'relative' }}>
            {/* <LearnMore>Learn More</LearnMore> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
