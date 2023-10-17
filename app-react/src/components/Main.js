import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  // constructor(props) {
  // super(props);

  // this.state = {
  // novaTarefa: '',
  // };

  // setando o this do mudaInput para a classe Main
  // this.mudaInput = this.mudaInput.bind(this);

  state = {
    novaTarefa: '',
  };

  randleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <h1> Lista de Tarefas</h1>
        <form action="#">
          <input onChange={this.randleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
