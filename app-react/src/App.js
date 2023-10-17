// sempre que formos usar o jsx, devemos primeiro importar o react

import React from 'react';
import Main from './components/Main';
import './App.css'; // esse aquivo css irá estilizar o componente

// componente react
// um componente react não pode retornar mais de uma hierarquia de elementos.
// Nesse caso envelopei tudo em uma div e funciona.
// Se tiver outra div pai, retornará um erro
export default function App() {
  return <Main />;
}
