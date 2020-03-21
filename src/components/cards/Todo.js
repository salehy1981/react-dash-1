import React from "react";

export default props => {
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        Tâches <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">Todo List</h3>
          <button className="btn btn-primary">Explorer</button>
        </div>
        <hr />

        {/* === Première card === */}
        <div className="overflow-auto">
          <div
            className="card p-4 d-flex bd-highlight"
            style={{
              border: 0,
              backgroundColor: "#004080",
              color: "white",
              borderRadius: 10
            }}
          >
            <div className="d-flex bd-highligh">
              <h4 className="bd-highlight w-100 font-weight-bold">
                Terminer ...
              </h4>
              <button
                className="btn"
                style={{
                  backgroundColor: "#07336E",
                  color: "white",
                  borderColor: "#1875F0"
                }}
              >
                Remplir
              </button>
            </div>
            <p className="d-flex">Some texte here .........</p>
            <span className="text-right">
              <i className="uil uil-clock-two" /> Mar. 21 Juin
            </span>
          </div>

          {/* === Deuxième card === */}

          <div
            className="card p-4 mt-2 d-flex bd-highlight"
            style={{
              border: 0,
              backgroundColor: "#508CC9",
              color: "white",
              borderRadius: 10
            }}
          >
            <div className="d-flex bd-highligh">
              <h4 className="bd-highlight w-100 font-weight-bold">
                Terminer ...
              </h4>
              <button
                className="btn"
                style={{
                  backgroundColor: "#07336E",
                  color: "white",
                  borderColor: "#1875F0"
                }}
              >
                Remplir
              </button>
            </div>
            <p className="d-flex">Some texte here .........</p>
            <span className="text-right">
              <i className="uil uil-clock-two" /> Mar. 24 Juin
            </span>
          </div>

          {/* === Troisième card === */}

          <div
            className="card p-4 mt-2 d-flex bd-highlight"
            style={{
              border: 0,
              backgroundColor: "#0C69C7",
              color: "white",
              borderRadius: 10
            }}
          >
            <div className="d-flex bd-highligh">
              <h4 className="bd-highlight w-100 font-weight-bold">
                Terminer ...
              </h4>
              <button
                className="btn"
                style={{
                  backgroundColor: "#07336E",
                  color: "white",
                  borderColor: "#1875F0"
                }}
              >
                Remplir
              </button>
            </div>
            <p className="d-flex">Some texte here .........</p>
            <span className="text-right">
              <i className="uil uil-clock-two" /> Mar. 27 Juin
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
