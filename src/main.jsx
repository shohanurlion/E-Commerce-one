import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContexApi } from './Componnets/Pages/ContexApi.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContexApi>
    <App />
  </ContexApi>,
)
