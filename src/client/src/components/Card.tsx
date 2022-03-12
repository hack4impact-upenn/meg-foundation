import React, { useState } from 'react';
import styled from 'styled-components';
import more_icon from '../images/show_more.png';
import less_icon from '../images/show_less.png';
import plus_icon from '../images/plus.png';
import minus_icon from '../images/minus.png';

import placeholder_image from '../images/placeholder.png';
import block_image from '../images/block_250x250.png';
import breathe_image from '../images/breathe_NOTEXT_250x250.png';
import connect_image from '../images/connect_250x250.png';
import distract_image from '../images/distract_250x250.png';
import faint_image from '../images/faint_250x250.png';
import filter_image from '../images/filter_250x250.png';
import reward_image from '../images/reward_250x250.png';
import speakup_image from '../images/speakup_250x250.png';
import touch_image from '../images/touch_250x250.png';

import '../fonts/Brandon Grotesque/Brandon_reg.otf';
import '../fonts/Brandon Grotesque/Brandon_med.otf';
import '../fonts/Brandon Grotesque/Brandon_blk.otf';
import '../fonts/Brandon Grotesque/Brandon_bld.otf';
import { filter } from 'mathjs';

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
  cursor: default;
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
  font-family: BrandonGrotesqueBlack;
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
  float: left;
`;

const Card = (props) => {
  const {
    title,
    descriptionShort,
    whyItWorks,
    steps,
    whatYouCanSay,
    added,
    handleClick,
    isExpanded,
  } = props;
  const [expanded, setExpanded] = useState(isExpanded);

  let descriptionShortText = descriptionShort;
  for (let i = 0; i < descriptionShortText.length; i++) {
    const curr = descriptionShortText[i];
    if (curr.url) {
      descriptionShortText[i] = <a href={curr.url}>{curr.text}</a>;
    }
  }

  let whyItWorksText = whyItWorks;
  if (whyItWorks) {
    for (let i = 0; i < whyItWorksText.length; i++) {
      const curr = whyItWorksText[i];
      if (curr.url) {
        whyItWorksText[i] = <a href={curr.url}>{curr.text}</a>;
      }
    }
  }

  let stepsText = steps;
  if (steps) {
    for (let i = 0; i < stepsText.length; i++) {
      const curr = stepsText[i];
      if (curr.url) {
        stepsText[i] = <a href={curr.url}>{curr.text}</a>;
      }
    }
  }

  let whatYouCanSayText = whatYouCanSay;
  if (whatYouCanSay) {
    for (let i = 0; i < whatYouCanSayText.length; i++) {
      const curr = whatYouCanSayText[i];
      if (curr.url) {
        whatYouCanSayText[i] = <a href={curr.url}>{curr.text}</a>;
      }
    }
  }

  let imageName = placeholder_image;
  if (title === 'Speak Up:') {
    imageName = speakup_image;
  } else if (title === 'Block:') {
    imageName = block_image;
  } else if (title === 'Distract:') {
    imageName = distract_image;
  } else if (title === 'Breathe:') {
    imageName = breathe_image;
  } else if (title === 'Connect:') {
    imageName = connect_image;
  } else if (title === 'Touch:') {
    imageName = touch_image;
  } else if (title === 'Filter:') {
    imageName = filter_image;
  } else if (title === 'Reward:') {
    imageName = reward_image;
  } else if (title === 'Feeling Faint?') {
    imageName = faint_image;
  }

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
      <Container>
        <div>
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
              overflow: 'hidden',
              fontSize: '18px',
              color: '#585858',
              // display: 'flex',
              // flexDirection: 'row',
              // alignItems: 'center',
              fontFamily: 'BrandonGrotesqueMedium',
              whiteSpace: 'pre-line',
            }}
          >
            <div>
              <Graphic src={imageName} />
            </div>
            {descriptionShortText ? (
              <div> {descriptionShortText}</div>
            ) : (
              'no description'
            )}
          </div>
          {expanded && (
            <div
              style={{
                fontSize: '18px',
                color: '#585858',
                marginTop: '20px',
                fontFamily: 'BrandonGrotesqueMedium',
                whiteSpace: 'pre-line',
              }}
            >
              {whyItWorksText ? (
                <div style={{ marginBottom: '10px' }}>
                  {' '}
                  <span style={{ fontFamily: `BrandonGrotesqueBold` }}>
                    Why it works:{' '}
                  </span>{' '}
                  {whyItWorksText}{' '}
                </div>
              ) : null}
              {stepsText ? (
                <div style={{ marginBottom: '10px' }}>
                  {' '}
                  <span style={{ fontFamily: `BrandonGrotesqueBold` }}>
                    The steps:{' '}
                  </span>{' '}
                  {stepsText}{' '}
                </div>
              ) : null}
              {whatYouCanSayText ? (
                <div style={{ marginBottom: '10px' }}>
                  {' '}
                  <span style={{ fontFamily: `BrandonGrotesqueBold` }}>
                    What you can say:{' '}
                  </span>{' '}
                  {whatYouCanSayText}{' '}
                </div>
              ) : null}
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
                  cursor: 'pointer',
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
                  cursor: 'pointer',
                }}
              >
                <img src={more_icon} />
                <span> Show More</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
