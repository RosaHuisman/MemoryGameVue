<template>
  <div class="allscores">
    <div v-for="element in this.$store.state.allScores" :key="element.dateTime" >
        <p> Score de {{ element.score }} points réalisé le {{ element.dateTime }} </p>
    </div>
    <p> TODO : Améliorer l'affichage de la date </p>

    <a href="/"> <button v-on:click="reinitializeGame()" class="button_back"> Retour au jeu </button> </a>
  </div>
</template>

<script>
import './styles.css';
import data from '/src/data.js'


export default {
  name: 'Card',
  data: data,
  methods: {
    reinitializeGame() {
      this.$store.commit('reinitializeGame')
    }
  }
}
</script> 
