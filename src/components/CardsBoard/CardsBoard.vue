<template>
  <div class="cardsboard">
    
      <h3 v-if=" !this.gameRunning && this.finish && this.$store.state.count > 16"> Bravo, tu as fini la partie avec un score de : {{ $store.state.count }} points. Essaie d'améliorer ce score ! </h3>
       <h3 v-if=" !this.gameRunning && this.finish && this.$store.state.count === 16 "> Bravo, tu es un chef, j'ai rien à dire.  </h3>

    <div v-if=" !this.gameRunning || this.finish ">
      <button class="newgame_button" v-on:click="newGame()"> Nouvelle partie </button>
    </div>  
       <div v-if="this.setNewGame && !this.finish" class="cards">
            <div v-for="card in memoryCards" :key="card" v-on:click="returnCard(card)" >
                <Card :card = 'card' :cards = 'cards' />
            </div>
       </div>
     
  </div>
  
</template>


<script>
import './styles.css';
import Card from '@/components/CardsBoard/Card/Card.vue';
import data from '/src/data.js'
import Vue from 'vue'


export default {
  name: 'CardsBoard',
  components: {
    Card
  },
  data: data,
  methods: {
    newGame() {
      this.finish = false;
      this.gameRunning = true;
      this.setNewGame = true;
      this.memoryCards = [];
      
      this.$store.commit('returnToZero')
        
      this.cards.forEach((card) => {
          Vue.set(card, 'returned',false);
          Vue.set(card, 'isMatched',false);
      });

      this.listColor.forEach((color) => {
          for(let value = 1; value <= this.maxPair; value++) {
            this.memoryCards.push(`${value}${color}`)
          }
      });   

      this.memoryCards = this.memoryCards.sort(() => 0.5 - Math.random());
    },
    
    returnCard: function (card) {
      
      this.cards.forEach((searchedCard) => {
        if (card === searchedCard.name) {
          return card = searchedCard;
        }
      })

      this.$store.commit('increment')

      if(this.returnedCards.length < 2 ) {
        card.returned = !card.returned
        if(card.returned === true) {
          this.returnedCards.push(card);
        }
        if(card.returned === false) {
          this.returnedCards.splice(card);

        }
      }
      if(this.returnedCards.length === 2) {
        this._match(card);
      }

    },

    _match(){

      if(this.returnedCards[0].value === this.returnedCards[1].value){
        setTimeout(() => {
          this.returnedCards.forEach(card => card.isMatched = true);
          this.returnedCards = []

          // All cards matched?
            if(this.cards.every(card => card.isMatched === true)){
                let score = this.$store.state.count;               
                this.$store.commit('pushScoreInAllScores', score)
                this.finish = true;
                this.gameRunning = false;
                
            }

         }, 600);
        }
      else{
         setTimeout(() => {
          this.returnedCards.forEach((card) => {card.returned = false});
          this.returnedCards = [];
         }, 1000);
      }
    },

  } 
}
</script>
