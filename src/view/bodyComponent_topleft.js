import React from "react";
import "./bodyComponent.css";
import BodyComponent_topright from "./bodyComponent_topright";
export default class BodyComponent_topleft extends React.Component {
  constructor() {
    super();
    this.state = {
      showstatus: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.publish = this.publish.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    this.setState({ showstatus: true });
  }
  render() {
    return (
      <div className="BodyComponent_topleft">
        <div className="BodyComponent_topleft_input">
          <input
            name="txtvalue"
            placeholder="enter text"
            value={this.state.txtvalue}
            onChange={this.handleChange}
          />
          <div className="BodyComponent_topleft_btn">
            <button value="send" onClick={this.publish}>
              {" "}
              Enter{" "}
            </button>
          </div>
        </div>
        <BodyComponent_topright data={this.state.txtvalue} />
      </div>
    );
  }
}
