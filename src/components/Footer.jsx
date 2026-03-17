import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-brand">
                    <div className="logo">&lt;OC/&gt;</div>
                    <p className="footer-desc">{t.footer.desc}</p>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">{t.footer.socials}</h4>
                    <div className="social-links">
                        <a href="https://instagram.com/oiboi.eth" target="_blank" rel="noreferrer">IG: @oiboi.eth</a>
                        <a href="https://instagram.com/gelodrip" target="_blank" rel="noreferrer">IG: @gelodrip (Work)</a>
                        <a href="https://www.youtube.com/@oiboigelo" target="_blank" rel="noreferrer">YouTube</a>
                        <a href="https://www.twitch.tv/czebureg" target="_blank" rel="noreferrer">Twitch</a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">{t.footer.contact}</h4>
                    <div className="social-links">
                        <a href="https://t.me/jcdrip" target="_blank" rel="noreferrer" className="neon-link">Telegram: @jcdrip</a>
                        <a href="https://drive.google.com/file/d/1PyQjqA8ug_S9cn70pVK_xLcAER-B9XSM/view?usp=sharing" target="_blank" rel="noreferrer" className="cv-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            {t.footer.downloadCV}
                        </a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Oleg Chsherbakov. {t.footer.rights}</p>
                <p className="sys-status">{t.footer.status}: <span className="status-ok">ONLINE</span></p>
            </div>
        </footer>
    );
}

export default Footer;
