import React from 'react'
import styled from "styled-components"

const CounterStyle = styled.div`
   width:1rem;
   background:${props => props.theme.secondary};
   color:#fff;
   height:1rem;
   border-radius:100px;
   display:flex;
   justify-content:center;
   align-item:center;
   cursor:pointer
`;


export const Counter = ({ inc, dec }) => {
   if (inc) {
      return <CounterStyle>+</CounterStyle>
   } else {
      return <CounterStyle>-</CounterStyle>
   }
}