import React, { useEffect } from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Initialize Materialize JavaScript in order to use Materialize Modals etc...
    M.AutoInit();
  });

  return <div className="App">Hello Anil</div>;
};

export default App;
