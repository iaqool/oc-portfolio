import { useLanguage } from '../context/LanguageContext';
import './Marquee.css';

function Marquee() {
    const { t } = useLanguage();

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span className="marquee-text">{t.marquee.text}</span>
                <span className="marquee-text">{t.marquee.text}</span>
                <span className="marquee-text">{t.marquee.text}</span>
            </div>
        </div>
    );
}

export default Marquee;
