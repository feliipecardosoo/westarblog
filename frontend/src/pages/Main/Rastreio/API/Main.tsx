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
        const respostaOcorrencia = obterRespostaOcorrencia(array);
        const dataOcorrencia = obterDataHoraEfetiva(array);
        const dataHoraFormatada = formatarDataHora(dataOcorrencia);

        const retorno = [
            respostaOcorrencia.trim(), // Remover espaços em branco no início e no final
            dataHoraFormatada
        ];

        return retorno;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return "Chave não encontrada!";
        } else {
            console.error("Erro na requisição:", error.response ? error.response.status : error.message);
            return null;
        }
    }
}

function obterRespostaOcorrencia(array: any[]) {
    let respostaOcorrencia = array[array.length - 1].ocorrencia;
    // Remover texto entre parênteses
    respostaOcorrencia = respostaOcorrencia.replace(/\([^()]*\)/g, '');
    return respostaOcorrencia;
}

function obterDataHoraEfetiva(array: any[]) {
    return array[array.length - 1].data_hora_efetiva;
}

function formatarDataHora(dataOcorrencia: string) {
    const dataHoraObjeto = new Date(dataOcorrencia);
    const dia = adicionarZero(dataHoraObjeto.getDate());
    const mes = adicionarZero(dataHoraObjeto.getMonth() + 1); // Mês é base 0, então adicionamos 1
    const ano = dataHoraObjeto.getFullYear();
    const hora = adicionarZero(dataHoraObjeto.getHours());
    const minuto = adicionarZero(dataHoraObjeto.getMinutes());
    return `${dia}-${mes}-${ano} ${hora}:${minuto}`;
}

function adicionarZero(valor: number) {
    return valor < 10 ? "0" + valor : valor;
}

export default fazerRequisicao;

