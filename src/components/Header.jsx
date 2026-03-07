import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">&lt;OC/&gt;</div>
                <nav className="nav-links">
                    <a href="#services">Услуги</a>
                    <a href="#cases">Кейсы</a>
                    <a href="#ai-production">Прайс</a>
                </nav>
                <a href="https://t.me/jcdrip" target="_blank" rel="noreferrer" className="cta-btn sm">
                    Обсудить проект
                </a>
            </div>
        </header>
    );
}

export default Header;
