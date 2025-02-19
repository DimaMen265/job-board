import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Apply from './pages/apply';
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
