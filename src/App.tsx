import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './assets/scss/App.scss';
import Header from './elements/Header';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { DevPage } from './pages/Dev';
import Home from "./pages/Home";

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <Routes>
                    <Route path='/home' element={<Home />} /> 
                    <Route path='/contact-us' element={<ContactUs />} /> 
                    <Route path='/about-us' element={<AboutUs />} /> 
                    
                    <Route path='/DEV' element={<DevPage />} /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
