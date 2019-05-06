import styled, { keyframes } from 'styled-components';

export const LandingTeamText = styled.h1`
  font-family: Lato;
  font-size: 144px;
  line-height: 1.2;
  text-align: left;
  /* color: #ffffff; */
  animation: ${LandingTeamTextAnimation} 1.5s ease-in-out delay iteration-count direction fill-mode;
`;

const LandingTeamTextAnimation = keyframes`
  0% {
    display: none;

  }



  100% {

  }
`;
