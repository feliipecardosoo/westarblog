import React, { useState } from 'react';
import fazerRequisicao from './API/Main'; 
import style from './Rastreio.module.scss'

export default function MyComponent() {
    const [inputValue, setInputValue] = useState(""); 
    const [response, setResponse] = useState<string>(""); 

    const handleButtonClick = async () => {
        if (!inputValue) { 
            setResponse("Valor inválido."); 
            return; 
        }

        const result = await fazerRequisicao(inputValue); 
        setResponse(result || "Nenhuma resposta recebida."); 
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value); 
    };

    return (
        <div className={style.container}>
            <h1 className={style.container__h1}> Rastreie sua Mercadoria! </h1>
            <input type="text" placeholder='Digite a Chave de Acesso da CTE' value={inputValue} onChange={handleInputChange} className={style.container__input} />
            <button onClick={handleButtonClick} className={style.container__button}>
                Fazer Requisição
            </button>
            <div dangerouslySetInnerHTML={{ __html: response }} className={style.container__resposta}/>
        </div>
    );
}


