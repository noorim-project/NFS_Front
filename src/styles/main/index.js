import styled from 'styled-components';

import MainLandingCover from '../../assets/Main/IMAGE_Landing.jpg';
import { Component } from '../gloobalStlye';

// Landing Page
export const LandingComponent = styled.div`
  background-image: url('${MainLandingCover}');
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  color: #ffffff;
  overflow-y: hidden;
  overflow-x: hidden;

  .popUpCover {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    animation: openCover 0.2s ease forwards;

    @keyframes openCover {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.5;
      }
    }
  }
`;

export const LandingItems = styled.div`
  width: 1280px;
  height: 690px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  margin-top: -60px;
  opacity: 0;
  ${props =>
    props.isOpenLanding && 'animation: LandingItemsAnimation 2s ease-in-out 0.5s forwards'};
  ${props => props.isOpenLanding || 'opacity: 1'};
  ${props => props.isOpenLanding || 'margin-top: -345px'};

  @keyframes LandingItemsAnimation {
    0% {
      opacity: 0;
    }

    20% {
      opacity: 1;
    }

    26% {
      opacity: 1;
      margin-top: -60px;
    }

    100% {
      opacity: 1;
      margin-top: -345px;
    }
  }
`;

export const LandingTeamText = styled.h1`
  font-size: 108px;
  font-weight: bold;
`;

export const LadingSubtitleText = styled.h2`
  font-size: 52px;
  font-weight: bold;
  margin-left: 5px;
`;

export const LandingContents = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  ${props =>
    props.isOpenLanding && 'animation: LandingContentsAnimation 3.3s ease-in-out forwards'};
  ${props => props.isOpenLanding || 'opacity: 1'};

  @keyframes LandingContentsAnimation {
    0% {
      opacity: 0;
    }

    82% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const LandingMessage = styled.p`
  font-size: 36px;
  line-height: 1.13;
  margin-top: 70px;
`;

export const LandingButtonCover = styled.div`
  width: 580px;
  height: 64px;
  margin: 250px auto 0;
  display: flex;
`;

export const Button = styled.div`
  width: 180px;
  height: 64px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LandingButtonContent = styled.p`
  font-size: 28px;
  line-height: 28px;
  margin: 0 auto;
`;

// PopUp
export const PopUpComponent = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 12px;
  background-color: #fcfcfc;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -350px;
`;

export const PopUpPosition = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpWrapper = styled.div`
  width: 400px;
  height: 590px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .additionalContent {
    display: flex;
    margin: 20px 0 0 auto;
  }
`;

export const PopUpCloseButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const PopUpText = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  text-align: center;
  ${props => props.cursorPointer && 'cursor: pointer'};
  ${props => props.marginRight && `margin-right: ${props.marginRight}`};
  ${props => props.fontBold && 'font-weight: bold'};
`;

export const PopUpInputCover = styled.div`
  margin-top: ${props => props.marginTop};
  display: flex;
`;

export const PopUpInput = styled.input`
  width: ${props => (props.widthSize ? props.widthSize : '400px')};
  box-sizing: border-box;
  background: #fcfcfc;
  border: 0;
  border-bottom: 2px solid #000000;
  font-size: 18px;
  padding: 6px;
  color: #3e3e3e;
  margin-right: ${props => props.marginRight};

  &::placeholder {
    font-size: 18px;
    color: #8d8d8d;
  }
`;

export const Pagination = styled.div`
  height: 12px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 6px;
  background: ${props => (props.active ? '#6a6a6a' : '#c9c9c9')};
`;

export const PopUpButtonCover = styled.div`
  margin-top: auto;
`;

export const PopUpButton = styled.div`
  background: #000000;
  width: ${props => (props.small ? '80px' : '380px')};
  height: ${props => (props.small ? '28px' : '55px')};
  border-radius: 4px;
  margin: ${props => (props.small ? 'auto 0 3px' : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// MainPage
export const MainComponent = styled.div`
  background-color: #24252f;
  height: 100%;
  width: 100%;
`;

export const fComponent = styled(Component)``;
