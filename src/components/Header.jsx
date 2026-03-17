import { useLanguage } from '../context/LanguageContext';
import './Header.css';

function Header() {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">&lt;OC/&gt;</div>
                <nav className="nav-links">
                    <a href="#services">{t.nav.services}</a>
                    <a href="#cases">{t.nav.cases}</a>
                    <a href="#ai-production">{t.nav.price}</a>
                </nav>
                <div className="header-actions">
                    <button className="lang-toggle" onClick={toggleLanguage} title="Switch Language">
                        {language === 'ru' ? 'EN' : 'RU'}
                    </button>
                    <a href="https://t.me/jcdrip" target="_blank" rel="noreferrer" className="cta-btn sm">
                        {t.nav.discuss}
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
