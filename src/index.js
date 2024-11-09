import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router";
import "./shared/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
