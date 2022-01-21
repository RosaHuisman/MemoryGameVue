<!--   PLUS UTILISE (peut etre pour le moment peut etre pour toujours ....???? )

<template>
  <div class="card">
     <img :src="(cards.find((searchedCard) => searchedCard.name === card)).returned? require('@/assets/'+card+'.png') : back" :alt="card.name" >
  </div>
</template>

<script>
import './styles.css';
import data from '/src/data.js'


export default {
  name: 'Card',
  data: data,
  props: ['card'],
  methods: {
    
  }
}
</script> 

-->