import React from "react";

export default props => {
  return (
    <>
      <div
        className="card p-4 shadow overflow-auto"
        style={{ border: 0, height: 200 }}
      >
        <h3 className="font-weight-bold">Etat d'avancement de votre dossier</h3>
        <hr />
        <div className="connected-steps container">
          <div className="step bg-primary" />
          <div className="connector" />
          <div className="step" />
          <div className="connector" />
          <div className="step" />
          <div className="connector" />
          <div className="step" />
          <div className="connector" />
          <div className="step" />
        </div>
        <div className="d-flex text-muted justify-content-between">
          <span id="textRotate" className="text-primary font-weight-bold">
            En cours de traitement
          </span>
          <span id="textRotate">Dossier incomplet</span>
          <span id="textRotate">Rendez-vous planifier</span>
          <span id="textRotate">Dossier rejeté</span>
          <span id="textRotate">Dossier validé</span>
        </div>
      </div>
    </>
  );
};
