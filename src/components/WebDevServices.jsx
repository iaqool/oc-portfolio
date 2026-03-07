import React from 'react';
import './WebDevServices.css';

// Load videos from webdev-videos folder
const videoModules = import.meta.glob('../assets/webdev-videos/*.{mp4,webm,mov}', { eager: true });
const devVideos = Object.values(videoModules).map(module => module.default);

function WebDevServices() {
    const defaultPlaceholder = "https://cdn.coverr.co/videos/coverr-a-man-working-on-his-laptop-in-a-coffee-shop-2679/1080p.mp4";
    const showcaseVideo = devVideos.length > 0 ? devVideos[0] : defaultPlaceholder;

    return (
        <section id="custom-dev" className="webdev-section">
            <div className="container">
                <div className="webdev-header">
                    <div className="badge proxy-badge">Custom Dev & SEO</div>
                    <h2 className="section-title">
                        Разработка <span className="highlight">Сайтов</span> и Продвижение
                    </h2>
                    <p className="webdev-subtitle">
                        От лендингов с высокой конверсией до сложных веб-приложений. Делаем так, чтобы ваш сайт <span className="text-glow">работал на вас</span>.
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
                                <h3>Web-разработка под ключ</h3>
                                <p>Создаем современные, быстрые и адаптивные сайты. Landing Page, корпоративные порталы, интернет-магазины.</p>
                                <span className="dev-price-tag">от 150 000 ₸</span>
                            </div>
                            <div className="card-border-gradient"></div>
                        </div>
                        <div className="dev-service-card">
                            <div className="dev-service-icon">🚀</div>
                            <div className="dev-service-info">
                                <h3>SEO Оптимизация</h3>
                                <p>Выводим сайты в ТОП поисковиков. Техническая оптимизация, сбор семантики, работа с поведенческими факторами.</p>
                                <span className="dev-price-tag">от 100 000 ₸ / мес</span>
                            </div>
                            <div className="card-border-gradient"></div>
                        </div>
                        <div className="dev-service-card">
                            <div className="dev-service-icon">⚡</div>
                            <div className="dev-service-info">
                                <h3>Ускорение и Техподдержка</h3>
                                <p>Оптимизируем загрузку, исправляем баги, переносим на быстрые сервера. Полная поддержка вашего проекта.</p>
                                <span className="dev-price-tag">от 50 000 ₸</span>
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
