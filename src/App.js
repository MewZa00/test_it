import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';


function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
