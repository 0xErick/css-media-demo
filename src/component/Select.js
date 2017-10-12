import React from 'react'
import styled from 'styled-components'

const Select = (props) => {
  return (
    <Wrap>
      右侧操作区域
    </Wrap>
  );
};

const Wrap = styled.div`
  width:90px;
  height:60px;
  font-size:24px;
  border-radius: 3px;
  color: white;
  border: 2px solid white;
`;

export default Select;
