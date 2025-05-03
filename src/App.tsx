import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './routes/MainPage';
import Tabs from './components/layout/tabs/Tabs';
import Auth from './routes/auth';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className={`${!location.pathname.startsWith('/auth') && 'p-2'}`}>
        {!location.pathname.startsWith('/auth') && <Sidebar />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/task" element={<Tabs />} />
          <Route path='/auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}