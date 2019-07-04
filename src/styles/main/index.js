import styled from 'styled-components';
import MainLandingCover from '../../assets/Main/IMAGE_Landing.jpg';
import { Link } from 'react-router-dom';

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
  animation: LandingItemsAnimation 2s ease-in-out 0.5s forwards;

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
  font-size: 112px;
  font-weight: bold;
`;

export const LandingContents = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  animation: LandingContentsAnimation 3.3s ease-in-out forwards;

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

export const LadingSubtitleText = styled.h2`
  font-size: 56px;
  font-weight: bold;
  margin-left: 5px;
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

export const Button = styled(Link)`
  width: 180px;
  height: 64px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingButtonContent = styled.p`
  font-size: 28px;
  line-height: 28px;
  margin: 0 auto;
`;
