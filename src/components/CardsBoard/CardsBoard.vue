<template>
  <div class="cardsboard">
      <h3 v-if=" !this.$store.state.gameRunning && this.$store.state.finish && this.$store.state.count > 16"> Bravo, tu as fini la partie avec un score de : {{ $store.state.count }} points. Essaie d'améliorer ce score ! </h3>
       <h3 v-if=" !this.$store.state.gameRunning && this.$store.state.finish && this.$store.state.count === 16 "> Bravo, tu es un chef, j'ai rien à dire.  </h3>

    <div v-if=" !this.$store.state.gameRunning || this.$store.state.finish ">
      <button class="newgame_button" v-on:click="newGame()"> Nouvelle partie </button>
    </div>  
      
        <div v-if="this.$store.state.setNewGame && !this.$store.state.finish" class="cards">
            <div v-for="card in this.$store.state.memoryCards" :key="card.id" v-on:click="returnCard" >
                <Card :card = 'card' />
            </div>
       </div>
  </div>
</template>

<script>
import './styles.css';
import Card from '@/components/CardsBoard/Card/Card.vue';
import data from '/src/data.js'
//import Vue from 'vue'


export default {
  name: 'CardsBoard',
  components: {
    Card
  },
  data: data,
  methods: {
    newGame() {
      this.$store.commit('newGame')
      this.$store.state.memoryCards = [];

      // on crée un tableau de noms de fruits à partir de maxPair (celui ci pourra etre déterminé par le joueur, il sélectionnera un nombre) 
      let n = this.$store.state.maxPair
      let firstFruits = this.$store.state.fruits.slice(0, n)
      let secondFruits = this.$store.state.fruits2.slice(0, n)
      let fruitsToUse = firstFruits.concat(secondFruits)

      fruitsToUse.forEach((fruit) => {
          let id = fruitsToUse.indexOf(fruit) + 1;
          let oneCard = {id, fruit, returned: false, isMatched: false};
          this.$store.state.memoryCards.push(oneCard);
      })
      this.$store.state.memoryCards = this.$store.state.memoryCards.sort(() => 0.5 - Math.random());
    },
    
    returnCard: function (e) {

      this.$store.commit('increment')
      
      let findedCard = this.$store.state.memoryCards.find((card) => {
        if(card.fruit === e.target.alt) {
          return card.id
        }})
            
      if(this.$store.state.returnedCards.length < 2 ) {
        findedCard.returned = !findedCard.returned
        if(findedCard.returned === true) {
          this.returnedCards.push(findedCard);
        }
        if(findedCard.returned === false) {
          this.returnedCards.splice(findedCard);
        }
      }
      if(this.returnedCards.length === 2) {
        this._match();
      }

    },

    _match(){
      let wordTest1 = this.returnedCards[0].fruit.split('');
      let wordTest2 = this.returnedCards[1].fruit.split('');
     
     wordTest1.find((letter) => {
        if(letter === '2') {
          wordTest1.pop();
        }
      })
      let word1 = wordTest1.join('');

      wordTest2.find((letter) => {
        if(letter === '2'){
          wordTest2.pop();
        }
      }) 
      let word2 = wordTest2.join('');


      if(word1 === word2){
        setTimeout(() => {
          this.returnedCards.forEach(card => card.isMatched = true);
          this.returnedCards = []

          // All cards matched?
            if(this.cards.every(card => card.isMatched === true)){
                let score = this.$store.state.count;
                let dateTime = this._getNow();
                let group = {score, dateTime}               
                this.$store.commit('finish', group)      
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

    _getNow: function() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        this.timestamp = dateTime;
        return dateTime;
        }

  } 
}
</script>
