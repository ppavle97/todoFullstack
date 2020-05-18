import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <div className="container">
        <div className=" col-12 mt-5 d-flex flex-column justify-content-center align-items-center ">
          {this.state.data.map((data) => {
            return (
              <Todo
                id={data.id}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
