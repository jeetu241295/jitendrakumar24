import React from "react";
import LoginSection from "../LoginSection";

const App = props => {
  return (
    <div className="App">
      <LoginSection {...props} />
    </div>
  );
};

export default App;
