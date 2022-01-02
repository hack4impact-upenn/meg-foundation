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
import '../fonts/Brandon Text/BrandonText-Black.otf';
import '../fonts/Brandon Text/BrandonText-Regular.otf';
import '../fonts/Brandon Text/BrandonText-Medium.otf';

const screenWidth = window.screen.width;
var displayWidth = screenWidth < 1280 ? '320px' : '560px';
displayWidth = screenWidth > 1680 ? '560px' : displayWidth;

const Container = styled.div`
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  padding: 20px;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  align-items: center;
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
  @media screen and (max-width: 768px) {
    padding: 8px;
    width: auto;
    margin: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 430px;
  }
  @media screen and (min-width: 1216px) {
    width: 520px;
  }
  @media screen and (min-width: 1408px) {
    width: 560px;
  }
`;

const Button = styled.div`
  font-family: BrandonTextBlack;
  font-size: 14px;
  font-style: normal;
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

const Graphic = styled.img`
  margin-right: 20px;
  width: 200px;
  height: 200px;
`;

const Card = (props) => {
  const {
    title,
    descriptionShort,
    descriptionLong,
    added,
    handleClick,
    isExpanded,
  } = props;
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div
      className={screenWidth < 1280 ? '' : `is-pulled-left`}
      style={{
        marginBottom: '20px',
        marginLeft: '2px',
        marginRight: '10px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
      }}
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
              marginBottom: '20px',
            }}
          >
            <div>{title ? title : 'NEED TITLE'}</div>
            {added ? (
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
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '6px',
                  }}
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
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '6px',
                  }}
                />
                Add to Plan
              </Button>
            )}
          </div>
          <div
            style={{
              // height: expanded ? 'auto' : '100px',
              overflow: 'hidden',
              fontSize: '18px',
              color: '#585858',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontFamily: 'BrandonTextMedium',
            }}
          >
            <Graphic src={placeholder_image} />
            {descriptionShort ? descriptionShort : 'no description'}
          </div>
          {expanded && (
            <div
              style={{
                fontSize: '18px',
                color: '#585858',
                marginTop: '20px',
                fontFamily: 'BrandonTextMedium',
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
              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '15px',
                }}
              >
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
