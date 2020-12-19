import styled from 'styled-components';

const PanelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img {
    max-width: 150px;
    width: 100%;
  }
`;

export default function Panel({ children }) {
  return <PanelDiv>{children}</PanelDiv>;
}
