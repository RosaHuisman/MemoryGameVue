<template>
  <div class="card">
    <img :src="card.returned? card.path : back" :alt="card.name" >
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