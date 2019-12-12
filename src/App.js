import React from "react";
import "./App.css";

import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <h1>The Source of All Truth</h1>
      {/* //Imbed video of N.O. in front of fire */}
      <Quote />
    </div>
  );
}

export default App;
