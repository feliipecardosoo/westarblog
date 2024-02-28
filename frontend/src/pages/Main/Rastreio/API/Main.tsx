import axios from 'axios';

const url = "https://ssw.inf.br/api/trackingdanfe";

interface Payload {
    chave_nfe: string;
}

const headers = {
    "Content-Type": "application/json"
};

async function fazerRequisicao(chaveNfe: string) {
    const payload: Payload = {
        chave_nfe: chaveNfe
    };

    try {
        const response = await axios.post(url, payload, { headers });
        const array = response.data.documento.tracking;
        return array[array.length - 1].ocorrencia;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return "Chave não encontrada!";
        } else {
            console.error("Erro na requisição:", error.response ? error.response.status : error.message);
            return null;
        }
    }
}

export default fazerRequisicao;
