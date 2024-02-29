import { useState } from 'react';
import style from './Main.module.scss';
import logo from './assets/logo.png';

export default function Main() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSmoothScroll = (targetId: any) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            setMenuOpen(false); // Fechar o menu após clicar em um link
        }
    };

    return (
        <main>
            <div className={style.bgNav}>
                <div className={style.nav}>
                    <div className={style.menuIcon} onClick={toggleMenu}>
                        <div className={`${style.menuLine} ${menuOpen ? style.open : ''}`}></div>
                        <div className={`${style.menuLine} ${menuOpen ? style.open : ''}`}></div>
                        <div className={`${style.menuLine} ${menuOpen ? style.open : ''}`}></div>
                    </div>
                    <img src={logo} alt="Logo WestarbLog" className={style.logo} />
                </div>
                {menuOpen && (
                    <nav className={`${style.menu} ${menuOpen ? style.open : ''}`}>
                        <ul className={style.menuList}>
                            <li><a href="#" onClick={() => handleSmoothScroll("cotacao")}>Cotação</a></li>
                            <li><a href="#" onClick={() => handleSmoothScroll("rastreio")}>Rastrear Mercadoria</a></li>
                            <li><a href="#" onClick={() => handleSmoothScroll("localizacao")}>Localização</a></li>
                            <li><a href="#" onClick={() => handleSmoothScroll("servicos")}>Serviços</a></li>
                        </ul>
                    </nav>
                )}
            </div>
            <div className={style.bgPrincipal}>
                <nav className={style.titulo}>
                    <h1 className={style.titulo__h1}>Seja bem vindo à Westarblog!</h1>
                    <p className={style.titulo__p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illo, est porro distinctio quaerat quas quisquam reiciendis.</p>
                </nav>
            </div>
        </main>
    );
}
