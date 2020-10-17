import React from 'react';
import './Home.css';
import logo from '../logo.svg';

// import { Container } from './styles';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Simple Channnel
        </p>
        <a
          className="Home-link"
          href="/users"
          rel="noopener noreferrer"
        >
          Cadastro de Usuário
        </a>
      </header>
    </div>
    
  );
}

export default Home;