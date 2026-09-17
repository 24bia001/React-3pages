import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home page">
      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Marwa Said.</span></h1>
          <h2>Web Developer & Designer</h2>
          <p className="lead">I create clean, modern and user-friendly digital experiences that turn ideas into practical websites and applications.</p>
          <div className="buttons">
            <button className="primary" onClick={() => navigate('/about')}>Explore About Me <b>→</b></button>
            <button className="secondary" onClick={() => navigate('/contact')}>Let's Talk</button>
          </div>
        </div>
        <div className="hero-card">
          <div className="orb"></div>
          <div className="code-card">
            <strong>CREATE.</strong>
            <strong>BUILD.</strong>
            <strong>GROW.</strong>
          </div>
        </div>
      </div>

      <div className="section-head">
        <div><p className="eyebrow">WHAT I DO</p><h2>Turning ideas into <span>digital experiences.</span></h2></div>
        <p>I enjoy combining development and design to make websites that are functional, responsive and easy to use.</p>
      </div>
      <div className="cards">
        <article><div className="icon">01</div><h3>Web Development</h3><p>Building responsive websites and applications using modern web technologies.</p></article>
        <article><div className="icon">02</div><h3>UI Design</h3><p>Creating clean interfaces with thoughtful layouts, typography and visual hierarchy.</p></article>
        <article><div className="icon">03</div><h3>Problem Solving</h3><p>Breaking real-world requirements into practical software solutions.</p></article>
      </div>
    </section>
  );
}

