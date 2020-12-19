import { createContext, useReducer, useState } from 'react';
import Body from './components/Body';
import styled, { ThemeProvider } from 'styled-components';
import PartsPanel from './components/PartsPanel';
import ColorPanel from './components/ColorPanel';

const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  .color-panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .reset-btn {
    cursor: pointer;
    width: 175px;
    height: 50px;
    font-weight: 600;
  }
`;

const parts = {
  ears: '',
  eyes: '',
  mouth: '',
  nose: '',
};
export const BodyContext = createContext(parts);

function reducer(state, action) {
  switch (action.part) {
    case 'ears':
      return { ...state, ears: 'visible' };
    case 'eyes':
      return { ...state, eyes: 'visible' };
    case 'mouth':
      return { ...state, mouth: 'visible' };
    case 'nose':
      return { ...state, nose: 'visible' };
    case 'reset':
      return parts;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, parts);
  const [body, setBody] = useState('#3c47d7');
  const handleClick = (event) => {
    dispatch({ part: event.target.closest('button').name });
  };
  const onColorChange = (event) => {
    setBody(event.target.closest('button').name);
  };
  return (
    <AppDiv>
      <div>
        <PartsPanel handleClick={handleClick} />
        <button
          className="reset-btn"
          onClick={() => dispatch({ part: 'reset' })}
        >
          reset
        </button>
      </div>
      <div>
        <ThemeProvider theme={{ body }}>
          <BodyContext.Provider value={state}>
            <Body />
          </BodyContext.Provider>
        </ThemeProvider>
      </div>
      <div className="color-panel">
        <ColorPanel handleClick={onColorChange} />
        <button className="reset-btn" onClick={() => setBody('#3c47d7')}>
          reset
        </button>
      </div>
    </AppDiv>
  );
}

export default App;
