import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div id="Form">
        <h1 style={{ textAlign: "center" }}>Kalepu Omkar's Todo</h1>
        <form id="myForm">
          <section style={{ marginBottom: "8px" }}>
            <input
              type="text"
              refs="todo"
              placeholder="Todo"
              onChange={this.props.onTodoChange}
            />
            <input
              type="text"
              refs="desc"
              placeholder="Description"
              onChange={this.props.onDesChange}
            />
            <input type="date" refs="date" onChange={this.props.onDateChange} />
          </section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              style={{
                padding: "8px 1.5rem",
                background: "#fbb600",
                color: "#fff",
                cursor: "pointer",
              }}
              type="submit"
              value="+  Add Todo"
              onClick={this.props.onSubmit}
            />
            <input
              type="reset"
              value="Reset"
              style={{
                padding: "8px 1.5rem",
                background: "#fff",
                cursor: "pointer",
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
