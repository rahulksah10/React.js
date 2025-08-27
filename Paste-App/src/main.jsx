import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store.jsx'
import { Provider } from 'react-redux'
import Navbar from './component/Navbar.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Provider store={store}>
      <Navbar />
      <App />
       <Toaster />
    </Provider>
  </StrictMode>,
  </BrowserRouter>
)
