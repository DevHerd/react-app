import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import { Header, Counter, Toggle, Modal, Timeout } from './Components/layout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <Toggle />
    <Modal />
    <Timeout />
    <Header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
