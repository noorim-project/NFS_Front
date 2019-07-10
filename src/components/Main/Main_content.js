import styled from 'styled-components';

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

export const FirstPageDiv = styled.div`
  
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
  margin-top:100px;
  border-top:3.5px solid black;
  margin-left:128px;
  border-collapse:collapse;
`
export const Content_tbody = styled.tbody`

`

export const Content_td = styled.td`
  font-family: NanumSquareB;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: center;
  color: #24252f;
  padding-left: ${props => props.left};
  text-align : ${props => props.align};
  padding:19px;
  border-top:1px solid black;
  border-bottom:1px solid black;
`
export const Content_th = styled.th`
  border-top:1px solid black;
  border-bottom:1px solid black;
  padding:19px;
`

export const Content_tr = styled.tr`
`