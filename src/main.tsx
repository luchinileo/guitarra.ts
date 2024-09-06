import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
                                      // con este !   
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//no va hacer null este elemento existe con "!" con esto nos saca el error