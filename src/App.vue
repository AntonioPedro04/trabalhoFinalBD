<template>
  <div id="app">
    <div style="display: flex; align-items: center; flex-direction: column">
      <h1>DataFut</h1>
      <span>Campeonatos abordados: Brasileiro, Argentino, Chileno</span>
    </div>

    <PartidasLista />
    <JogadoresLista />
    <SubstituicaoLista />
    <FaixaGolLista />
    <EstadiosLista />
  </div>
</template>

<script>
import JogadoresLista from './components/JogadoresGols.vue';
import SubstituicaoLista from './components/JogadoresSubstituicao.vue';
import FaixaGolLista from './components/GolsPorTempo.vue';
import EstadiosLista from './components/EstadiosPorCampeonatoBr.vue';
import PartidasLista from './components/PartidasGols.vue';

export default {
  name: 'App',
  components: {
    JogadoresLista,
    SubstituicaoLista,
    FaixaGolLista,
    EstadiosLista,
    PartidasLista,
  },
};
</script>

<style>
body {
  font-family: 'Roboto';
  color: #3d3d3d;
  background-color: rgb(255, 250, 219);
}
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #808080;
}
th,
td {
  border: 1px solid rgba(204, 204, 204, 0.43);
  color: white;
  padding: 8px;
}
th {
  background-color: #2f2f2f;
}
</style>
