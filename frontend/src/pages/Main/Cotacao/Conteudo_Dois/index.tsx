import style from './Conteudo_dois.module.scss'
import logo from './assets/wpp.png'

export default function Cotacao() {
    return (
        <div id="cotacao" className={style.container}>
            <div className={style.container__escrita}>
                <h1 className={style.h1}>Venha fazer uma Cotaçao conosco!</h1>
                <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>   
                <a className={style.whatsapp} href="whatsapp://send?phone=48984480413&text=Olá,%20gostaria%20de%20falar%20com%20você" target="_blank">
                    <img src={logo} alt="Logo wpp" className={style.whatsapp__img} />
                </a>     
        </div>
    )
}