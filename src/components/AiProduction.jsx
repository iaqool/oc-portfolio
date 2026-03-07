import React from 'react';
import './AiProduction.css';

// Load videos from ai-production folder
const videoModules = import.meta.glob('../assets/ai-production/*.mp4', { eager: true });
const aiVideos = Object.values(videoModules).map(module => module.default);

// Load photos from ai-photos folder
const photoModules = import.meta.glob('../assets/ai-photos/*.{jpg,png,jpeg,webp}', { eager: true });
const aiPhotos = Object.values(photoModules).map(module => module.default);

function AiProduction() {
    const aiServices = [
        {
            title: "Предметная ИИ-съемка",
            desc: "Помещаем ваш товар (от косметики до техники) в любые, даже самые фантастические и дорогие локации. Идеально для маркетплейсов, каталогов и соцсетей.",
            price: "от 15 000 ₸",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
            )
        },
        {
            title: "Рекламные креативы под ключ",
            desc: "Генерация сочных макетов для баннеров, наружной рекламы, листовок и таргета, которые сразу пробивают баннерную слепоту.",
            price: "от 20 000 ₸",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            )
        },
        {
            title: "Съемка с виртуальными моделями",
            desc: "Эксклюзивное лицо для вашего бренда без кастингов: от стильной модели с гетерохромией для премиум-сегмента до K-pop персонажей.",
            price: "от 35 000 ₸",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            )
        }
    ];

    return (
        <section id="ai-production" className="ai-production-section">
            <div className="container">
                <div className="ai-production-header">
                    <div className="badge">Хит продаж</div>
                    <h2 className="section-title">
                        AI-Продакшен и <span className="highlight">Коммерческая Съемка</span>
                    </h2>
                    <p className="ai-production-subtitle">
                        Безупречный визуальный контент для вашего бренда в <span className="text-glow">10 раз быстрее и дешевле</span> классической съемки.
                    </p>
                </div>

                <div className="ai-services-grid">
                    {aiServices.map((service, index) => (
                        <div className="ai-service-card" key={index}>
                            <div className="ai-service-icon-wrapper">
                                {service.icon}
                            </div>
                            <div className="ai-service-content">
                                <h3 className="ai-service-title">{service.title}</h3>
                                <p className="ai-service-desc">{service.desc}</p>
                                <div className="ai-service-footer">
                                    <span className="ai-price" dangerouslySetInnerHTML={{ __html: service.price }}></span>
                                    <button className="ai-service-btn">→</button>
                                </div>
                            </div>
                            <div className="card-border-gradient"></div>
                        </div>
                    ))}
                </div>

                {/* Photo Portfolio Showcase */}
                {aiPhotos.length > 0 && (
                    <div className="ai-portfolio-showcase photo-showcase">
                        <h3 className="showcase-title matrix-title">ai_gen_i <span className="cursor-blink">_</span></h3>
                        <div className="carousel-container">
                            <div className="carousel-track">
                                {/* Double the photos to create infinite sliding effect */}
                                {[...aiPhotos, ...aiPhotos].map((imgSrc, index) => (
                                    <div className="carousel-item photo-item" key={index}>
                                        <img src={imgSrc} alt={`AI Photo sample ${index}`} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Showcase Marquee moved to bottom */}
                {aiVideos.length > 0 && (
                    <div className="ai-portfolio-showcase video-showcase">
                        <h3 className="showcase-title matrix-title">ai_gen_v <span className="cursor-blink">_</span></h3>
                        <div className="carousel-container">
                            <div className="carousel-track">
                                {/* Double the videos to create infinite sliding effect */}
                                {[...aiVideos, ...aiVideos].map((videoSrc, index) => (
                                    <div className="carousel-item video-item" key={index}>
                                        <video src={videoSrc} autoPlay loop muted playsInline preload="none" />
                                        <div className="carousel-item-overlay">
                                            <span>AI Video</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default AiProduction;
