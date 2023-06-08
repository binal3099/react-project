import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './Container/Header/Header'
import Useeffect from './Component/Useeffect/Useeffect'
import Event from './Component/Event/Event'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header /> */}
    {/* <Useeffect /> */}
    <Event />
  </React.StrictMode>,
)
