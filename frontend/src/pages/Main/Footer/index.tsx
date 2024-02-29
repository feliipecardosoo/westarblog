import style from './footer.module.scss'

export default function Footer() {
    return (
        <div className={style.container__main}>
            <div className={style.escritas}>
                <h1 className={style.escritas__h1}>Westarb Logistica</h1>
                <p className={style.escritas__p__2}>Forte em Logistica</p>
            </div>
            <div className={style.escritas__2}>
                <p className={style.escritas__p__2__principal}>Email:</p>
                <p className={style.escritas__p__2}>fabio@westarblog.com.br</p>
                <p className={style.escritas__p__2__principal}>Telefone:</p>
                <p className={style.escritas__p__2}>(48)99999-9999</p>
            </div>
        </div>
    )
}