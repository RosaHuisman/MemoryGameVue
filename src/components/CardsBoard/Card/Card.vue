<template>
  <div class="card">
     <img 
        :src="card.returned? require('@/assets/'+setName(card)+'.png'): back" 
        :alt="card.fruit" 
        :class="card.isMatched? 'card matched' : 'card' "
      />
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
    setName(card) {
      let split = card.fruit.split('')
      split.find((letter) => { 
        if(letter === '2'){
          split.pop();
        }
        })
    let join = split.join('');
    return join
    }
  }
}
</script> 
