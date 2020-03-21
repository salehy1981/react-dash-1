import React from "react";

export default props => {
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        Besoin d'aide? <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">Aide</h3>
          <button className="btn btn-primary">Explorer</button>
        </div>
        <hr />
        <div>
          <div className="text-center">
            <i
              className="uil uil-question-circle"
              id="logoHelp"
              style={{ color: "#1875F0", fontSize: 160 }}
            />
          </div>
          <h4 className="text-center font-weight-bold">Une question ?</h4>
          <span className="text-muted" style={{ fontSize: 12 }}>
            Généralement, on utilise un texte en faux latin (le texte ne veut
            rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
            donc de faire office de texte d'attente. L'avantage de le mettre en
            latin est que l'opérateur sait au premier coup d'oeil que la page.
          </span>
        </div>
      </div>
    </>
  );
};
