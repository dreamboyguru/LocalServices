import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componants/Header';
import ServicePage from './Componants/Services/ServicePage';
import Vendors from './Componants/Services/Vendors';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
            <Header />
            <Routes>
              <Route path='/' element={<ServicePage />} />
              <Route path='/vendors' element={<Vendors />} />
            </Routes>
        </div>
  );
}

export default App;
