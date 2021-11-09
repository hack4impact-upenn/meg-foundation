import React, { useState } from 'react';
import styled from 'styled-components';
// import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';
import more_icon from '../images/show_more.png';
import less_icon from '../images/show_less.png';
import { boltzmannDependencies } from 'mathjs';

const screenWidth = window.screen.width;
var displayWidth = screenWidth < 1280 ? '90vw' : '28vw';
displayWidth = screenWidth > 1680 ? '24vw' : displayWidth;

const Container = styled.div`
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  width: ${displayWidth};
  padding: 20px;
  background-color: ${colors.PURPLE};
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
  font-family: Brandon Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
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

// const Avatar = styled.img`
//   display: inline;
//   width: 50px;
//   height: 50px;
//   background: white;
//   border-radius: 50%;
//   border: 2px solid white;
//   @media screen and (max-width: 768px) {
//     width: 45px;
//     height: 45px;
//   }
// `;

// const OrgName = styled.span`
//   display: block;
//   font-size: 20px;
//   font-weight: 500;
//   color: ${colors.YELLOW};
//   @media screen and (max-width: 768px) {
//     font-size: 18px;
//     font-weight: 50;
//   }
// `;

// const LearnMore = styled.span`
//   display: block;
//   font-size: 20px;
//   font-weight: 500;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   color: ${colors.YELLOW};
//   @media screen and (max-width: 768px) {
//     font-size: 16px;
//     font-weight: 50;
//   }
// `;

// const OrgCity = styled.span`
//   font-size: 14px;
//   font-weight: 500;
//   color: white;
//   @media screen and (max-width: 768px) {
//     font-size: 13px;
//     font-weight: 40;
//   }
// `;
// const OrgDescription = styled.p`
//   text-align: start;
//   color: white;
//   font-size: 12px;
//   margin-bottom: 12px;
//   @media screen and (max-width: 768px) {
//     font-size: 11px;
//   }
// `;

const Card = (props) => {
  const { title, description, handleClick } = props;
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
            <div>{title}</div>
            <Button style={{ fontSize: '14px' }}>+ Add to Plan</Button>
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
              height: expanded ? 'auto' : '100px',
              overflow: 'hidden',
              fontSize: '18px',
              color: '#585858',
            }}
          >
            {description}
          </div>
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
              <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <img src={less_icon} />
                <span> Show Less</span>{' '}
              </div>
            ) : (
              <div>
                <img src={more_icon} />
                <span> Show More</span>{' '}
              </div>
            )}
          </div>
          {/* <OrgDescription>{props.org.shortDescription}</OrgDescription> */}
        </div>
        {/* <SocialsList org={props.org} /> */}
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
