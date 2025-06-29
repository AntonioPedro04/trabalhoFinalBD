<template>
  <div style="margin-top: 60px">
    <h2>Estádios pelo Campeonato Brasileiro</h2>
    <span>Listagem de estádios que deram palco a Jogos do Campeonato Brasileiro</span>
    <table style="margin-top: 30px">
      <thead>
      <tr>
        <th>Estádio</th>
        <th>Partidas</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(estadio, index) in estadios" :key="index">
        <td>{{ estadio.estadio }}</td>
        <td>{{ estadio.partidas }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'EstadiosLista',
  data() {
    return {
      estadios: [],
    };
  },
  mounted() {
    api.getEstadiosPorCampeonatoBr().then(response => {
      this.estadios = response.data;
    });
  },
};
</script>