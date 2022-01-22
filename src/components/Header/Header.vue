<template>
  <div class="header">
    <div class="header_section">
      <div class="header_scores">
        <span> Score : {{ $store.state.count }}  </span>
        <p v-if="$store.state.allScores.length > 0"> Meilleur score : {{ bestScore($store.state.allScores) }}</p>
        <a href="/allscores"> <button class="button_see_all_scores"> Voir tous mes scores </button> </a>
      </div>
      <h1 class="header_title"> Memory Game </h1>
      <div class="header_name">
          <p class="name"> Modifier mon nom : <input v-model="name" > </p>
          <h3 class="name"> Mon nom est : {{ $store.state.name }} </h3>
      </div>
    </div>
  </div>
  
</template>

<script>
import './styles.css';
import data from '/src/data.js';

export default {
  name: 'Header',
  data: data,
  computed:{
    name:{
        get: function(){ 
            return this.$store.state.name; 
        }, 
        set: function(newName){ 
            this.$store.commit('updateName',newName); 
        }
      }
    }, 
  methods: {
    bestScore(allScores) {
      const onlyScores = [];
      allScores.forEach(score => {
        onlyScores.push(score.score)        
      });
      return Math.min(...onlyScores)
    },
      
  }
}
  
</script>


