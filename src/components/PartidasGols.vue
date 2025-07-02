<template>
  <div style="margin-top: 60px">
    <h2>Partidas e Placares</h2>
    <span style="position: relative; bottom: 3px"
      >Pesquise o time que deseja visualizar as partidas e placares</span
    >
    <v-text-field
      label="Time"
      v-model="time"
      @keydown.enter="handleEnter"
    ></v-text-field>
    <table style="margin-top: 5px">
      <thead>
        <tr>
          <th>Time 1 (Casa)</th>
          <th>Gols (Time 1)</th>
          <th>Gols (Time 2)</th>
          <th>Time 2 (Fora)</th>
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
      time: '',
      partidas: [],
    };
  },
  methods: {
    handleEnter() {
      api.getPartidasGolsTime(this.time).then((response) => {
        this.partidas = response.data;
      });
    },
  },
  mounted() {
    api.getPartidasGols().then((response) => {
      this.partidas = response.data;
    });
  },
};
</script>
