import { useContext } from 'react';
import styled from 'styled-components';
import { BodyContext } from '../App';

const EarDiv = styled.div`
  height: 75px;
  width: 150px;
  background-color: ${(props) => props.theme.body};
  border-radius: 999px 999px 0 0;
  overflow: hidden;
  position: relative;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
  &::after {
    content: '';
    border-radius: 999px 999px 0 0;
    width: 130px;
    height: 75px;
    background-color: #eee;
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default function Ear() {
  const { ears } = useContext(BodyContext);
  return <EarDiv className={ears} />;
}
