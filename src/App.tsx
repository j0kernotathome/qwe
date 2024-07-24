import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDevices_Nav from './components/TopNavigation';
import MobileOnly_Nav from './components/BottomNavigation';
import Footer from './components/Footer';
// root Pages
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

// profile Pages
import ProfileHomePage from './pages/profile/ProfileHomePage';

const App: React.FC = () => {
    const [isBottomNavVisible, setIsBottomNavVisible] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsBottomNavVisible(true);
        } else {
            setIsBottomNavVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <AllDevices_Nav />
            <section id='gau-container' className='mt-20 w-screen min-h-screen lg:w-2/3 lg:mx-auto px-4 lg:px-0'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile" element={<ProfileHomePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </section>
            <Footer />
            {isBottomNavVisible && <MobileOnly_Nav />}
        </>
    );
};

export default App;
