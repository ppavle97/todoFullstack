import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div className="border my-3 col-10 p-3">
        <div className="row col-12">
          <div className="col-1 d-flex justify-content-center align-items-center">
            <h1>{this.props.id}</h1>
          </div>
          <div className="col-11  text-left">
            <h2 className="font-weight-bold">{this.props.title}</h2>
            <p className="font-weight-light">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
