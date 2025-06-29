<template>
  <div style="margin-top: 60px">
    <h2>Partidas e Placares</h2>
    <span>Listagem de partidas e resultados</span>
    <table style="margin-top: 30px">
      <thead>
      <tr>
        <th>Time 1</th>
        <th>Gols (Time 1)</th>
        <th>Gols (Time 2)</th>
        <th>Time 2</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(partida, index) in partidas" :key="index">
        <td>{{ partida.time_1 }}</td>
        <td>{{ partida.gols_1 }}</td>
        <td>{{ partida.gols_2 }}</td>
        <td>{{ partida.time_2 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'PartidasLista',
  data() {
    return {
      partidas: [],
    };
  },
  mounted() {
    api.getPartidasGols().then(response => {
      this.partidas = response.data;
    });
  },
};
</script>