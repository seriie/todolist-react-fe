import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './routes/MainPage';
import Tabs from './components/layout/tabs/Tabs';

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task" element={<Tabs />} />
      </Routes>
    </Router>
  )
}