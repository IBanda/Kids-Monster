import { useContext } from 'react';
import styled from 'styled-components';
import { BodyContext } from '../App';

const EyeDiv = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    top: 25%;
    /* transform: translateY(-50%); */
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 25%;
    left: 20%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 10;
  }
`;

export default function Eye() {
  const { eyes } = useContext(BodyContext);
  return <EyeDiv className={eyes} />;
}
