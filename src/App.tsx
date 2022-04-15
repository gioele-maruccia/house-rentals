import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/scss/App.scss';
import Header from './elements/NavBar/Header';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { DevPage } from './pages/Dev';
import Home from "./pages/Home/Home";

const App = () => {
    const [navbarType, setNavbarType] = useState('dark' as 'dark' | 'light')
   

    return (
        <div>
        <BrowserRouter>
            <div className="App" style={{ height: '200vh'}}>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/home' element={<Home />} /> 
                    <Route path='/contact-us' element={<ContactUs />} /> 
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/DEV' element={<DevPage />} /> 
                </Routes>
            </div>
        </BrowserRouter>

        { /* Cards */ }
        { /* Footer */}
        </div>
    );
}

export default App;
