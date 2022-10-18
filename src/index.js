import './index.module.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  Card, Counter, Grid, Header, Modal, Timeout, Toggle,
} from './Components/layout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grid>
      <Card>
        <Counter />
      </Card>
      <Card>
        <Toggle />
      </Card>
      <Card>
        <Modal />
      </Card>
      <Card>
        <Timeout />
      </Card>
      <Card>
        <h1>children</h1>
      </Card>
    </Grid>
    <Header />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
