import React from "react";

export default props => {
  return (
    <div
      className="card bg-primary p-4 shadow"
      style={{ border: 0, height: 200 }}
    >
      <h3 className="text-white">Bravo Michel, vous avez terminé !</h3>
      <hr />
      <p className="text-white" style={{ fontSize: 13 }}>
        Généralement, on utilise un texte en faux latin (le texte ne veut rien
        dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de
        faire office de texte
      </p>
    </div>
  );
};
