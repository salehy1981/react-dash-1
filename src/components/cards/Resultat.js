import React from "react";
import ChartResultat from "../charts/ChartResultat";
import Carousel from "nuka-carousel";

export default props => {
  function handleClick(e) {
    e.preventDefault();
    alert("explorer");
  }
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        Vos résultats <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">Résultats</h3>
          <button className="btn btn-primary" onClick={handleClick}>
            Explorer
          </button>
        </div>
        <hr />

        <div className="overflow-auto">
          <div className="row container">
            <div className="col-sm w-100 text-center">
              <h4 className="mb-4 display-4" style={{ fontSize: 30 }}>
                Carousel with some data
              </h4>
              <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                  <button onClick={previousSlide} className="btn">
                    <i className="uil uil-arrow-circle-left h1" />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button onClick={nextSlide} className="btn">
                    <i className="uil uil-arrow-circle-right h1" />
                  </button>
                )}
                style={{ width: 350, height: 300, padding: 0 }}
                className="text-center"
                autoplay={true}
                easing={"easeQuadInOut"}
              >
                <ChartResultat />
                <ChartResultat />
                <ChartResultat />
                <ChartResultat />
                <ChartResultat />
              </Carousel>
            </div>
          </div>
          <h4 className="text-center mt-3 font-weight-bold">
            Voeux de formations
          </h4>
          <span className="text-muted" style={{ fontSize: 12 }}>
            Généralement, on utilise un texte en faux latin (le texte ne veut
            rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
            donc de faire office de texte d'attente. L'avantage de le mettre en
            latin est que l'opérateur sait au premier coup d'oeil que la page
          </span>
        </div>
      </div>
    </>
  );
};
