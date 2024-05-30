import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componants/Header';
import ServicePage from './Componants/Services/ServicePage';
import Vendors from './Componants/Services/Vendors'
import Dashboard from './Componants/Vendor/Dashboard';
import Test from './Componants/Vendor/Test';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
            <Header />
            <Routes>
              <Route path='services' element={<ServicePage />} />
              <Route path='vendors' element={<Vendors />} />
              <Route path="vendorDash" element={<Dashboard />} />
              <Route path='test' element={<Test />} />
            </Routes>
        </div>
  );
}

export default App;
