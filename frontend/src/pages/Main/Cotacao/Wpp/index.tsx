import style from './wpp.module.scss'

export default function Button() {
    return(
        <a className={style.whatsapp} href="whatsapp://send?phone=48999684045&text=Olá,%20gostaria%20de%20falar%20com%20você" target="_blank">
            Chamar no WhatsApp
        </a>
    )
}