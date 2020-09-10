import React from "react";
import CharactersList from "./components/CharactersList"
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <CharactersList/>
      <GlobalStyle />
    </div>
  );
}

export default App;
