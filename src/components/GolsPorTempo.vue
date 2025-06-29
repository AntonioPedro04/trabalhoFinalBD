<template>
  <div style="margin-top: 60px">
    <h2>Gols por faixa de tempo</h2>
    <span>Listagem de frequência de gols por faixa de tempo</span>
    <table style="margin-top: 30px">
      <thead>
      <tr>
        <th>Faixa</th>
        <th>Gols</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(golFaixa, index) in GolsTempo" :key="index">
        <td>{{ golFaixa.faixa_tempo }}</td>
        <td>{{ golFaixa.gols }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'FaixaGolLista',
  data() {
    return {
      GolsTempo: [],
    };
  },
  mounted() {
    api.getGolsPorTempo().then(response => {
      this.GolsTempo = response.data;
    });
  },
};
</script>