<template>
  <div class="header">
    <h1 class="header_title"> Memory Game </h1>
    <div class="header_scores">
      <div v-if="$store.state.allScores.length > 0">
        <span> Meilleur score : {{ Math.min(...$store.state.allScores) }}</span>
      </div>
      <span> Score : {{ $store.state.count }}  </span>
    </div>
      <p class="name"> Modifier mon nom : <input v-model="name" > </p>

      <h3 class="name"> Mon nom est : {{ $store.state.name }} </h3>

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
    /* updateName (e) {
      console.log('coucou')
      this.$store.commit('updateName', e.target.value)
      }, */
      
  }
}
  
</script>


