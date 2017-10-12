import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return (
    <Wrap>
      <Title>{props.title}</Title>
      <Right>
        {React.createElement(props.component)}
      </Right>
    </Wrap>
  );
};

const Wrap = styled.div`
  width:100vw;
  height:10vh;
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;

  background: palevioletred;
  color: white;
`;

const Title = styled.div`
    font-size:36px;
    border: 2px solid palevioletred;
`

const Right = styled.div`
    border: 2px solid #4990E2;
`

export default Header;
