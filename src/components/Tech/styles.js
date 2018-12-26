import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  margin: 40px 20px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  border: 1px solid hsla(0,0%,100%,.3);
  user-select: none;
  transition: all .2s ease;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`