import './Cases.css';

function Cases() {
    const casesData = [
        {
            title: "Viral AI Content",
            stats: "18M+ & 5M+ views",
            desc: "Создание массового вирусного контента для TikTok и YouTube, используя генеративные AI инструменты нового поколения.",
            tags: ["Video Gen", "TikTok", "YouTube"]
        },
        {
            title: "AI Models & Avatars",
            stats: "Digital Influencers",
            desc: "Полный цикл разработки виртуальных инфлюенсеров: от концепции и стилизации (K-pop, Janis) до автоматизации постинга.",
            tags: ["Stable Diffusion", "Character AI", "Voices"]
        },
        {
            title: "Autonomous Systems",
            stats: "OpenClaw / AI Office",
            desc: "Внедрение мульти-агентных систем для полной автоматизации бизнес-процессов и создания автономных ИИ-сотрудников.",
            tags: ["LLM Agents", "OpenClaw", "Automation"]
        },
        {
            title: "AI in Development",
            stats: "Web3 & CV Apps",
            desc: "Использование моделей компьютерного зрения и интеграция сложной ИИ-логики со смарт-контрактами на блокчейне Solana.",
            tags: ["Computer Vision", "Solana", "Web3"]
        }
    ];

    return (
        <section id="cases" className="cases-section">
            <div className="container">
                <div className="section-header align-right">
                    <h2 className="section-title">Кейсы и Проекты<span className="cursor-blink">_</span></h2>
                    <div className="title-line"></div>
                </div>

                <div className="cases-grid">
                    {casesData.map((project, index) => (
                        <div className="case-card" key={index}>
                            <div className="case-content">
                                <div className="case-header">
                                    <h3 className="case-title">{project.title}</h3>
                                    <span className="case-highlight">{project.stats}</span>
                                </div>
                                <p className="case-desc">{project.desc}</p>
                                <div className="case-tags">
                                    {project.tags.map(tag => (
                                        <span className="badge" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="case-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cases;
