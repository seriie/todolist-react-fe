import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { IsLoggedInProvider } from './components/context/IsLoggedIn.tsx';
import { ProfileProvider } from './components/context/Profile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IsLoggedInProvider>
      <ProfileProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProfileProvider>
    </IsLoggedInProvider>
  </StrictMode>,
)
