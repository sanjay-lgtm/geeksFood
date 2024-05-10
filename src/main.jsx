import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Restaurant from './component/Resturent/Resturent.jsx'
import Header from './component/Header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Restaurant />
  </React.StrictMode>,
)
