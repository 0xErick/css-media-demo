import React from 'react'
import styled, {css} from "styled-components"


const Main = (props) => {
  return (
    <Wrap>
      {props.layout === "mobile"
        ? <MobileLayout>
          <Area first></Area>
          <Area second></Area>
          <Area third></Area>
        </MobileLayout>
        : null}

      {props.layout === "tablet"
        ? <TabletLayout>
          <MainArea></MainArea>
          <Sidebar></Sidebar>
        </TabletLayout>
        : null}
    </Wrap>
  );
};

const Wrap = styled.div`
  width:100vw;
  height:90vh;
  background: #D8D8D8;
  color:white;
`;

const MobileLayout = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
`
const TabletLayout = styled.div`
  width:100%;
  height:100%;
    display:flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
`

const Area = styled.div`
	border-radius: 6px;
  width:120px;
  height:60px;
	background: transparent;
	color: palevioletred;

	${props => props.first && css`
		background: #FC7D7D;
		color: white;
	`}
		${props => props.second && css`
		background: #FAC670;
		color: white;
	`}
		${props => props.third && css`
		background: #7CE3CC;
		color: white;
	`}
`;

const MainArea = styled.div`
   width:80vw;
   height:90vh;
   background: #F2F2F2;
`

const Sidebar = styled.div`
   width:20vw;
   height:90vh;
   background:#D8D8D8;
`

export default Main;
