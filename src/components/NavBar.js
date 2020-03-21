import React from "react";
import Image from "../images/fakeprofil.png";

export default props => {
  return (
    <div
      className="d-flex bd-highlight p-4 shadow"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="p-2 flex-grow-1 bd-highlight align-self-center">
        <img
          src="https://i.imgur.com/vy1lB2T.png"
          alt="logoestiam"
          style={{ height: 35 }}
        />
      </div>
      <div className="p-2 bd-highlight align-self-center">
        <i className="uil uil-bell h2" />
      </div>
      <div className="p-2 bd-highlight align-self-center">
        <img
          src={Image}
          alt="imageprofil"
          className="rounded-circle"
          style={{ height: 40, width: 40 }}
        />
      </div>
      <div className="p-2 bd-highlight align-self-center">
        <span className="text-muted">
          Michel Platini <i className="uil uil-angle-down" />
        </span>
      </div>
    </div>
  );
};
