import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeUser from './components/WelcomeUser';
import SearchIA from './components/SearchIA';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <WelcomeUser userName="Tu Nombre" />
          <div className="mt-8">
            <SearchIA />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;