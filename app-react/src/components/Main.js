import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

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
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault(); // previne submit
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();// tira espaços em branco do final e do comço da string

    if (!novaTarefa) return;
    if (tarefas.indexOf(novaTarefa) !== -1) return; // se tiver uma tarefa sendo passada igual a alguma do array, retorna a função

    const novasTarefas = [...tarefas]; // copia do array para uma const, não é recomendado mexer no estado em si direto

    if (index === -1) {
      this.setState({ // atualiza o setState com os novos valores do array tarefas. Note que aqui estamos alterando o valor do estado diretamente.
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa; // tarefas em tal indice tera o valor de novaTarefa (valor passado no handleEdit)

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index, // setando estado do index para o valor do index da tarefa selecionada
      novaTarefa: tarefas[index],
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1> Lista de Tarefas </h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            className="task"
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button className="btn" type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <spam>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </spam>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
