import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import Nav from './pages/Main/index'
import Servicos from 'pages/Main/Conteudo_Um';
import Cotacao from 'pages/Main/Cotacao/Conteudo_Dois';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Nav />
      <Servicos />
      <Cotacao />
  </React.StrictMode>
);

