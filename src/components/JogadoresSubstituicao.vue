<template>
  <div style="margin-top: 60px">
    <h2>Maior Substituição</h2>
    <span>Listagem de Jogadores com maior número de substituições</span>
    <table style="margin-top: 30px">
      <thead>
      <tr>
        <th>Jogador</th>
        <th>Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(jogador, index) in substituicaoJogadores" :key="index">
        <td>{{ jogador.nome }}</td>
        <td>{{ jogador.totalSubstituicoes }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'SubstituicaoLista',
  data() {
    return {
      substituicaoJogadores: [],
    };
  },
  mounted() {
    api.getJogadoresPorSubstituicao().then(response => {
      this.substituicaoJogadores = response.data;
    });
  },
};
</script>