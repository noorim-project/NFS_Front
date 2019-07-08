import styled, { createGlobalStyle } from 'styled-components';

export const Header_Content = styled.a`
  color:white;
  font-size:18px;
  width:5%;
  height:20px;
  text-align:center;
  margin-left:22px;
  :link{
    color:white;
  }
  :visited{
    color:white;
  }
`

export const Header_div = styled.div`
  margin-left:42%;
  margin-top:7vh;
  
`
export const Design_div = styled.div`
  width:2.5%;
  height:160px;
  background-color:#ff2f6f;
  top:36%;
  position:absolute;
`

export const Design_text = styled.p`
  font-family: NanumSquareEB;
  font-size: 40px;
  line-height: 1.7;
  text-align: left;
  color: #ffffff;
  max-width:30%;
  font-weight:bold;
  position:absolute;
  left:5%;
  top:36.5%;
`

export const Content_div = styled.div`
  width:100%;   
  height:100vh;
  top:100%;
  background-color:white;
  position:absolute;
`

export const Content_title = styled.p`
  font-family: NanumSquareB;
  font-size: 50px;
  text-align: center;
  color: #24252f;
  margin-top: 9%;
  font-weight:bold;
`

export const Content_table = styled.table`
  width:80%;
`