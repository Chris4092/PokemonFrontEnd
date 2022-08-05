import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Move from "./components/Move";
import MoveList from "./components/MoveList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
