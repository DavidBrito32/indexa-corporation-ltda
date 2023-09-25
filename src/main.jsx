import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const Estilo =createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Estilo />
    <App />
  </React.StrictMode>,
)
