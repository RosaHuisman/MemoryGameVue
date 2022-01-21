<template>
  <div class="cardsboard">
      <button class="newgame_button" v-on:click="newGame()"> Nouvelle partie </button>
      
       <div v-if="this.setNewGame" class="cards">
            <div v-for="card in memoryCards" :key="card" v-on:click="returnCard(card)" >
                <img 
                  :src="(cards.find((searchedCard) => searchedCard.name === card)).returned? require('@/assets/'+card+'.png') : back" 
                  :alt="card.name" 
                  :class="(cards.find((searchedCard) => searchedCard.name === card)).isMatched? 'matched' : null "
                  />
            </div>
       </div>
  </div>
  
</template>


<script>
import './styles.css';
//import Card from '@/components/CardsBoard/Card/Card.vue';
import data from '/src/data.js'
import Vue from 'vue'


export default {
  name: 'CardsBoard',
  components: {
  },
  data: data,
  methods: {
    newGame() {

      this.setNewGame = true;
      this.memoryCards = [];
          
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

          //All cards matched ?
            if(this.cards.every(card => card.isMatched === true)){
                //clearInterval(this.interval);
                this.finish = true;
            }


         }, 400);
        }
      else{
         setTimeout(() => {
          this.returnedCards.forEach((card) => {card.returned = false});
          this.returnedCards = [];
         }, 700);
      }
    },

  } 
}
</script>
