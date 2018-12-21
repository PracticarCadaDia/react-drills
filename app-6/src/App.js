import React, { Component } from "react";

import "./App.css";

import Bars from "./Bars.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["snickers", "milky way", "reeses", "whatchamacallit", "caramelo"],
      newBar: ""
    };
  }
  submitHandler = newBar => {
    this.state.list.push(newBar);
    this.setState({ newBar: "" });
  };
  render() {
    return (
      <div className="App">
        <div>
          <input
            onChange={e => {
              this.setState({ newBar: e.target.value });
            }}
            value={this.state.newBar}
            placeholder={"favorite bar?"}
          />
          <button onClick={() => this.submitHandler(this.state.newBar)}>
            Add Bar
          </button>
        </div>
        <Bars list={this.state.list} />
      </div>
    );
  }
}

export default App;
