import React, { useEffect, useState } from "react";
import { getCharacters } from "./actions/requests";

function App() {
  return (
    <div className="App">
      <button onClick ={getCharacters()}>Carregar personagens</button>
    </div>
  );
}

export default App;
