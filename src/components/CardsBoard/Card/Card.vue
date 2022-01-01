<template>
  <div class="card">
    <img :src="carte.path" :alt="carte.name">
  </div>
 
  
</template>


<script>
import './styles.css';


export default {
  name: 'Card',
  props: ['carte'],
}
</script>