import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import Nav from './pages/Main/index'
import Servicos from 'pages/Main/Conteudo_Um';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Nav/>
      <Servicos/>
  </React.StrictMode>
);

