import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import VueEnsemble from "./components/VueEnsemble";
import CardBellow from "./components/CardBellow";

import "./styles.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <VueEnsemble />
      </div>
      <div className="container mt-4 mb-4">
        <CardBellow />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
