import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner';
import './index.css'
import App from './App.jsx'
import { AuthProivder } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProivder>
      <App />
      <Toaster richColors position="bottom-center" />
    </AuthProivder>
  </StrictMode>,
)
