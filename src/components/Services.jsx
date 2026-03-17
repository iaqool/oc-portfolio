import { useLanguage } from '../context/LanguageContext';
import './Services.css';

function Services() {
    const { t } = useLanguage();
    
    const servicesData = [
        {
            title: t.services.businessAI.title,
            desc: t.services.businessAI.desc,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            )
        },
        {
            title: t.services.aiContent.title,
            desc: t.services.aiContent.desc,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            )
        },
        {
            title: t.services.web3.title,
            desc: t.services.web3.desc,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            )
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.services.title}<span className="cursor-blink">_</span></h2>
                    <div className="title-line"></div>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-desc">{service.desc}</p>
                            <div className="card-glare"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
