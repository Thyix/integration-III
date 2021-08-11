import React from "react";
import "./Style.css";
import styled from "styled-components";

const ExempleDeContainer = styled.div`
  background-color: green;
  padding: 30px;
`;

const ExempleDeLabel = styled.h1`
  color: blue;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <div className="exemple-css">
          <h1>Style CSS Standard</h1>
        </div>

        <div style={{ backgroundColor: "blue", padding: 30 }}>
          <h1 style={{ color: "red" }}>Style Javascript</h1>
        </div>

        <ExempleDeContainer>
          <ExempleDeLabel>
            Style avec une librairie telle que Styled components
          </ExempleDeLabel>
        </ExempleDeContainer>
      </>
    );
  }
}

export default App;
