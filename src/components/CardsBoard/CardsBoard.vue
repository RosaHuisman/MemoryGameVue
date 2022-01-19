<template>
  <div class="cardsboard">
      <button class="newgame_button" v-on:click="newGame()"> Nouvelle partie </button>
      
       <div v-if="this.setNewGame"  class="cards">
          <div v-for="card in cards" :key="card.id" v-on:click="returnCard(card)">
            <Card :card = 'card' />
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
    Card,
  },
  data: data,
  methods: {
    newGame() {
      this.setNewGame = true,
      this.cards.forEach((card) => {
          Vue.set(card, 'returned',false);
          Vue.set(card, 'isMatched',false);
          this.cards = this.cards.sort(() => 0.5 - Math.random());
      });
    },

    
    returnCard: function (card) {
      if(this.returnedCards.length < 2) {
        card.returned = !card.returned
        this.returnedCards.push(card);
      }
      if(this.returnedCards.length === 2) {
        this._match(card);
      }

    },

    _match(){
            if(this.returnedCards[0].value === this.returnedCards[1].value){
                this.returnedCards.forEach(card => card.isMatched = true);
                this.returnedCards = []
               }
            else{
                this.returnedCards.forEach((card) => {card.isFlipped = false});
                this.returnedCards = [];
            }
        },

  } 
}
</script>
