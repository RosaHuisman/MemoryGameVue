<template>
  <div class="header">
    <h1 class="header_title"> Memory Game </h1>
    <div class="header_scores">
      <span> High score : 25</span>
      <span> Score : {{ count }} </span>
    </div>
  </div>
  
</template>

<script>
import './styles.css';
import data from '/src/data.js'


export default {
  name: 'Header',
  data: data,

}
</script>


