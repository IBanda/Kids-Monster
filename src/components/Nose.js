import { useContext } from 'react';
import styled from 'styled-components';
import { BodyContext } from '../App';

const NoseDiv = styled.div`
  width: 75px;
  height: 170px;
  background-color: #ffc333;
  border-radius: 999px;
  position: relative;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
  &::before {
    content: '';
    width: 70px;
    height: 70px;
    position: absolute;
    background-color: #ffc333;
    border-radius: 50%;
    bottom: 0px;
    left: -20px;
  }
  &::after {
    content: '';
    width: 70px;
    height: 70px;
    position: absolute;
    background-color: #ffc333;
    border-radius: 50%;
    bottom: 0px;
    right: -20px;
  }
`;

export default function Nose() {
  const { nose } = useContext(BodyContext);
  return <NoseDiv className={nose} />;
}
