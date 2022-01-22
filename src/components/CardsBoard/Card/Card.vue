<template>
  <div class="card">
     <img 
        :src="(cards.find((searchedCard) => searchedCard.name === card)).returned? require('@/assets/'+card+'.png') : back" 
        :alt="card.name" 
        :class="(cards.find((searchedCard) => searchedCard.name === card)).isMatched? 'card matched' : 'card' "
      />
      {{card}}
  </div>
</template>

<script>
import './styles.css';
import data from '/src/data.js'


export default {
  name: 'Card',
  data: data,
  props: ['card', 'cards'],
  methods: {
    
  }
}
</script> 
