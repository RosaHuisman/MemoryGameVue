<template>
  <div class="newgame">
      <button class="newgame_button" v-on:click="reset()" >Nouvelle partie</button>
  </div>
  
</template>


<script>
import Vue from 'vue'
import data from '/src/data.js'


export default {
  name: 'NewGame',
  data: data,

  methods: {
     reset() {
       console.log("coucou")
      this.cards.forEach((card) => {
          Vue.set(card, 'isReturned',false);
          Vue.set(card, 'isMatched',false);
          console.log(card.isMatched)
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.newgame_button {
    margin-top: 1.6rem;
    padding: 1.3rem 2rem;
    background-color: #9fc4ca;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;

}
</style>