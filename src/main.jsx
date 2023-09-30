import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App.jsx'
import('preline');
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
