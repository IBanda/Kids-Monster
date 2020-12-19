import styled from 'styled-components';
import Ear from './Ear';
import Eye from './Eye';
import Mouth from './Mouth';
import Nose from './Nose';

const BodyDiv = styled.div`
  width: 500px;
  height: 550px;
  background-color: ${(props) => props.theme.body};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px 10px 0 0;
  box-shadow: 70px 90px 10px 20px rgba(0, 0, 0, 0.2),
    90px 90px 10px 20px rgba(0, 0, 0, 0.2);
  .monster {
    position: relative;
    padding-top: 50px;
    & > div {
      max-width: 320px;
      margin: auto;
    }
    .eye-wrapper {
      padding: 30px;
      display: flex;
      justify-content: space-between;
    }
    .nose-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    .ear-wrapper {
      max-width: 500px !important;
      width: 500px;
      padding: 0 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -50px;
    }
  }
`;

export default function Body() {
  return (
    <BodyDiv>
      <div className="monster">
        <div className="ear-wrapper">
          <Ear />
          <Ear />
        </div>
        <div className="eye-wrapper">
          <Eye />
          <Eye />
        </div>
        <div className="nose-wrapper">
          <Nose />
        </div>
        <div>
          <Mouth />
        </div>
      </div>
    </BodyDiv>
  );
}
