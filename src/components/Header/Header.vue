<template>
  <div class="header">
    <h1 class="header_title"> Memory Game </h1>
    <div class="header_scores">
      <div v-if="$store.state.allScores.length === 0">
        <span> Meilleur score : pas encore de partie finie </span>
      </div>
      <div v-if="$store.state.allScores.length > 0">
        <span> Meilleur score : {{ Math.min(...$store.state.allScores) }}</span>
      </div>
      <span> Score : {{ $store.state.count }}  </span>

    </div>
  </div>
  
</template>

<script>
import './styles.css';
import data from '/src/data.js';



export default {
  name: 'Header',
  data: data,
  }
</script>


