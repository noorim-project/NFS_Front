import styled from 'styled-components';
import MainLandingCover from '../../assets/Main/IMAGE_Landing.jpg';

export const LandingComponent = styled.div`
  background-image: url('${MainLandingCover}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1920px;
  height: 100%;
  color: #ffffff;
`;

export const LandingTeamText = styled.h1`
  font-size: 112px;
  line-height: 1.2;
  text-align: left;
  opacity: 0;
  position: absolute;
  top: 50%;
  animation: LandingTeamTextAnimation 3s ease-in-out 0.5s forwards;

  @keyframes LandingTeamTextAnimation {
    0% {
      opacity: 0;
      transform: translate(0, -50%);
    }

    20% {
      opacity: 1;
      transform: translate(0, -50%);
    }

    30% {
      opacity: 1;
      transform: translate(0, -50%);
    }

    100% {
      opacity: 1;
      transform: translate(0, -250%);
    }
  }
`;

export const LandingContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ;
`;

export const LadingSubtitleText = styled.h2`
  font-size: 56px;
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
`;
