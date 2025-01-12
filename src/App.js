import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import SingleService from './pages/SingleService/SingleService';
import Contactus from './pages/Contact/Contactus';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]); // This will run whenever the pathname (URL) changes

  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:url" element={<SingleService />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:url" element={<SingleBlog />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
