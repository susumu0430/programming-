import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';

const codeInfo = {
  name: "susumu",
  age: 20,
}

const CodeContext = createContext(codeInfo)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CodeContext.Provider value={codeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</CodeContext.Provider>
  
);

export default codeInfo


reportWebVitals();
