import React, { useEffect } from "react";
import "./App.css";

// Components
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Initialize Materialize JavaScript in order to use Materialize Modals etc...
    M.AutoInit();
  });

  return (
    <>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </>
  );
};

export default App;
