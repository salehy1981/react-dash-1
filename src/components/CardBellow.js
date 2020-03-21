import React from "react";
import Todo from "./cards/Todo.js";
import Resultat from "./cards/Resultat.js";
import Aide from "./cards/Aide.js";

export default props => {
  return (
    <div className="row">
      <div className="col-sm">
        <Todo />
      </div>
      <div className="col-sm">
        <Resultat />
      </div>
      <div className="col-sm">
        <Aide />
      </div>
    </div>
  );
};
