import style from './Conteudo_um.module.scss'
import imagemUm from './assets/businessman-2108029_640 copy.jpg'

export default function Servicos() {
    return (
        <div className={style.conteudoMain}>
            <h4 className={style.conteudoMain__h4}>Alguns Serviços Disponiveis:</h4>

            <div className={style.main__servicos}>
                <div className={style.servicos}>
                    <h5 className={style.servicos__h5}> Lorem ipsum dolor </h5>
                    <p className={style.servicos__p}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam totam repudiandae blanditiis.</p>
                </div>
                <img src={imagemUm} alt="Imagem Logistica" className={style.main__servicos__img}/>
            </div>

            <div className={style.main__servicos}>
                <div className={style.servicos}>
                    <h5 className={style.servicos__h5}> Lorem ipsum dolor </h5>
                    <p className={style.servicos__p}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam totam repudiandae blanditiis.</p>
                </div>
                <img src={imagemUm} alt="Imagem Logistica" className={style.main__servicos__img}/>
            </div>

            <div className={style.main__servicos}>
                <div className={style.servicos}>
                    <h5 className={style.servicos__h5}> Lorem ipsum dolor </h5>
                    <p className={style.servicos__p}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam totam repudiandae blanditiis.</p>
                </div>
                <img src={imagemUm} alt="Imagem Logistica" className={style.main__servicos__img}/>
            </div>
        </div>
    )
}