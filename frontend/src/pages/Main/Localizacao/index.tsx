import style from './localizacao.module.scss'

export default function Localizacao() {
    return (
        <div id="localizacao" className={style.container}>
            <div className={style.container__content}>
                <p className={style.container__content__p}>Nossa Localizacao:</p>
            </div>
            <div className={style.container__maps}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.4910808105506!2d-48.6379638246833!3d-27.516198576292602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274d3a320fbb8f%3A0xc4baaac8194756dd!2sTransportadora%20Westarb-Log!5e0!3m2!1spt-BR!2sbr!4v1709129892018!5m2!1spt-BR!2sbr" style={{ width: '100%', height: '200px' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p className={style.endereco}>
                Servidão Osmar Pedro dos Santos - Morro da Bina, Biguaçu - SC, 88160-460
            </p>
        </div>
    );
}



