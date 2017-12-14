import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./view/header.js";
import BodyComponent from "./view/bodyComponent.js";
import Footer from "./view/footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BodyComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
