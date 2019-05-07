import styled, { createGlobalStyle } from 'styled-components';

export const Component = styled.div`
  width: 1280px;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -640px;
`;

export const Container = styled.div`
  /* width: 100%;
  min-width: 1280px; */
  height: 100%;
`;

export default createGlobalStyle`
    /* css initialize */
    html, body {
    width: 100%;
    height: 100%;
    min-width: 1180px;
    font-family: Lato, 'Nanum Gothic Coding', sans-serif;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  input[type=password] {
    font-family: sans-serif;
  }
  input:focus{
    outline: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  a {
    &:link{
      color: #000;
      text-decoration: none;
    }
    &:visited{
      color: #000;
      text-decoration: none;
    }
  }
`;
