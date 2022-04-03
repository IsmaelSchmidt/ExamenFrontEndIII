import React, { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <div className="historial">
        <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Historial;
