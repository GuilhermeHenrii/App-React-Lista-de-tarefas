import React, { Component } from 'react';
import './Main.css';

import Tarefas from './tarefas';
import Form from './Form';

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

  // método nativo do react. Esse método "escuta" quando o componente é montado
  componentDidMount() {
    // pegando tarefas do localStorage
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    // retorna caso não encontre
    if (!tarefas) return;

    // atualiza o estado do array de tarefas com as tarefas do localStorage. Isto é, sempre que o componente for montado, as tarefas do local storage aparecerão na tela
    this.setState({ tarefas });
  }

  // método nativo do react. Esse método "escuta" quando o componente é atualizado
  componentDidUpdate(prevProps, prevState) {
    // prevProps: adereço anterior
    // prevState: estado anterior
    const { tarefas } = this.state;

    // se meu array de tarefas for exatamente igual a seu estado anterior (vazio), não faz nada
    if (tarefas === prevState.tarefas) return;

    // caso o seu estado mude (for adicionado alguma tarefa) execute:

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

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
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
