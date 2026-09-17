import React from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="app">
      <nav className="navbar">
        <button className="brand" onClick={() => navigate('/')}>MS<span>.</span></button>
        <div className="navlinks">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        <div><strong>Marwa Said<span>.</span></strong><p>Building ideas into useful digital experiences.</p></div>
        <p>© 2026 Marwa Said. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
