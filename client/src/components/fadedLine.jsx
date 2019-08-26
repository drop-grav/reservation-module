import React from 'react'
import styled from 'styled-components'

const Faded = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
border-color: #DCDCDC;
border-style: solid;
border-bottom: 1px;
border-width: 1px;
`;

function FadedLine (props) {
  return (
    <Faded></Faded>
  )
}

export default FadedLine