import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './WebDevServices.css';

// Load videos from webdev-videos folder
const videoModules = import.meta.glob('../assets/webdev-videos/*.{mp4,webm,mov}', { eager: true });
const devVideos = Object.values(videoModules).map(module => module.default);

function WebDevServices() {
    const { t } = useLanguage();
    const defaultPlaceholder = "https://cdn.coverr.co/videos/coverr-a-man-working-on-his-laptop-in-a-coffee-shop-2679/1080p.mp4";
    const showcaseVideo = devVideos.length > 0 ? devVideos[0] : defaultPlaceholder;

    return (
        <section id="custom-dev" className="webdev-section">
            <div className="container">
                <div className="webdev-header">
                    <div className="badge proxy-badge">{t.webDev.badge}</div>
                    <h2 className="section-title">
                        {t.webDev.title} <span className="highlight">{t.webDev.titleHighlight}</span> {t.webDev.titleEnd}
                    </h2>
                    <p className="webdev-subtitle">
                        {t.webDev.subtitle} <span className="text-glow">{t.webDev.subtitleGlow}</span>.
                    </p>
                </div>

                <div className="webdev-content">
                    {/* Video Showcase Area */}
                    <div className="webdev-video-container">
                        <div className="video-wrapper">
                            <video src={showcaseVideo} autoPlay loop muted playsInline />
                            <div className="video-scanner"></div>
                        </div>
                    </div>

                    {/* Services List Area */}
                    <div className="webdev-services-list">
                        <div className="dev-service-card">
                            <div className="dev-service-icon">🌐</div>
                            <div className="dev-service-info">
                                <h3>{t.webDev.service1.title}</h3>
                                <p>{t.webDev.service1.desc}</p>
                                <span className="dev-price-tag">{t.webDev.priceFrom} 150 000 ₸</span>
                            </div>
                            <div className="card-border-gradient"></div>
                        </div>
                        <div className="dev-service-card">
                            <div className="dev-service-icon">🚀</div>
                            <div className="dev-service-info">
                                <h3>{t.webDev.service2.title}</h3>
                                <p>{t.webDev.service2.desc}</p>
                                <span className="dev-price-tag">{t.webDev.priceFrom} 100 000 ₸ {t.webDev.priceMonth}</span>
                            </div>
                            <div className="card-border-gradient"></div>
                        </div>
                        <div className="dev-service-card">
                            <div className="dev-service-icon">⚡</div>
                            <div className="dev-service-info">
                                <h3>{t.webDev.service3.title}</h3>
                                <p>{t.webDev.service3.desc}</p>
                                <span className="dev-price-tag">{t.webDev.priceFrom} 50 000 ₸</span>
                            </div>
                            <div className="card-border-gradient"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebDevServices;
