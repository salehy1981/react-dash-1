import React from "react";
import BlueCard from "./cards/BlueCard";
import EtatAvancement from "./cards/EtatAvancement";

export default props => {
  return (
    <>
      <span className="text-muted">
        Dashboard <i className="uil uil-angle-down" />
      </span>
      <h3 className="font-weight-bold mt-2">Vue d'ensemble</h3>
      <div className="row">
        <div className="col-sm">
          <BlueCard />
        </div>
        <div className="col-sm">
          <EtatAvancement />
        </div>
      </div>
    </>
  );
};
