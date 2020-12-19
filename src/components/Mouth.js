import { useContext } from 'react';
import styled from 'styled-components';
import { BodyContext } from '../App';

const MouthDiv = styled.div`
  height: 200px;
  width: 320px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  margin: 0 !important;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
  &::after {
    content: '';
    width: 280px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: -150px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #98acf8;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.12),
      -2px -2px 5px 1px rgba(0, 0, 0, 0.12);
  }
  .teeth {
    position: relative;
    z-index: 2;
    display: flex;
    width: 250px;
    margin: auto;
  }
`;
const Tooth = styled.div`
  width: 50px;
  height: 20px;
  background-color: #fff;
  border-radius: 0 0 999px 999px;
`;

export default function Mouth() {
  const { mouth } = useContext(BodyContext);
  return (
    <MouthDiv className={mouth}>
      <div className="teeth">
        <Tooth />
        <Tooth />
        <Tooth />
        <Tooth />
        <Tooth />
      </div>
    </MouthDiv>
  );
}
