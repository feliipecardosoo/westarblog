import React, { useState } from 'react';
import fazerRequisicao from './API/Main'; 
import style from './Rastreio.module.scss'

export default function Rastreio() {
    const [inputValue, setInputValue] = useState(""); 
    const [response, setResponse] = useState<React.ReactNode>(""); // Alterando o tipo do estado para React.ReactNode

    const handleButtonClick = async () => {
        if (!inputValue) { 
            setResponse("Valor inválido."); 
            return; 
        }

        const result: any = await fazerRequisicao(inputValue); 
        if (Array.isArray(result) && result.length === 2) { // Verifica se o retorno é um array com dois elementos
            const [ocorrencia, dataAtualizacao] = result;
            const formattedResponse = (
                <div className={style.result}>
                    <p className={style.status}>Status da mercadoria:</p>
                    <p className={style.status}><span className={style.lower}>{ocorrencia}</span></p>
                    <p className={style.status}>Data da última atualização:</p>
                    <p className={style.status}><span className={style.lower}>{dataAtualizacao}</span></p>
                </div>
            );
            setResponse(formattedResponse);
        } else {
            setResponse(result || "Nenhuma resposta recebida."); 
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value); 
    };

    return (
        <div className={style.container}>
            <h1 className={style.container__h1}> Rastreie sua Mercadoria! </h1>
            <input type="text" placeholder='Digite a Chave de Acesso da CTE' value={inputValue} onChange={handleInputChange} className={style.container__input} />
            <button onClick={handleButtonClick} className={style.container__button}>
                Consultar
            </button>
            <div className={style.container__resposta}>
                {response}
            </div>
        </div>
    );
}
