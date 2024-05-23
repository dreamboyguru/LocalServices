import './App.css';
import Header from './Componants/Header';

function App() {
  return (
    <div className="App min-h-screen bg-black text-white">
            <Header />
            <main className="p-4">
                <h2 className="text-xl font-semibold">Welcome to my website!</h2>
                <p>This is the main content area.</p>
            </main>
        </div>
  );
}

export default App;
