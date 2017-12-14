import React from "react";
import "./bodyComponent.css";

export default class BodyComponent_topright extends React.Component {
  render() {
    return (
      <div className="BodyComponent_topright">
        <div>{this.props.data}</div>
      </div>
    );
  }
}
