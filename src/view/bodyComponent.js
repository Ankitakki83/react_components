import React from "react";
import "./bodyComponent.css";
import BodyComponent_topleft from "./bodyComponent_topleft.js";
import BodyComponent_topright from "./bodyComponent_topright.js";

export default class BodyComponent extends React.Component {
  render() {
    return (
      <div className="BodyComponent">
        <BodyComponent_topleft />
        <BodyComponent_topright />
      </div>
    );
  }
}
