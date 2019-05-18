import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
// import './index.css'
import "./index.scss";

class App extends Component {
  render() {
    return <h1 className="index">{this.getData("test")}</h1>;
  }

  getData(value: string) {
    return <span>{value}</span>;
  }
}

render(<App />, document.getElementById("root"));
