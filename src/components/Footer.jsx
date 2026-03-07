import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-brand">
                    <div className="logo">&lt;OC/&gt;</div>
                    <p className="footer-desc">Строим будущее бизнеса: автономные ИИ-офисы и вирусные цифровые аватары.</p>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">Соцсети</h4>
                    <div className="social-links">
                        <a href="https://instagram.com/oiboi.eth" target="_blank" rel="noreferrer">IG: @oiboi.eth</a>
                        <a href="https://instagram.com/gelodrip" target="_blank" rel="noreferrer">IG: @gelodrip</a>
                        <a href="https://tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
                        <a href="https://youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">Связь</h4>
                    <div className="social-links">
                        <a href="https://t.me/jcdrip" target="_blank" rel="noreferrer" className="neon-link">Telegram</a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer">X (Twitter)</a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Oleg Chsherbakov. Все права защищены.</p>
                <p className="sys-status">CИСТ.СТАТУС: <span className="status-ok">ONLINE</span></p>
            </div>
        </footer>
    );
}

export default Footer;
