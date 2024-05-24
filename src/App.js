import './App.css';
import Header from './Componants/Header';
import ServicePage from './Componants/Services/ServicePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
            <Header />
            {/* <main className="pt-16">
                <h2 className="text-xl font-semibold text-center">Welcome to my website!</h2>
                <ImageSlider />
                <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
                <AboutUsPage />
            </main> */}
            <ServicePage />
        </div>
  );
}

export default App;
