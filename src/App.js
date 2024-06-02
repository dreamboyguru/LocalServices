import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componants/Header';
import ServicePage from './Componants/Services/ServicePage';
import Vendors from './Componants/Services/Vendors'
import Logout from './Componants/Logout';
import ImageSlider from './Componants/home/ImageSlider';

function App() {
  return (
    <div className="min-h-screen text-white">
            <Header />
            <Routes>
              <Route path='/' element={<ImageSlider />} />
              <Route path='services' element={<ServicePage />} />
              <Route path='vendors' element={<Vendors />} />
              <Route path='logout' element={<Logout />} />
              {/* <Route path='test' element={<Test />} /> */}
            </Routes>
        </div>
  );
}

export default App;
