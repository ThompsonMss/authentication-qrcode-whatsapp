import styled, { keyframes } from "styled-components";

const RotateAnimation = keyframes`  
  to {
    transform: rotate(1turn);
   }
`;

export const Container = styled.div`

  animation: ${RotateAnimation} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
`