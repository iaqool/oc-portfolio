import { useState, useEffect } from 'react';
import './Hero.css';
import profileImg0 from '../assets/profile.jpg';
import profileImg1 from '../assets/profile1.png';
import profileImg2 from '../assets/profile2.png';
import profileImg3 from '../assets/profile3.jpg';

const profileImages = [
    profileImg0,
    profileImg1,
    profileImg2,
    profileImg3
];

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                let nextIndex = prevIndex;
                while (nextIndex === prevIndex) {
                    nextIndex = Math.floor(Math.random() * profileImages.length);
                }
                return nextIndex;
            });
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const currentImg = profileImages[currentImageIndex];

    return (
        <section className="hero">
            <div className="hero-layout">
                <div className="hero-content">
                    <p className="status-badge">
                        <span className="dot"></span> Открыт для новых проектов
                    </p>

                    <div className="title-row">
                        <h1 className="glitch-title" data-text="Oleg Chsherbakov">
                            Oleg Chsherbakov
                        </h1>
                        <div className="title-socials">
                            <a href="https://instagram.com/oiboi.eth" target="_blank" rel="noreferrer" className="social-icon" title="Мой Инстаграм">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://instagram.com/gelodrip" target="_blank" rel="noreferrer" className="social-icon" title="Инста Мои Работы">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <span className="social-pointer">← мои работы тут</span>
                            <a href="https://www.youtube.com/@oiboigelo" target="_blank" rel="noreferrer" className="social-icon" title="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            </a>
                            <a href="https://www.twitch.tv/czebureg" target="_blank" rel="noreferrer" className="social-icon" title="Twitch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-2 9h-2v2h-2v-2h-2v2h-2v-2H9V7h10v4z"></path></svg>
                            </a>
                            <a href="https://t.me/jcdrip" target="_blank" rel="noreferrer" className="social-icon" title="Telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.63 6.4c-1.4.52-1.396 2.43.013 2.946l4.63 1.48 10.975-6.87c.39-.24.787.034.484.34l-8.627 7.915-.173 5.39c.677 0 .963-.3.963-.3l2.42-2.316 4.755 3.518c.854.473 1.62.245 1.874-.8l3.374-15.895c.34-1.48-1.076-2.355-2.036-1.923z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="titles-container">
                        <h2 className="hero-subtitle type-effect">
                            AI Fullstack Разработчик &amp; Архитектор Виртуальных Инфлюенсеров
                        </h2>
                        <h2 className="hero-subtitle neon-text">
                            Эксперт по ИИ Автоматизации и Интеграции
                        </h2>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="stat-value">18M+</span>
                            <span className="stat-label">Просмотров в TikTok</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">5M+</span>
                            <span className="stat-label">Просмотров на YouTube</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">60k+</span>
                            <span className="stat-label">Общая аудитория</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="https://t.me/jcdrip" target="_blank" rel="noreferrer" className="cta-btn large">
                            Обсудить проект
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="profile-glitch-container">
                        <div className="profile-glitch-effect" style={{ backgroundImage: `url(${currentImg})` }}></div>
                        <img src={currentImg} alt="Oleg Chsherbakov" className="profile-img main" />
                        <div className="profile-glitch-effect clone" style={{ backgroundImage: `url(${currentImg})` }}></div>
                        <div className="scanline"></div>
                        <div className="cyber-border top-left"></div>
                        <div className="cyber-border bottom-right"></div>
                    </div>
                </div>
            </div>

            <div className="hero-spline-bg">
                {/* Placeholder for 3D or abstract background element */}
                <div className="grid-overlay"></div>
            </div>
        </section>
    );
}

export default Hero;
