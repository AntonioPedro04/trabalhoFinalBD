import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export default {
    getJogadoresPorGols() {
        return api.get('/jogador/gols');
    },
    getJogadoresPorSubstituicao() {
        return api.get('/jogadores/substituicao');
    },
    getGolsPorTempo() {
        return api.get('/gols/tempo')
    },
    getEstadiosPorCampeonatoBr() {
        return api.get('/estadios/campeonato/brasil')
    },
    getPartidasGols(){
        return api.get('/partida/gols')
    }
};