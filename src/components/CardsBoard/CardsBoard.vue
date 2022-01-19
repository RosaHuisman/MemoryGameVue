<template>
  <div class="cardsboard">
       <div v-for="card in cards" :key="card.id" v-on:click="returnCard(card)">
         <!-- Passer les props à Card et faire l'affichage d'une card (enfin de toutes du coup)-->
         <Card :card = 'card' />
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
    create(){
        this.cards.forEach((card) => {
            Vue.set(card,'isFlipped',false);
        });

        /* for(color of this.listColor) {
            for(let value = 1; value < this.maxPair; value++) {
                this.memoryCards.push(`${value}${color}`)
            }
        }; */

       /*  this.memoryCards = this.memoryCards.sort(() => 0.5 - Math.random()); */


        /* this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards))); */
        this.reset();
    },

    
    
    returnCard: function (card) {
      if(this.returnedCards.length < 2) {
        card.returned = !card.returned
        this.returnedCards.push(card);
        console.log(this.returnedCards)
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
