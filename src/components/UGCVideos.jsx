import { useLanguage } from '../context/LanguageContext';
import './UGCVideos.css';

// Load videos from ugc-videos folder
const videoModules = import.meta.glob('../assets/ugc-videos/*.{mp4,webm,mov}', { eager: true });
const ugcVideos = Object.values(videoModules).map(module => module.default);

const UGCVideos = () => {
    const { t } = useLanguage();
    // If no local videos found, use placeholder array
    const videos = ugcVideos.length > 0 ? ugcVideos : [
        "https://cdn.coverr.co/videos/coverr-a-man-working-on-his-laptop-in-a-coffee-shop-2679/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-4481/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-a-person-working-on-a-laptop-9262/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-9310/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-a-person-working-on-a-laptop-9312/1080p.mp4"
    ];

    // Double the array for infinite scroll effect
    const carouselItems = [...videos, ...videos];

    return (
        <section className="ugc-section">
            <h2 className="section-title">
                <span className="glitch-text" data-text={t.ugc.title}>{t.ugc.title}</span>
                <span className="neon-text">{t.ugc.titleHighlight}</span>
            </h2>

            <div className="ugc-carousel-container">
                <div className="ugc-carousel-track">
                    {carouselItems.map((videoSrc, index) => (
                        <div key={index} className="ugc-card">
                            <video
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                                className="ugc-video"
                            />
                            <div className="ugc-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UGCVideos;
