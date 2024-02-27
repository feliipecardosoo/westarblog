import style from './Main.module.scss'
import logo from './assets/logo.png'

export default function Main() {
    return(
        <main>
            <div className={style.bgNav}>
                <img src={logo} alt="Logo WestarbLog" className={style.logo}/>
            </div>
            <div className={style.bgPrincipal}>
                <nav className={style.titulo}>
                    <h1 className={style.titulo__h1}>Seja bem vindo à Westarblog!</h1>
                    <p className={style.titulo__p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illo, est porro distinctio quaerat quas quisquam reiciendis.</p>
                </nav>
            </div>
        </main>
    )
}