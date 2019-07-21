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
export const Design_squre = styled.div`
  position:absolute;
  width:183px;
  height:183px;
  background-color:${props => props.BackgroundColor};
  transform:rotate(45deg);
  left:${props => props.Left};
  top:${props => props.Top};
`
export const Design_bar = styled.div`
  position:absolute;
  background-color:white;
  transform:rotate(45deg);
  width:13px;
  height:1400px;
  left:586px;
  top:47px;
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
  min-height:1000px;
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
  width:60%;
  margin-top:100px;
  border-top:3.5px solid black;
  margin-left:20%;
  border-collapse:collapse;
  min-height : 500px;
`
export const Content_tbody = styled.tbody`

`

export const Content_td = styled.td`
  font-family: NanumSquareB;
  font-size: 20px;
  line-height: 1.15;
  color: #24252f;
  text-align : ${props => props.align ? props.align : "center"};
  padding:19px;
  border-top:1px solid black;
  border-bottom:1px solid black;
`
export const Content_th = styled.th`
  border-top:1px solid black;
  border-bottom:1px solid black;
  padding:19px;
  color:${props => props.color};
  font-size:${props => props.fontsize ? props.fontsize : "20px" };
`

export const TimeTableTh = styled(Content_th)`
  border:1px white solid;
  padding:${props => props.padding ? "0px" : "10px"};
  width:none;
`

export const TimeTableTd = styled(Content_td)`
  padding: 38px 22px 38px 22px;
  border:2px solid white;
  border-left:${props => props.border ? "2px solid #24252f" : "2px solid white"};
  border-right:${props => props.border ? "2px solid #24252f" : "2px solid white"};
  padding-top:38px;
  padding-bottom:38px;
  font-family: NanumSquareR;
  font-size: 26px;
  line-height: 1.15;
  text-align: center;
  color: #ffffff; 
  min-width:${ props => props.minwidth ? "50px" : "110px" };
  width:${props => props.width};
`
export const TimeTable = styled(Content_table)`
  position:absolute;
  top:200%;
  border:4px solid white;
  margin-top:300px;
  margin-left:15.5%;
`

export const ThirdPageDiv = styled.div`
`

export const ThirdPageTitle = styled.p`
  color:white;
  font-size:50px;
  top:200%;
  left:44%;
  margin-top:100px;
  position:absolute;
`

export const Content_tr = styled.tr`
`

export const MainFooterButton = styled.button`
  background-color:white;
  width:151px;
  height:54px;
  border:none;
  border-radius:5px;
  outline:none;
  display:flex;
  align-items:center;
`

export const MainFooterDiv = styled.div`
  position: absolute;
  width: 100%;
  top:340%;
  div:nth-child(1) {
    display:flex;
    justify-content:space-around;
  }
`

export const MainFooterButtonImg = styled.img`
  height:29px;
  margin-left:20px;
  `

export const MainFooterButtonSpan = styled.span`
  width:60px;
  text-align:center;
  margin-left:10px;
  font-size:16px;
  font-family:Lato;
`