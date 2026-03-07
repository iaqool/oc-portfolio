import './Marquee.css';

function Marquee() {
    const text = "// ВИРТУАЛЬНЫЕ ИНФЛЮЕНСЕРЫ // ИИ АВТОМАТИЗАЦИЯ // ЛИДОГЕНЕРАЦИЯ // WEB3 ПРИЛОЖЕНИЯ // КОМПЬЮТЕРНОЕ ЗРЕНИЕ // MULTI-AGENT СИСТЕМЫ // ";

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span className="marquee-text">{text}</span>
                <span className="marquee-text">{text}</span>
                <span className="marquee-text">{text}</span>
            </div>
        </div>
    );
}

export default Marquee;
