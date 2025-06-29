<template>
  <div>
    <h2>Artilheiros</h2>
    <span>Listagem de gols por Jogadores em Campeonato</span>
    <table style="margin-top: 30px">
      <thead>
      <tr>
        <th>Time</th>
        <th>Jogador</th>
        <th>Gols</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(jogador, index) in jogadores" :key="index">
        <td>{{ jogador.time }}</td>
        <td>{{ jogador.jogador }}</td>
        <td>{{ jogador.gols }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'JogadoresLista',
  data() {
    return {
      jogadores: [],
    };
  },
  mounted() {
    api.getJogadoresPorGols().then(response => {
      this.jogadores = response.data;
    });
  },
};
</script>