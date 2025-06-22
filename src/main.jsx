import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/style.css' // ✅ Your CSS here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
