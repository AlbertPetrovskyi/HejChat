import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { AppProvider } from './context/AppContext';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-icon"></div>
          <p>Loading Amogus...</p>
        </div>
      </div>
    );
  }

  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;