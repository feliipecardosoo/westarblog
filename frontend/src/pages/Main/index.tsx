import { useState, useEffect, useRef } from 'react';
import style from './Main.module.scss';
import logo from './assets/logo.png';

export default function Main() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastClickedSection, setLastClickedSection] = useState("");
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef<HTMLDivElement>(null); // Definindo o tipo de ref

    useEffect(() => {
        const navElement = document.querySelector(`.${style.bgNav}`);
        if (navElement instanceof HTMLElement) {
            const navHeight = navElement.offsetHeight;
            setNavHeight(navHeight);
        }

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    const handleBodyClick = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) { // Tipo de guarda para navRef.current
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSmoothScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            if (targetId === 'nav') {
                setMenuOpen(false);
            }

            if (targetId === lastClickedSection) {
                setMenuOpen(true);
            } else {
                setMenuOpen(false);
            }

            setLastClickedSection(targetId);
        }
    };

    return (
        <main>
            <div className={style.bgNav} ref={navRef}>
                <div className={style.nav}>
                    <div className={style.menuIcon} onClick={toggleMenu}>
                        <div className={`${style.menuLine} ${menuOpen ? style.open : ''}`}></div>
                        <div className={`${style.menuLine} ${menuOpen ? style.open : ''}`}></div>
                        <div className={`${style.menuLine} ${menuOpen ? style.open : ''}`}></div>
                    </div>
                    <a onClick={() => handleSmoothScroll("nav")} className={style.link__Imagem}>
                        <img src={logo} alt="Logo WestarbLog"  className={style.logo}/>
                    </a>
                </div>
                {menuOpen && (
                    <nav className={`${style.menu} ${menuOpen ? style.open : ''}`}>
                        <ul className={style.menuList}>
                            <li><button onClick={() => handleSmoothScroll("servicos")}>Serviços</button></li>
                            <li><button onClick={() => handleSmoothScroll("cotacao")}>Cotação</button></li>
                            <li><button onClick={() => handleSmoothScroll("localizacao")}>Localização</button></li>
                            <li><button onClick={() => handleSmoothScroll("rastreio")}>Rastrear Mercadoria</button></li>
                        </ul>
                    </nav>
                )}
            </div>
            <div className={style.bgPrincipal}  id='nav'>
                <nav className={style.titulo}>
                    <h1 className={style.titulo__h1}>Seja bem vindo à Westarblog!</h1>
                    <p className={style.titulo__p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illo, est porro distinctio quaerat quas quisquam reiciendis.</p>
                </nav>
            </div>
        </main>
    );
}
